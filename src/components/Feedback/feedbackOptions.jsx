import Section from "components/Section/sections";
import style from "components/Feedback/feedback.module.css";
import PropTypes from 'prop-types';
const FeedBackOptions = ({ options, onLeaveFeedback }) => {

    return (
       <Section title="Please leave feedback">
    <div>
      {options.map(option => (
          <button
              className={style.button}
          key={option}
          type="button"
          label={option}
          onClick={() => onLeaveFeedback(option)}
        >
    {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
        </Section>
  );
};


export default FeedBackOptions;

FeedBackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}