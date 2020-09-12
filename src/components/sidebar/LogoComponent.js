import React from "react";
import { Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";
import logo from "../img/atlan-blue-main.png";

const styles = StyleSheet.create({
  container: {
    marginLeft: 32,
    marginRight: 32,
  },
  logoContainer: {
    width: "100%",
    textAlign: "center",
  },
  title: {
    fontFamily: "Muli",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 19,
    lineHeight: "24px",
    letterSpacing: "0.4px",
    color: "#A4A6B3",
    opacity: 0.7,
    marginLeft: 12,
  },
});

function LogoComponent() {
  return (
    <Row
      className={css(styles.container)}
      horizontal="center"
      vertical="center"
    >
      <div className="logoContainer">
        <img
          src={logo}
          alt="logo-atlan"
          style={{ width: "80%", margin: "0px auto" }}
        />
      </div>
      <span className={css(styles.title)}>IPL Stats</span>
    </Row>
  );
}

export default LogoComponent;
