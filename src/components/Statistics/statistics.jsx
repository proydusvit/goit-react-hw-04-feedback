import Section from "components/Section/sections";
import Notification from "components/Notification/Notification";
import styles from "components/Statistics/statistics.module.css";
import PropTypes from 'prop-types';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <Section title="Statistics">
    {!total ? (
      <Notification message="There is no feedback" />
    ) : (
      <ul className={styles.list}>
        <li>Good:{good}</li>
        <li>Neutral:{neutral}</li>
        <li>Bad:{bad}</li>
        <li className={styles.list__tomato}>Total:{total}</li>
        <li className={styles.list__green}>Positive feedback:{positivePercentage}%</li>
                    
      </ul>)}
    </Section>
)
export default Statistics;
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}