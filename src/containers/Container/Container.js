import React from 'react'

import Map from '../../components/Map/Map'
import { wrapper } from '../../utils/GoogleApiComponent';

export class Container extends React.Component {
    render() {
        if (!this.props.loaded) {
            return <div>Loading...</div>
        }
        const style = {
            width: '100vw',
            height: '100vh'
        }
        return (
            <div style={style}>
                <Map google={this.props.google}
                />
            </div>
        )
    }
}

export default wrapper({
    apiKey: 'AIzaSyDDXVgr3M5AyDXGuhRAwbjBhZgtmq3mzO0'
})(Container)