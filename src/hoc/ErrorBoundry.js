import { Component } from "react";

// great tools to catch errors for its children

class ErrorBoundry extends Component {
    state = {
        hasError: false
    };

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        /// save error log
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="alert alert-danger">
                    Something gone wrong. Try again later.
                </div>
            )
        }
        return this.props.children;
    }
}



export default ErrorBoundry