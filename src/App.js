import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import './App.css';
import classNames from "classnames";
import Parallax from "./components/Parallax.js";
import GridContainer from "./components/GridContainer.js";
import GridItem from "./components/GridItem.js";
import Header from "./components/Header"

import styles from "./assets/styles/components.js";
import HeaderLinks from './components/HeaderLinks';
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
      <Parallax>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>This website is still under construction.</h1>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
    </div>
  );
}

export default App;
