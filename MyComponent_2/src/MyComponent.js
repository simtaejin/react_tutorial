import React, { Component } from 'react';

class MyComponent extends Component {
    /*
        state = {
            number : 0,
            theNumber : 1
        }
        handleClick = () => {
            this.setState({
                number: this.state.number+1
            });
        }
    */
    state = {
        info: { username: 'velopert', number:1}
    }
    handleClick = () => {
        this.setState({
            info:{
                ... this.state.info,
                username: 'hello'
            }
        });
    }

    render() {
        {/*const {number, theNumber} = this.state;*/}
        const {info} = this.state;

        return (
            <div>
                {/*<h1>{number} {theNumber}</h1>*/}
                {/*<button onClick={()=>{this.setState({number:number+1})}}>*/}
                {/*<button onClick={this.handleClick}>*/}
                <h1>{info.username} {info.number}</h1>
                <button onClick={this.handleClick}>
                    나를 눌러보세요.
                </button>
            </div>
        );
    }

}

export default MyComponent;
