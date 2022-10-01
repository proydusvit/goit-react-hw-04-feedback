import React from "react";
import Statistics from "./Statistics/statistics";
import FeedBackOptions from "./Feedback/feedbackOptions";
  import { useState } from 'react';

function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

 
  const onLeaveFeedback = voteName => {
    switch (voteName) {
      case 'good':
        setGood(good + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
   }

 }
  
const countTotalFeedback = () => {
        return good + neutral + bad;
}
  
 const countPositiveFeedbackPercentage = () => {
 const total = countTotalFeedback();
  if (!total) {
            return 0;
        }
  return Math.round(good / countTotalFeedback() * 100);
    
}

  
   
const total = countTotalFeedback();
const positivePercentage = countPositiveFeedbackPercentage();
  
    return( <div
       style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
<div>
<FeedBackOptions options={[ 'good', 'neutral', 'bad']} onLeaveFeedback={onLeaveFeedback}/>
<Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage ={positivePercentage} />
         
      </div>
         </div>
    
    )
};
export default App;
