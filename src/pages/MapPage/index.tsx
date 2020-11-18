import React, {Component, createRef} from 'react';
import mapboxgl from 'mapbox-gl';

class MapPage extends Component {
    map: any = null;
    mapContainer = createRef<HTMLDivElement>();

    componentDidMount() {
        if (!this.mapContainer.current) {
            return;
        }
        mapboxgl.accessToken = 'pk.eyJ1IjoibGlzeW5vayIsImEiOiJja2hudHhvYmkwenk5MzRydDQ2bzAxZ3lrIn0.CW8miJdbbZ2rX233WcNceA';

        this.map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [30.3056504, 59.9429126],
            zoom: 10,
        });
    }

    componentWillUnmount() {
        this.map.remove();
    }

    render() {
        return (
            <div>
                <div data-test-id="map" ref={this.mapContainer} />
            </div>
        )
    }
}

export default MapPage;
