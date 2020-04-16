import React, {Component} from 'react';
import axios from 'axios';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

class CFTimeline extends Component{
    constructor(){
        super();
        this.state = {
            cf: {}, 
        };
    };
    componentDidMount(){
        axios.get('https://codeforces.com/api/user.info?handles=masterd009') 
        .then( (response) => {
          this.setState({
            cf:response.data.result[0]
          });
          console.log(this.state)
        })
        .catch( (error) => {
          console.log(error);
        });  
    };
    render(){
      return (
        <div>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#fefefe', color: '#0b0c10' }}
            contentArrowStyle={{ borderRight: '7px solid  #fefefe' }}
            date="April 2019- August 2019"
            position="right"
            iconStyle={{ background: '#0b0c10', color: '#fefefe' }}
          >
            <h3 className="vertical-timeline-element-title"><img src={require('../assets/images/codeforces.png')} height="55" /></h3>
            <h4 className="vertical-timeline-element-subtitle">masterd009 ({String(this.state.cf.rank)}) on Codeforces {String(this.state.cf.rating)}</h4>
          </VerticalTimelineElement>
          
        </div>
      )
    }
}

export default CFTimeline;