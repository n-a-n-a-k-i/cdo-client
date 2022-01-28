import {FC} from 'react';
import {RouteType} from "../App";
import ViewNav from "../common/ViewNav";
import {MapContainer, TileLayer, ZoomControl} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import MapLocation from "./MapLocation";
import MapObject from "./MapObject";

const Map: FC = () => {

    return (
        <ViewNav
            title={'Карта'}
            selected={RouteType.MAP}
        >
            <MapContainer
                center={[55.75, 37.6]}
                zoom={10}
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
                <MapObject/>
                <MapLocation/>
            </MapContainer>
        </ViewNav>
    )

}

export default Map
