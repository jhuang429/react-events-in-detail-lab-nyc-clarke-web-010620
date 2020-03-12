// Code DelayedButton Component Here
import React from 'react'





class DelayedButton extends React.Component {
    handleButton = (e) => {
    e.persist();
    window.setTimeout(
        this.props.onDelayedClick(e),this.props.delay)
    }
    
    render() {
        return (
            <button onClick={this.handleButton}>Delayed Button</button>
        )
    }
}

export default DelayedButton