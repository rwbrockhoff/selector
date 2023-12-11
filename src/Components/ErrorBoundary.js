import React, {Component} from "react";
import "./ErrorBoundary.css";

class ErrorBoundary extends Component {
    constructor(){
        super()
        this.state = {
            hasError: false
        }
    }
    componentDidCatch(){
        this.setState({hasError: true})
    }
    render(){
        return this.state.hasError ? 
            <h1>Uh oh! We encountered an error. Try again later. </h1>
            :
            this.props.children
    }
}

export default ErrorBoundary;