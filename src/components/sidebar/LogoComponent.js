import React from "react";
import { Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  container: {
    marginLeft: 32,
    marginRight: 32,
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
      <span>
        <img
          src="https://atlan.com/assets/img/atlan-blue.6ed81a56.svg"
          alt="logo-atlan"
          style={{ height: 50, width: 100 }}
        />
      </span>
      <span className={css(styles.title)}>IPL Stats</span>
    </Row>
  );
}

export default LogoComponent;
