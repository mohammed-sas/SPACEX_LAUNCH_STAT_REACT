import {useParams} from 'react-router-dom';

import LaunchQuery from './query/LaunchQuery';

const Launch = () => {
    let {flight_number} = useParams();
    flight_number = parseInt(flight_number);
    return (
        <div>
           <h4>Launch </h4>
            <LaunchQuery flight_number={flight_number} />
        </div>
    )
}

export default Launch
