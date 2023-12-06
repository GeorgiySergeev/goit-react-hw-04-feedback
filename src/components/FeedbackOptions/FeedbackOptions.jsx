import { Button, ButtonList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map((key, i) => {
        return (
          <Button
            onClick={() => onLeaveFeedback(key)}
            key={i}
            buttonStyle={key}
          >
            {key}
          </Button>
        );
      })}
    </ButtonList>
  );
};
