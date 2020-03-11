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
        brand="Home"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "transparent"
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
                  A socially awkward developer.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
    </div>
  );
}

export default App;
