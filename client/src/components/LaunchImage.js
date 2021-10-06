

const LaunchImage = ({url}) => {
    return (
        <div className="col-md-4 my-2 ">
           <img className="border border-white rounded" src={url} style={{width:"200px",height:"200px"}} alt="" />
        </div>
    )
}

export default LaunchImage
