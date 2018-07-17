import React from 'react'
import './Modal.css'
import Aux from '../../hoc/aux'
import Button from '@material-ui/core/Button'
import { withRouter } from 'react-router-dom'

class Modal extends React.Component {
    render() {
        return (
            <Aux>
            {this.props.show ?
                <Aux>
                    <div className="modal">
                        <div className="project-info">
                            <p>
                                <b>Title: </b> React & Google Maps JavaScript API Demo<br />
                                <b>Author: </b>Trevor Gevers<br /><b>Project Description:</b><br />
                                To demonstrate lazy loading of the Google Map Javascript API. Begin by clicking load.
                                The API is loaded a single time, when load is activated. All interaction, Parent to
                                Child does not trigger a reload, thus preventing unecessary consumption of the API.
                            <br />
                                <b>GitHub:</b><br />
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/tgevers/gma-react">https://github.com/tgevers/gma-react</a>
                            </p>
                        </div>
                        <Button onClick={() => this.props.toggle()} variant="contained" color="primary">Dismiss</Button>
                    </div>
                    <div className="backdrop"></div>
                </Aux>
            : null}
            </Aux>
        )
    }
}

export default withRouter(Modal)