import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';

const appStyles = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 40,
  color: '#010101',
};

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = event => {
    this.setState(prevState => ({
      [event]: prevState[event] + 1,
    }));
  };
  // handleFeedback = event => {
  //   const name = event.target;
  //   this.setState(prevState => ({
  //     [name]: prevState[name] + 1,
  //   }));
  // };

  totalFeedback = () => {
    // return this.state.good + this.state.neutral + this.state.bad;
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  positivePercentageFeedback = () => {
    // return Math.round((this.state.good / this.totalFeedback()) * 100);
    const positivePercentage = Math.round(
      (this.state.good / this.totalFeedback()) * 100
    );
    return positivePercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    // const total = this.totalFeedback();
    // const positivePercentage = this.positivePercentageFeedback();

    return (
      <div style={{ appStyles }}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleFeedback}
          />
          {this.total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.totalFeedback()}
              positivePercentage={this.positivePercentageFeedback()}
            />
          )}
        </Section>
      </div>
    );
  }
}

// export const App = () => {
//   return (
//     <div style={{ appStyles }}>
//       <Section title="Please leave feedback">
//         <FeedbackOptions options={this.state}
//             onLeaveFeedback={this.handleLeaveFeedback} />
//         <Statistics
//           good={0}
//           neutral={0}
//           bad={0}
//           total={0}
//           positivePercentage={''}
//         />
//       </Section>
//     </div>
//   );
// };
