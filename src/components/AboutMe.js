import React, {Component} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Button from "./Button";
import GridContainer from "./GridContainer";
import GridItem from "./GridItem.js";
import styles from "../assets/styles/aboutMeStyle";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import axios from 'axios';
import { container, title } from "../assets/myweb";
import imagesStyle from "../assets/styles/imagesStyles.js";
import { Tooltip } from "@material-ui/core";

const aboutMeStyle = {
  container,
  profile: {
    textAlign: "center",
    "& img": {
      maxWidth: "160px",
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)"
    }
  },
  description: {
    margin: "0.371rem auto 0",
    maxWidth: "550px",
    color: "#444",
    textAlign: "center",
    alignContent: "center"
  },
  name: {
    marginTop: "5px",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
  },
  ...imagesStyle,
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "25px",
    minHeight: "32px",
    textDecoration: "none",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "800",
    lineHeight: "1.5em",
    marginBottom: "0px",
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  navWrapper: {
    margin: "20px auto 50px auto",
    textAlign: "center"
  }
};

export default class AboutMe extends Component{
  constructor(){
      super();
      this.state = {
          cf: {},
          github: {},
          codechef: {},
      };
  };
  componentDidMount(){
      axios.get('https://codeforces.com/api/user.info?handles=masterd009') 
      .then( (response) => {
        this.setState({
          cf:response.data.result[0]
        });
      })
      .catch( (error) => {
        console.log(error);
      });
      axios.get('https://api.github.com/users/dhruvs009') 
      .then( (response) => {
        this.setState({
          github:response.data
        });
      })
      .catch( (error) => {
        console.log(error);
      });
      axios.get('https://competitive-coding-api.herokuapp.com/api/codechef/dhruv1008') 
      .then( (response) => {
        this.setState({
          codechef:response.data
        });
      })
      .catch( (error) => {
        console.log(error);
      });  
  };
  render(){
    return (
      <div style={aboutMeStyle.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <div style={aboutMeStyle.profile}>
              <div style={aboutMeStyle.name}>
                <h2 style={aboutMeStyle.title}><b>Dhruv Sahnan</b></h2>
                <h6>DEVELOPER, COMPUTER THEORIST</h6>
                  <Button
                    color="transparent"
                    href="https://www.instagram.com/dhruvsahnan/"
                    target="_blank"
                    style={aboutMeStyle.navLink}
                  >
                    <FaInstagram/>
                  </Button>
                  <Button
                    color="transparent"
                    href="https://github.com/dhruvs009"
                    target="_blank"
                    style={aboutMeStyle.navLink}
                  >
                    <FaGithub/>
                  </Button>
                  <Button
                    color="transparent"
                    href="https://www.linkedin.com/in/dhruv-sahnan-7a30b0167/"
                    target="_blank"
                    style={aboutMeStyle.navLink}
                  >
                    <FaLinkedinIn/>
                  </Button>
              </div>
            </div>
          </GridItem>
        </GridContainer>
        <div style={aboutMeStyle.description}>
          <p>
            A software developer with a wide algorithmic understanding and a yearning to learn new technologies, likes to indulge himself in logical maths, cool open sourced dev projects and tinkering around with anything in sight and within reach.
          </p>
        </div>
        <GridContainer justify="center" >
          <GridItem xs={6} sm={6} md={3}>
            <div style={aboutMeStyle.name}>
            <Tooltip
              id="githubAboutMe-tooltip"
              title="dhruvs009 on GitHub"
              placement={window.innerWidth > 959 ? "right" : "left"}
            >
              <a href="https://github.com/dhruvs009"><img src={require('../assets/images/GitHub.png')} width="75" style={{marginTop: 15, marginBottom: 15}}/></a>
            </Tooltip>
            </div>
          </GridItem>
          <GridItem xs={4} sm={4} md={2}>
            <div>
            <h4>{String(this.state.github.public_repos)} Repositories</h4>
            </div>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={6} sm={6} md={3}>
            <div style={aboutMeStyle.name}>
            <Tooltip
              id="codeforces-tooltip"
              title="masterd009 on Codeforces"
              placement={window.innerWidth > 959 ? "right" : "left"}
            >
              <a href="https://codeforces.com/profile/masterd009"><img src={require('../assets/images/codeforces.png')} width="150" style={{marginTop: 14, marginBottom:14}}/></a>
            </Tooltip>
            </div>
          </GridItem>
          <GridItem xs={4} sm={4} md={2}>
            <div>
            <h4>{String(this.state.cf.rank) + " - " + String(this.state.cf.rating)}</h4>
            </div>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={6} sm={6} md={3}>
            <div style={aboutMeStyle.name}>
            <Tooltip
              id="codechef-tooltip"
              title="dhruv1008 on CodeChef"
              placement={window.innerWidth > 959 ? "right" : "left"}
            >
              <a href="https://www.codechef.com/users/dhruv1008"><img src={require('../assets/images/codechef.svg')} width="125" /></a>
            </Tooltip>
            </div>
          </GridItem>
          <GridItem xs={4} sm={4} md={2}>
            <div>
            <h4>{String(this.state.codechef.rating) + " - " + String(this.state.codechef.rank)}</h4>
            </div>
          </GridItem>
        </GridContainer>
            {/* <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Studio",
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Work",
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work5}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Favorite",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer> */}
      </div>
    )
  }
}
