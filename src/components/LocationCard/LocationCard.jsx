import { useEffect, useState }  from "react"
import "./LocationCard.css"

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
        <div>
            <img src={image} title={props.name} alt={props.name} width="100px" />

            <h2>{props.name}</h2>

            <a href={props.link} target="_blank" rel="noreferrer">
                <div className="location-link">
                    <span>{props.address}</span>
                </div>
            </a>

            <p>{props.date}</p>

            <p>{props.details}</p>
        </div>
    )
}

export default LocationCard