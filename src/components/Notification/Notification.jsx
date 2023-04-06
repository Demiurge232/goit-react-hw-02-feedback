import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return (
    <div>
      <h3>{message}</h3>
    </div>
  );
};
export default Notification;

Notification.propTypes = {
  message: PropTypes.string,
};
