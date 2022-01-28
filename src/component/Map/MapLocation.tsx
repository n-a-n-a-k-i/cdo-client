import React, {FC, useState} from 'react';
import {useTypedSelector} from "../../hook/use-typed-selector";
import {DivIcon, LatLng} from "leaflet";
import {Marker, Popup, useMapEvents} from "react-leaflet";
import {renderToString} from "react-dom/server";
import {Avatar} from "@mui/material";
import {red} from "@mui/material/colors";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const MapLocation: FC = () => {

    const {account} = useTypedSelector(state => state.account)
    const [coordinate, setCoordinate] = useState<LatLng | null>(null)

    const map = useMapEvents({
        locationfound({latlng}) {
            setCoordinate(latlng)
        }
    })

    map.locate()

    if (!coordinate) {
        return null
    }

    return (
        <Marker
            position={coordinate}
            icon={
                new DivIcon({
                    className: undefined,
                    iconSize: [40, 40],
                    popupAnchor: [0, -20],
                    html: renderToString(
                        <Avatar sx={{bgcolor: red[500]}}>
                            <LocationOnIcon/>
                        </Avatar>
                    )
                })
            }
        >
            <Popup>{account?.user.username}</Popup>
        </Marker>
    )

}

export default MapLocation
