import {gql,useQuery} from '@apollo/client';
import LaunchItem from '../LaunchItem';



const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches {
            flight_number
            mission_name
            launch_date_local
            launch_success
        }
    }
`;

const LaunchesQuery = () =>{

        const { data, loading, error } = useQuery(LAUNCHES_QUERY);
        if(loading)
            return <h4>Loading....</h4>;
        if(error)
            console.log(error);

        return (
         <div>   
            {
                data.launches.map(launch => (
                    <LaunchItem key={launch.flight_number} launch={launch}/>
                ))
            }
        </div>
        )

}

export default LaunchesQuery;