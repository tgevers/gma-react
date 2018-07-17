import React from 'react'
import './Modal.css'
import Aux from '../../hoc/aux';
import Button from '@material-ui/core/Button';

class Modal extends React.Component {
    state = {
        modal: true
    }
    dismissModal = () => {
        this.setState({ modal: false})
    }
    componentDidMount() {
        this.setState({
            modal: true
        })
    }
    render() {
        return (
            <Aux>
            {this.state.modal ?
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
                                <a target="_blank" href="https://github.com/tgevers/gma-react">https://github.com/tgevers/gma-react</a>
                            </p>
                        </div>
                        <Button onClick={this.dismissModal} variant="contained" color="primary">Dismiss</Button>
                    </div>
                    <div className="backdrop"></div>
                </Aux>
            : null}
            </Aux>
        )
    }
}

export default Modal