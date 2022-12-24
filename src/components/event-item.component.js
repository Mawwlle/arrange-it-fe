import React, {useEffect, useState} from 'react'
import PlaceService from "../services/place.service";

export default function SpecificEventItem(props) {
    const [place, setPlace] = useState({});
    useEffect(() => {
        PlaceService.getPlaces().then(
            (result) => {
                setPlace(result)
            }).catch(
            error => {
                console.log(error)
            }
        );
    }, []);

    const item = place?.data?.map((event) => {
        if (event.id === props.event.place){
            return event.name
        }
    })


    return <div>
        <div style={{color: "gray", marginTop: 30}}>Место проведения: {item}</div>
        <div style={{color: "gray"}}>Дата проведения: {props?.event?.date.replace("T", "  ")}</div>
    </div>
}
