import React, { Component } from 'react'
import './Table.css'
import Card from '@material-ui/core/Card';


export default class Table extends Component {
    state = {
        headers: {
            col1: 'Name',
            col2: 'Lat',
            col3: 'Long'
        }
    }

    goToPoint = (event) => {
        console.log('[Table] goToPoint, event', event);
        this.props.goToPoint(event)
    }
    render() {
        return (
            <div className="table-markers">
                <p>
                    Click on a row to zoom to the lat & long displayed;<br />
                    Load the map first.
                </p>
                { this.props.show ? 
                <table>
                    <tbody>
                       <tr onClick={this.goToPoint}>
                            <th>Id</th>
                            <th>Lat</th>
                            <th>Long</th>
                        </tr>
                        {this.props.markers.map(
                            m => {
                                return (<tr key={m.id} onClick={() => this.goToPoint(m.id)}>
                                    <td>{m.id}</td>
                                    <td>{m.lat}</td>
                                    <td>{m.long}</td>
                                </tr>)
                            }
                        )}
                    </tbody>
                </table>
                : <Card>Map not Loaded</Card>}
            </div>
        )
    }
}