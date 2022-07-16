import React from "react";

class Ping extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({
        // ...this.state,
        date: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h1>trenutno vreme</h1>
        {this.state.date.toTimeString()}
        <hr />
      </div>
    );
  }
}

export default Ping;
