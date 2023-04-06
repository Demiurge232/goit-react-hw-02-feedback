import PropTypes from 'prop-types';
import { StatisticsUL, StatisticsSpan } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsUL>
      <li>
        <StatisticsSpan>Good: {good}</StatisticsSpan>
      </li>
      <li>
        <StatisticsSpan>Neutral: {neutral}</StatisticsSpan>
      </li>
      <li>
        <StatisticsSpan>Bad: {bad}</StatisticsSpan>
      </li>
      <li>
        <StatisticsSpan>Total: {total}</StatisticsSpan>
      </li>
      <li>
        <StatisticsSpan>
          Positive feedback: {positivePercentage}%
        </StatisticsSpan>
      </li>
    </StatisticsUL>
  );
};
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
