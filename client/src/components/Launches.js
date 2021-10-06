import LaunchesQuery from './query/LaunchesQuery'
import MissionKey from './MissionKey'
const Launches = () => {
   
    return (
        <div>
            <h1 className="display-4 my-3">Launches</h1>
            <MissionKey/>
            <LaunchesQuery/>
                
        </div>
    )
}

export default Launches
