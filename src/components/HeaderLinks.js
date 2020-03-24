/*eslint-disable*/
import React from "react";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "./CustomDropdown.js";
import Button from "./Button.js";

import styles from "../assets/styles/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Menu"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <a
              href="https://drive.google.com/open?id=14xDXNyTCJ2rAfU3VVyOmQpUB5OHUBYbL"
              target="_blank"
              className={classes.dropdownLink}
            >
              My CV
            </a>,
            <a
            href="https://www.instagram.com/oauth/authorize?client_id=3311032495590903&redirect_uri=https://stitchig.herokuapp.com/&scope=user_profile,user_media&response_type=code"
            target="_blank"
            className={classes.dropdownLink}
            >
              StitchIg!
            </a>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="dhruvsahnan on Instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/dhruvsahnan/"
            target="_blank"
            className={classes.navLink}
          >
            <FaInstagram/>
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="github-tooltip"
          title="dhruvs009 on Github"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://github.com/dhruvs009"
            target="_blank"
            className={classes.navLink}
          >
            <FaGithub/>
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="linkedin-tooltip"
          title="Dhruv on LinkedIn"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.linkedin.com/in/dhruv-sahnan-7a30b0167/"
            target="_blank"
            className={classes.navLink}
          >
            <FaLinkedinIn/>
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
