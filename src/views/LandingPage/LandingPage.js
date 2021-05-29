import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Solana Artificial Intelligence Network"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/poster.svg").default}>
        <div className={classes.container}>
          <Grid container>
            <Grid item xs={12} sm={12} md={6}>
              <div style={{ width: "100%", padding: "32px" }}>
                <img
                  src={require("assets/img/circle_icon.svg").default}
                  style={{ width: "100%" }}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <h1 className={classes.title}>
                SINE: Redefining Work, Fostering Opportunities
              </h1>
              <h4>
                SINE is the token to get your work done using Artificial
                Intelligence and crowd-sourcing. We are creating a platform
                which will connect your work to a distributed workforce.
              </h4>
              <br />
            </Grid>
          </Grid>
        </div>
      </Parallax>
      <div
        className={classNames(classes.main, classes.mainRaised)}
        style={{ marginTop: "50px" }}
      >
        <div className={classes.container}>
          <ProductSection />
        </div>
      </div>
    </div>
  );
}
