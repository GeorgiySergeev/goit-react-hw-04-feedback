import React from 'react';
// import { Component } from 'react';
import { useState } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
// import { Notification } from 'components/Notification/Notification';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Logo } from 'components/Logo/Logo';
import { Container } from './App.styled';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = ['good', 'neutral', 'bad'];

  // const total = good + neutral + bad;
  const onClickHendler = option => {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        break;
    }
  };

  const resetStatistics = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (!total || !isFinite(total)) {
      return 0;
    } else {
      return Math.round((good / total) * 100);
    }
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <Logo text="Cafe Expresso" />
        <FeedbackOptions
          options={options}
          onLeaveFeedback={onClickHendler}
        ></FeedbackOptions>
        <Section title="Statistic">
          {' '}
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
            reset={resetStatistics}
          />
        </Section>
      </Section>
    </Container>
  );
}

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countTotalFeedback() {
//     return Object.values(this.state).reduce((acc, val) => acc + val, 0);
//   }

//   countPositiveFeedbackPercentage() {
//     const total = this.countTotalFeedback();
//     if (!total || !isFinite(total)) {
//       return 0;
//     } else {
//       return Math.round((this.state.good / total) * 100);
//     }
//   }

//   onClickHendler = e => {
//     this.setState(prevState => ({
//       [e]: prevState[e] + 1,
//     }));
//   };

//   resetStatistics = () => {
//     this.setState({ good: 0, neutral: 0, bad: 0 });
//   };

//   render() {
//     return (
//       <Container>
//         <Section title="Please leave feedback">
//           <Logo text="Cafe Expresso" />
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.onClickHendler}
//           ></FeedbackOptions>
//         </Section>

//         {this.countTotalFeedback() === 0 ? (
//           <Notification message="There is no feedback" />
//         ) : (
//           <Section title="Statistic">
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//               reset={this.resetStatistics}
//             />
//           </Section>
//         )}
//       </Container>
//     );
//   }
// }
