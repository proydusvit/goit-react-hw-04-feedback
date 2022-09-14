import React, { Component } from "react";
import Statistics from "./Statistics/statistics";
import FeedBackOptions from "./Feedback/feedbackOptions";
  
class App extends Component {
     state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
onLeaveFeedback = (propertyName) => {
  this.setState((prevState)  => {
const value = prevState[propertyName];
 return {
      [propertyName]: value + 1
    }
  })
}
  
countTotalFeedback() {
  const { good, neutral, bad } = this.state;
        return good + neutral + bad;
}
  
countPositiveFeedbackPercentage() {
 const total = this.countTotalFeedback();
  if (!total) {
            return 0;
        }
  return Math.round(this.state.good / this.countTotalFeedback() * 100);
    
}

  render() {
      const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();
    return <div
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
<FeedBackOptions options={[ 'good', 'neutral', 'bad']} onLeaveFeedback={this.onLeaveFeedback}/>
<Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage ={positivePercentage} />
         
      </div>
         </div>
    }

};
export default App;
