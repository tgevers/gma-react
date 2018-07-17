import React from 'react'
import './Info.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const Info = (props) => {
    console.log(props.info)
    let infoStyle = {
        display: 'inline-block'
    }
    if (!props.info) infoStyle = { display: 'none' }
    return (

        <div style={infoStyle}>
            <List>
                {props.info ?
                    props.info.map(i => {
                        return <ListItem key={i}><ListItemIcon color="primary"><i className="material-icons">
                            keyboard_arrow_right
                            </i></ListItemIcon>{i}</ListItem>
                    })
                    : null}
            </List>
        </div>
    )
}


export default Info