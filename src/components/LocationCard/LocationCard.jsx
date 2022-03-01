import "./LocationCard.css"

const CityCard = props =>
    <div>
        <img src={require(`../../images/${props.img}`)} title={props.name} alt={props.name} />
        
        <h2>{props.name}</h2>

        <a href={props.link} target="_blank" rel="noreferrer">
            <div className="location-link">
                <span>{props.address}</span>
            </div>
        </a>

        <p>{props.date}</p>

        <p>{props.details}</p>
    </div>

export default CityCard