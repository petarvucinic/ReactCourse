import React from "react";

class FromDate extends React.Component {
  constructor(props) {
    super(props);
    const date = new Date(2022, 6, 1, 5, 23, 59).getSeconds();
    this.state = { dayYesterday: date, time: "" };
  }

  componentDidMount() {
    this.diffId();
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    return <p>{this.state.time}</p>;
  }
}

export default FromDate;
