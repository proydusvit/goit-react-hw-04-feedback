import Section from "components/Section/sections";
import Notification from "components/Notification/Notification";
import styles from "components/Statistics/statistics.module.css"
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <Section title="Statistics">
    {!total ? (
      <Notification message="There is no feedback" />
    ) : (
      <ul className={styles.list}>
        <li>Good:{good}</li>
        <li>Neutral:{neutral}</li>
        <li>Bad:{bad}</li>
        <li>Total:{total}</li>
        <li>Positive feedback:{positivePercentage}%</li>
                    
      </ul>)}
    </Section>
)
export default Statistics;