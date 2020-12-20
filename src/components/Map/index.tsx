import React, {Component, createRef} from 'react';
import {connect} from 'react-redux';
import mapboxgl from 'mapbox-gl';

import {MapWrapper, MapContainer} from './styles';
import {drawRoute} from './drawRoute';

mapboxgl.accessToken = 'pk.eyJ1IjoibGlzeW5vayIsImEiOiJja2hudHhvYmkwenk5MzRydDQ2bzAxZ3lrIn0.CW8miJdbbZ2rX233WcNceA';

class Map extends Component<any, any> {
    map: any = null;
    mapContainer = createRef<HTMLDivElement>();

    componentDidUpdate() {
        if (this.props.route) {
            drawRoute(this.map, this.props.route);
        }
    }

    componentDidMount() {
        if (!this.mapContainer.current) {
            return;
        }

        this.map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/light-v10',
            center: [30.3609, 59.9311],
            zoom: 12,
        });

        const nav = new mapboxgl.NavigationControl({
            showCompass: true,
        });
        this.map.addControl(nav, "bottom-right");

        this.map.on('load', () => {
            if (this.props.route) {
                drawRoute(this.map, this.props.route);
            }
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
const mapStateToProps = (state: any) => ({route: state.address.coordinates});

export default connect(mapStateToProps)(Map);
