import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderBall: false,
            posi : 0,
            ballPosition: { left: "0px" }
        };
        this.renderChoice = this.renderBallOrButton.bind(this)
        this.buttonClickHandler = this.buttonClickHandler.bind(this)
    };

    buttonClickHandler = () => {
        // When the Start button is clicked, hide the button and render the ball
        this.setState({
          renderBall: true
        });
      };
    
      handleKeyDown = (event) => {
        // When the right arrow key is pressed, move the ball to the right by 5 pixels
        if (event.key === "ArrowRight") {
          this.setState((prevState) => ({
            ballPosition: {
              left: `${parseInt(prevState.ballPosition.left) + 5}px`
            }
          }));
        }
      };
    renderBallOrButton() {
		if (this.state.renderBall) {
		    return <div className="ball" style={this.state.ballPosition}></div>
		} else {
		    return <button onClick={this.buttonClickHandler} >Start</button>
		}
    }

    // bind ArrowRight keydown event
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
    }
    componentWillUnmount() {
        // Remove the event listener when the component is unmounted
        document.removeEventListener("keydown", this.handleKeyDown);
      }

    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        )
    }
}


export default App;
