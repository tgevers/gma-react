/* global google */
import { latLng } from './latLng'

export const marker = (lat, lng, map, title) => {
    let ll = latLng(lat, lng)
    return new google.maps.Marker({
        position: ll,
        map: map,
        title: title
    }) 
}