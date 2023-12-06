import { Table } from './Statistics.styled';
import { Button } from 'components/FeedbackOptions/FeedbackOptions.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  reset,
}) => {
  return (
    <div
      style={{
        alignItems: 'center',
      }}
    >
      <Table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Good:</td>
            <td id="goodValue">{good}</td>
          </tr>
          <tr>
            <td>Neutral:</td>
            <td id="neutralValue">{neutral}</td>
          </tr>
          <tr>
            <td>Bad:</td>
            <td id="badValue">{bad}</td>
          </tr>
          <tr>
            <td>Total:</td>
            <td id="totalValue">{total}</td>
          </tr>
          <tr>
            <td>Positive feedback:</td>
            <td id="positiveValue">{`${positivePercentage}%`}</td>
          </tr>
        </tbody>
      </Table>
      <Button onClick={reset} buttonStyle="reset">
        Reset
      </Button>
    </div>
  );
};
