import React from 'react'
import Button from '@material-ui/core/Button'
import { withRouter } from 'react-router-dom'
import './otherControls.css'

const otherControls = (props) => {
    console.log('props.route', props.googleMapRef);
    
    return (
        <div className="other-controls">
            <p>URL: /google-map Demonstrate Controls outside of parent, this child component received googleMap ref defined in parent as a prop</p>
            <Button variant="contained" color="primary" onClick={() => props.googleMapRef.current.toggleZoom()} disabled={false}>Toggle Zoom</Button> 
        </div>
    )
}


export default withRouter(otherControls)