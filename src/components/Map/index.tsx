import React, {Component, createRef} from 'react';
import mapboxgl from 'mapbox-gl';

import {MapWrapper, MapContainer} from './styles';

const coordinates = [
    [30.272182, 59.800652],
    [30.274046, 59.800365],
    [30.275146, 59.800365],
    [30.280516, 59.797192],
    [30.317898, 59.790894],
    [30.324347, 59.793816],
    [30.32362, 59.806255],
    [30.323389, 59.812008],
    [30.334572, 59.810379],
    [30.3368, 59.810448],
    [30.35289, 59.81477],
    [30.370289, 59.815208],
    [30.379545, 59.81636],
    [30.380919, 59.818024],
    [30.361811, 59.855789],
    [30.341515, 59.894806],
    [30.339552, 59.90173],
    [30.360826, 59.930965],
    [30.326199, 59.935318],
    [30.328283, 59.940693],
    [30.324488, 59.941109],
    [30.322104, 59.942886],
    [30.316589, 59.940495],
    [30.316273, 59.940578],
];

export const drawRoute = (map: any, coordinates: any) => {
    map.flyTo({
        center: coordinates[0],
        zoom: 15
    });

    map.addLayer({
        id: "route",
        type: "line",
        source: {
            type: "geojson",
            data: {
                type: "Feature",
                properties: {},
                geometry: {
                    type: "LineString",
                    coordinates
                }
            }
        },
        layout: {
            "line-join": "round",
            "line-cap": "round"
        },
        paint: {
            "line-color": "#ffc617",
            "line-width": 8
        }
    });
};

class Map extends Component {
    map: any = null;
    mapContainer = createRef<HTMLDivElement>();

    componentDidMount() {
        if (!this.mapContainer.current) {
            return;
        }
        mapboxgl.accessToken = 'pk.eyJ1IjoibGlzeW5vayIsImEiOiJja2hudHhvYmkwenk5MzRydDQ2bzAxZ3lrIn0.CW8miJdbbZ2rX233WcNceA';

        this.map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/light-v10',
            center: [37.59, 55.74],
            zoom: 13,
        });

        const nav = new mapboxgl.NavigationControl({
            showCompass: true,
        });
        this.map.addControl(nav, "bottom-right");

        this.map.on('load', () => {
            drawRoute(this.map, coordinates);
        });

    }

    componentWillUnmount() {
        this.map.remove();
    }

    render() {
        return (
            <MapWrapper>
                <MapContainer data-test-id="map" ref={this.mapContainer} />
            </MapWrapper>
        )
    }
}

export default Map;
