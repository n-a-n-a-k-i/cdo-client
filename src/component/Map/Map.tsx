import React, {FC, useState} from 'react';
import {RouteType} from "../App";
import ViewNav from "../common/ViewNav";
import {MapContainer, Marker, Popup, TileLayer, useMapEvents, ZoomControl} from 'react-leaflet'
import {DivIcon, LatLng} from "leaflet";
import 'leaflet/dist/leaflet.css'
import {useTypedSelector} from "../../hook/use-typed-selector";
import {renderToString} from "react-dom/server";
import {Avatar} from "@mui/material";
import {red} from "@mui/material/colors";
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Location() {

    const {account} = useTypedSelector(state => state.account)
    const [coordinate, setCoordinate] = useState<LatLng | null>(null)

    const map = useMapEvents({
        locationfound({latlng}) {

            console.log(latlng)
            setCoordinate(latlng)
            map.flyTo(latlng, 15)

        }
    })

    map.locate()

    return coordinate ? (
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
    ) : null

}

const Map: FC = () => {

    const coordinate = new LatLng(69.674041, 105.306388)

    return (
        <ViewNav
            title={'Карта'}
            selected={RouteType.MAP}
        >
            <MapContainer
                center={coordinate}
                zoom={3}
                style={{
                    width: '100%',
                    height: '100vh'
                }}
                zoomControl={false}
            >
                <TileLayer
                    attribution={'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}
                    url={'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'}
                />
                <ZoomControl
                    position="bottomright"
                />
                <Location/>
            </MapContainer>
        </ViewNav>
    )

}

export default Map
