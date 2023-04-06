import PropTypes from 'prop-types';
export const Section = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
