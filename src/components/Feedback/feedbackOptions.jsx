import Section from "components/Section/sections";
import style from "components/Feedback/feedback.module.css"
const FeedBackOptions = ({ options, onLeaveFeedback }) => {

    return (
       <Section title="Please leave feedback">
    <div>
      {options.map(option => (
        <button
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

//   <button onClick={() => this.onLeaveFeedback("good")}>Good</button>
//             <button onClick={() => this.onLeaveFeedback("neutral")}>Neutral</button>
//             <button onClick={() => this.onLeaveFeedback("bad")}>Bad</button>