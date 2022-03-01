import "./LocationCard.css"

// import img from {`../../images/${props.img}`}

const LocationCard = props =>
    <div>
        <img src={`../../images/${img}`} title={props.name} alt={props.name} />
        
        <h2>{props.name}</h2>

        <a href={props.link} target="_blank" rel="noreferrer">
            <div className="location-link">
                <span>{props.address}</span>
            </div>
        </a>

        <p>{props.date}</p>

        <p>{props.details}</p>
    </div>

export default LocationCard