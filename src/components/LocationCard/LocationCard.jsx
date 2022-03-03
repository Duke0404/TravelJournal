import { useEffect, useState }  from "react"

import "./LocationCard.css"

import mapIcon from "../../images/icons/map.svg"

const LocationCard = props => {
    const [image, setImage] = useState()
    const [loading, setLoading] = useState(true)
    useEffect(
        () => {
            setLoading(true);
            (
                async () => {
                    const img = await import(`../../images/${props.img}`)
                    setImage(img.default)
                    setLoading(false)
                }
            )()
        },
        [props.img]
    )

    if(loading)
        return "Loading..."

    return (
        <div className="card-container">
            <img className="card-image" src={image} title={props.name} alt={props.name} />

            <h2 className="card-title">{props.name}</h2>

            <a href={props.link} target="_blank" rel="noreferrer">
                <div className="location-link">
                    <img className="location-link-icon" src={mapIcon} alt="Location" />
                    <span>{props.address}</span>
                </div>
            </a>

            <p>{props.date}</p>

            <p>{props.details}</p>
        </div>
    )
}

export default LocationCard