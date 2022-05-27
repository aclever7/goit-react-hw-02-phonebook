import PropTypes from 'prop-types';

function Contact({ handleContactFilter }) {
  return (
    <ul>
      {handleContactFilter.map(({ name, number, id }) => {
        return (
          <li>
            {name}: {number}
          </li>
        );
      })}
    </ul>
  );
}

Contact.propTypes = {
  handleContactFilter: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

export default Contact;
