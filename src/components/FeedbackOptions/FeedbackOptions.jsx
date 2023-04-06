import FeedbackOptionsItems from 'components/FeedbackOptionsItem/FeedbackOptionsItem';
import PropTypes from 'prop-types';
import { FeedbackOptionsUl } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackOptionsUl>
      {options.map(({ label }) => (
        <FeedbackOptionsItems
          key={label}
          voteName={label}
          onLeaveFeedback={onLeaveFeedback}
        />
      ))}
    </FeedbackOptionsUl>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  onLeaveFeedback: PropTypes.func,
};
