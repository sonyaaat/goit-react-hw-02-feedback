import React,{Component} from "react";
import Statistics from "./Statistics/Statistics"
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions"
import Section from "./Section/Section";

class App extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }
    addFeedback=(el)=>{
      this.setState((prevState)=>(
        {
          [el]:prevState[el]+1
        }
      ))
    }
    countTotalFeedback=()=>{
        return this.state.good+this.state.neutral+this.state.bad;
    }
    countPositiveFeedbackPercentage=()=>{
        return 100*this.state.good/this.countTotalFeedback();
    }
    render(){
        return(
            <>
            <Section title="Please leave feedback">
              <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.addFeedback}></FeedbackOptions>
            </Section>
            {
              this.countTotalFeedback()>0?
              (<Section title="Statistics">
                <Statistics good={this.state.good} bad={this.state.bad} neutral={this.state.neutral} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} /> 
              </Section>):
              (<h1 style={{textAlign:"center",color:"red"}}>No feedback given</h1>)
            }
            
            </>
        )
      }
}
export default App