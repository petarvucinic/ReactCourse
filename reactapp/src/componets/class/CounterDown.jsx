import React from "react";

class CounterDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num: Math.floor(Math.random() * 100) + 1 };
  }
  componentDidMount() {
    this.timerID = setInterval(() => {
      if (this.state.num !== 0) {
        this.setState({
          ...this.state,
          num: this.state.num - 1,
        });
      } else {
        clearInterval(this.timerID);
      }
    }, 1000);
  }

  componentWillUnmount() {}

  render() {
    return (
      <div>
        <h1>counter down</h1>
        {this.state.num}
        <hr />
      </div>
    );
  }
}

export default CounterDown;
