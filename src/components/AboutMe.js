import React from "react";
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

const useStyles = makeStyles(styles);

export default function AboutMe(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <div className={classes.profile}>
              <div className={classes.name}>
                <h2 className={classes.title}><b>Dhruv Sahnan</b></h2>
                <h6>DEVELOPER, COMPUTER THEORIST</h6>
                  <Button
                    color="transparent"
                    href="https://www.instagram.com/dhruvsahnan/"
                    target="_blank"
                    className={classes.navLink}
                  >
                    <FaInstagram/>
                  </Button>
                  <Button
                    color="transparent"
                    href="https://github.com/dhruvs009"
                    target="_blank"
                    className={classes.navLink}
                  >
                    <FaGithub/>
                  </Button>
                  <Button
                    color="transparent"
                    href="https://www.linkedin.com/in/dhruv-sahnan-7a30b0167/"
                    target="_blank"
                    className={classes.navLink}
                  >
                    <FaLinkedinIn/>
                  </Button>
              </div>
            </div>
          </GridItem>
        </GridContainer>
        <div className={classes.description}>
          <p>
            A software developer with a wide algorithmic understanding and a craving to learn new technologies, likes to indulge himself in logical maths, cool open sourced dev projects and tinkering around with anything in sight and within reach.
          </p>
        </div>
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
  );
}