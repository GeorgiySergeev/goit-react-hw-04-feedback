import { Button, ButtonList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map((option, i) => {
        return (
          <Button
            onClick={() => onLeaveFeedback(option)}
            key={i}
            buttonStyle={option}
          >
            {option}
          </Button>
        );
      })}
    </ButtonList>
  );
};
