import {gql,useQuery} from '@apollo/client';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import LaunchImage from '../LaunchImage';

const LAUNCH_QUERY = gql `
    query LaunchQuery($flight_number : Int!){
        launch(flight_number : $flight_number){
            flight_number
            mission_name
            launch_year
            launch_success
            launch_date_local
            rocket {
                rocket_id
                rocket_name
                rocket_type
            }
            links {
                flickr_images
            }
        }
    }
`;

const LaunchQuery = ({flight_number}) =>{

    const { data, loading, error } = useQuery(LAUNCH_QUERY,{
        variables : {flight_number}
    });
    if(loading)
        return <h4>Loading....</h4>;
    if(error)
        console.log(error);
    const {mission_name,launch_year,links:{flickr_images},launch_success,rocket :{rocket_id,rocket_name,rocket_type}} = data.launch;
    return (
       <div> 
            <h1 className="display-4 my-3">
                <span className="text-dark">Mission : {mission_name}</span>
            </h1>
            <h4 className="mb-3">
                Launch Details
            </h4>
            <ul className="list-group">
                <li className="list-group-item">
                    Flight Number : {flight_number}
                </li>
                <li className="list-group-item">
                    Launch Year : {launch_year}
                </li>
                <li className="list-group-item">
                    Launch Successful : <span className={classNames({
                         'text-success': launch_success,
                         'text-danger': !launch_success
                    })}>{launch_success ? 'yes' : 'no'}</span>
                </li>
                <li className="list-group-item">
                    Flight Number : {flight_number}
                </li>
            </ul>
            <h4 className="my-3">Rocket Details</h4>
            <ul className="list-group">
                <li className="list-group-item">
                    Rocket ID : {rocket_id}
                </li>
                <li className="list-group-item">
                    Rocket Name : {rocket_name}
                </li>
                <li className="list-group-item">
                    Rocket Type : {rocket_type}
                </li>
            </ul>
            <hr />
            
            <Link to="/" className="btn btn-secondary">Back</Link>
            <div className="container">
                <div className="row my-2">
                {
                    flickr_images.map(url => ( <LaunchImage url={url}/>
                    ))
                }
                </div>
            </div>
               
        </div>
    )

}

export default LaunchQuery;