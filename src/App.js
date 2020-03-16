import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import './App.css';
import classNames from "classnames";
import Parallax from "./components/Parallax.js";
import GridContainer from "./components/GridContainer.js";
import GridItem from "./components/GridItem.js";
import Header from "./components/Header"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaStar, FaBook, FaBookOpen} from 'react-icons/fa'
import { MdWork } from 'react-icons/md'
import { GiMaterialsScience } from 'react-icons/gi'
import styles from "./assets/styles/components.js";
import HeaderLinks from './components/HeaderLinks';
import { Grid } from '@material-ui/core';
import Projects from './components/Projects';
const useStyles = makeStyles(styles);


function App(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 300,
          color: "primary"
        }}
        {...rest}
      />
      <Parallax>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Hey, I'm Dhruv.</h1>
                <h3 className={classes.subtitle}>
                  A socially awkward (!web) developer.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)} style={{backgroundColor: "#d6d7d8"}}>
        <div className={classes.brand} style={{backgroundColor: "#1f2833"}}>
          <h3 className={classes.title} style={{fontSize: 40, marginLeft: 75, color: "#fefefe"}}>Projects</h3>
        </div>
        <br></br>
        <Projects />
        <br></br>
      </div>
      <div className={classNames(classes.main, classes.mainRaised)} style={{backgroundColor: "#d6d7d8", marginTop:10}}>
        <div className={classes.brand} style={{backgroundColor: "#1f2833"}}>
          <h3 className={classes.title} style={{fontSize: 40, marginLeft: 75, color: "#fefefe"}}>Life so far</h3>
        </div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: '#fefefe', color: '#0b0c10' }}
            contentArrowStyle={{ borderRight: '7px solid  #fefefe' }}
            date="2018 - present"
            iconStyle={{ background: '#0b0c10', color: '#fefefe' }}
            icon={<FaBookOpen />}
          >
            <h3 className="vertical-timeline-element-title"><img src={require('./assets/images/iiitd.png')} height="60" /></h3>
            <p>
              Bachelor of Technology<br></br> (Computer Science and Applied Mathematics)
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#fefefe', color: '#0b0c10' }}
            contentArrowStyle={{ borderRight: '7px solid  #fefefe' }}
            date="November 2019- January 2020"
            iconStyle={{ background: '#0b0c10', color: '#fefefe' }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title"><img src={require('./assets/images/wellowise.png')} height="45" /></h3>
            <h4 className="vertical-timeline-element-subtitle">Backend DevOps Intern</h4>
            <p>
              Database and API management, Team Collaboration
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#fefefe', color: '#0b0c10' }}
            contentArrowStyle={{ borderRight: '7px solid  #fefefe' }}
            date="April 2019- August 2019"
            iconStyle={{ background: '#0b0c10', color: '#fefefe' }}
            icon={<GiMaterialsScience />}
          >
            <h3 className="vertical-timeline-element-title"><img src={require('./assets/images/weave.png')} height="55" /></h3>
            <h4 className="vertical-timeline-element-subtitle">Undergraduate Researcher at Weave Lab, IIITD</h4>
            <p>
              <b>Advisor: Dr. Aman Parnami</b>
              <br></br>Research, Team Collaboration, Creative Direction
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: 'green', color: '#fff' }}
            icon={<FaStar />}
          />
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default App;
