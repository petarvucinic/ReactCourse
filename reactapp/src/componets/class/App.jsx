import React from "react";

class App extends React.Component {
    render() {
        return (
            <div>
                <p>Helo {this.props.name.name}</p>
                {this.props.children}
            </div>
        )
    }
}


export default App




