// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {
    render() {
        return (
            <button onClick={(event)=>this.props.onReceiveCoordinates([event.clientX, event.clientY])}>Coordinates Button</button>
        )
    }
}

export default CoordinatesButton