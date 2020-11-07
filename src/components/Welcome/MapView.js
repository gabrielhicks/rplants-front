import React, { Component } from 'react'
import {MapStyle} from './WelcomeStyle'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { coordinates } from '../../db'

export class MapView extends Component {
    render() {
        return (
            <MapStyle>
                <MapContainer center={[40.7628, -73.9800]} zoom={15}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
                
                {coordinates.map(plant => (
                    <Marker key={plant.id} position={[plant.latitude, plant.longitude]}></Marker>
                ))}
                
                </MapContainer>
            </MapStyle>
        )
    }
}

export default MapView
