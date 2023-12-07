import { useState } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Logo } from 'components/Logo/Logo';
import { Container } from './App.styled';

// * Вариант №1, один юзСтейт в котром объект стейтов
export function App() {
  const [options, setOptions] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onClickHendler = option => {
    setOptions(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  const resetStatistics = () => {
    setOptions({ good: 0, neutral: 0, bad: 0 });
  };

  const countTotalFeedback = () => {
    const total = Object.values(options).reduce((acc, n) => acc + n, 0);
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (!total || !isFinite(total)) {
      return 0;
    } else {
      return Math.round((options.good / total) * 100);
    }
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <Logo text="Cafe Expresso" />
        <FeedbackOptions
          options={Object.keys(options)}
          onLeaveFeedback={onClickHendler}
        ></FeedbackOptions>
        <Section title="Statistic">
          {' '}
          <Statistics
            good={options.good}
            neutral={options.neutral}
            bad={options.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
            reset={resetStatistics}
          />
        </Section>
      </Section>
    </Container>
  );
}

// * Вариант №2,  юзСтейт на каждий  стейт, Хендлеер через свич
// export function App() {
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);
//   const options = ['good', 'neutral', 'bad'];

//
//   const onClickHendler = option => {
//     switch (option) {
//       case 'good':
//         setGood(good + 1);
//         break;
//       case 'neutral':
//         setNeutral(neutral + 1);
//         break;
//       case 'bad':
//         setBad(bad + 1);
//         break;

//       default:
//         break;
//     }
//   };

//   const resetStatistics = () => {
//     setGood(0);
//     setNeutral(0);
//     setBad(0);
//   };

//   const countTotalFeedback = () => {
//     return good + neutral + bad;
//   };

//   const countPositiveFeedbackPercentage = () => {
//     const total = countTotalFeedback();
//     if (!total || !isFinite(total)) {
//       return 0;
//     } else {
//       return Math.round((good / total) * 100);
//     }
//   };

//   return (
//     <Container>
//       <Section title="Please leave feedback">
//         <Logo text="Cafe Expresso" />
//         <FeedbackOptions
//           options={options}
//           onLeaveFeedback={onClickHendler}
//         ></FeedbackOptions>
//         <Section title="Statistic">
//           {' '}
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={countTotalFeedback()}
//             positivePercentage={countPositiveFeedbackPercentage()}
//             reset={resetStatistics}
//           />
//         </Section>
//       </Section>
//     </Container>
//   );
// }
