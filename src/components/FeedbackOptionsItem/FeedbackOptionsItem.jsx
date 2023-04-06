import PropTypes from 'prop-types';
import { FeedbackOptionsItemsButton } from './FeedbackOptionsItem.styled';

const FeedbackOptionsItems = ({ voteName, onLeaveFeedback }) => {
  return (
    <li>
      <FeedbackOptionsItemsButton
        type="button"
        onClick={() => onLeaveFeedback(voteName)}
      >
        {voteName}
      </FeedbackOptionsItemsButton>
    </li>
  );
};
export default FeedbackOptionsItems;

FeedbackOptionsItems.propTypes = {
  voteName: PropTypes.string,
  onLeaveFeedback: PropTypes.func,
};
