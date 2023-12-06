import React from 'react';

import { Component } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Logo } from 'components/Logo/Logo';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, val) => acc + val, 0);
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    if (!total || !isFinite(total)) {
      return 0;
    } else {
      return Math.round((this.state.good / total) * 100);
    }
  }

  onClickHendler = e => {
    this.setState(prevState => ({
      [e]: prevState[e] + 1,
    }));
  };

  resetStatistics = () => {
    this.setState({ good: 0, neutral: 0, bad: 0 });
  };

  render() {
    return (
      <Container>
        <Section title="Please leave feedback">
          <Logo text="Cafe Expresso" />
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onClickHendler}
          ></FeedbackOptions>
        </Section>

        {this.countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section title="Statistic">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
              reset={this.resetStatistics}
            />
          </Section>
        )}
      </Container>
    );
  }
}
