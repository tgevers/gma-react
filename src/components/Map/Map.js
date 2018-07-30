/* global google */
import React, { Component } from 'react'
import * as features from '../MapFeatures/index'
import './Map.css'
import Info from '../Info/Info';

export default class Map extends Component {
    constructor(props) {
        super(props)
        global.map = null
        global.markers = []
    }
    state = {
        show: false,
        infoShow: 'none',
        info: null,
        activePoint: null,
        zoomControl: false
    }
    loadTheMap = () => {
        let url = 'https://maps.googleapis.com/maps/api/js?key=' + this.props.API + '&callback=initMap'
        console.log(url)
        this.loadJS(url)
    }
    loadJS = (src) => {
        var ref = window.document.getElementsByTagName("script")[0];
        var script = window.document.createElement("script");
        script.src = src;
        script.async = true;
        ref.parentNode.insertBefore(script, ref);
    }

    componentDidMount() {
        window.initMap = this.initMap;
    }
    initMap = () => {
        var ll = features.latLng(this.props.lat, this.props.lng);
        global.map = new google.maps.Map(document.getElementById('map'), {
            center: ll,
            zoom: this.props.zoom
        });
        console.log('google map', global.map);
    }
    addMarker = (lat, lng, title) => {
        let marker = features.marker(lat, lng, global.map, title)
        global.markers.push(marker)
    }
    hideMarkers = () => {
        this.setMapOnAll(null)
    }
    showMarkers = () => {
        this.setMapOnAll(global.map)
    }
    clearMarkers = () => {
        this.setMapOnAll(null)
        global.markers = []
    }
    setMapOnAll = (map) => {
        for (var i = 0; i < global.markers.length; i++) {
            global.markers[i].setMap(map);
        }
    }
    zoomIn = (zoom) => {
        global.map.setZoom(zoom)
    }
    showMap = () => {
        console.log('showMap function called');
        let mapVisible = this.state.show
        if (mapVisible) {
            this.setState({ show: !mapVisible })
            document.getElementById('mc').style.display = ''
        } else {
            this.setState({ show: !mapVisible })
            document.getElementById('mc').style.display = 'none'
        }
    }
    showInfo = () => {
        if (this.state.infoShow === "none") this.setState({infoShow: 'block'})
        else this.setState({infoShow: 'none'})
    }
    setLeft = (left) => {
        document.getElementById('map').style.left = left
    }
    panTo = (point) => {
        console.log('pan To called');
        let mark = this.props.points.find(p => p.id === point)
        var latLng = features.latLng(mark.lat,mark.long)
        global.map.panTo(latLng)
        this.zoomIn(16)
        let list = Object.values(mark)
        console.log('mark', mark);
        
        this.setState({
            info: list
        })
    }
    resetMap = () => {
        var ll = features.latLng(this.props.lat, this.props.lng);
        this.setState({info: null})
        global.map.panTo(ll)
        this.clearMarkers()
        this.zoomIn(this.props.zoom)
    }
    toggleZoom = () => {
        let control = this.state.zoomControl
        if (this.props.load) {
            if (!control) {
                global.map.setOptions({'zoomControl': false})
                this.setState({zoomControl: true})
            } 
            else {
                global.map.setOptions({'zoomControl': true})
                this.setState({zoomControl: false})
            }
        }
    }
    render() {
        const mapStyle = {
            top: '5%',
            width: 500,
            height: 300,
            border: '1px solid #8080809e',
        };
        return (
            <div id="mc" className="map-container">
                <div className='map-border'>
                    <div id="map" style={mapStyle}></div>
                    <Info display={this.state.infoShow} className="info" info={this.state.info} /> 
                </div>
            </div>
        )
    }
}