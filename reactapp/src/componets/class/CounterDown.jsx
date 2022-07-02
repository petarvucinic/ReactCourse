import React from "react";

class CounterDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num: Math.floor(Math.random() * 10) + 1 };
  }
  componentDidMount() {
      this.timerID = setInterval(() => {
        if (this.state.num !== 0) {
        this.setState({
          num: this.state.num - 1,
        });
    } else {
        clearInterval(this.timerID)
    }
}, 1000);
}

  componentWillUnmount() {}

  render() {
    return <div>{this.state.num}</div>;
  }
}

export default CounterDown;
