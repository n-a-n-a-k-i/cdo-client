import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../../hook/use-typed-selector";
import {useAction} from "../../hook/use-action";
import {Marker, Popup} from "react-leaflet";
import {DivIcon} from "leaflet";
import {renderToString} from "react-dom/server";
import {Avatar} from "@mui/material";

const MapObject: FC = () => {

    const {objects} = useTypedSelector(state => state.object)
    const {objectFind} = useAction()

    useEffect(() => {

        (async () => {

            await objectFind()

        })()

    }, [])

    if (!objects.length) {
        return null
    }

    return (
        <>
            {objects.map(({id, attributes: {name, latitude, longitude, images: {data}}}) => {

                const image = data[0]
                const url = image ? image.attributes.url : '/logo40.png'
                const src = process.env.REACT_APP_SERVER_URL + url

                return (
                    <Marker
                        key={id}
                        position={
                            [latitude, longitude]
                        }
                        icon={
                            new DivIcon({
                                className: undefined,
                                iconSize: [40, 40],
                                popupAnchor: [0, -20],
                                html: renderToString(
                                    <Avatar
                                        alt={src}
                                        src={src}
                                    />
                                )
                            })
                        }
                    >
                        <Popup>{name}</Popup>
                    </Marker>
                )

            })}
        </>
    )

}

export default MapObject
