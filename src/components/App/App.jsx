import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  voteGood = event => {
    console.log(event);
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  voteNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  voteBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const positivePercentage =
      (this.state.good / this.countTotalFeedback()) * 100;
    return positivePercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = total
      ? this.countPositiveFeedbackPercentage()
      : 0;
    return (
      <div>
        <h2>Please leave feedback</h2>
        <ul>
          <li>
            <button type="button" onClick={this.voteGood}>
              good
            </button>
          </li>
          <li>
            <button type="button" onClick={this.voteNeutral}>
              neutral
            </button>
          </li>
          <li>
            <button type="button" onClick={this.voteBad}>
              bad
            </button>
          </li>
        </ul>

        <h2>Statistics</h2>
        <ul>
          <li>
            <span>Good: {good}</span>
          </li>
          <li>
            <span>Neutral: {neutral}</span>
          </li>
          <li>
            <span>Bad: {bad}</span>
          </li>
          <li>
            <span>Total: {total}</span>
          </li>
          <li>
            <span>Positive feedback: {positivePercentage}%</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
