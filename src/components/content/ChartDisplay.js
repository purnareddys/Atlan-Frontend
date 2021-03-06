import React from "react";
import { Column, Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #DFE0EB",
    borderRadius: 4,
    cursor: "pointer",
  },
  graphContainer: {
    marginTop: 24,
    marginLeft: 0,
    marginRight: 0,
    width: "95%",
  },
  graphSection: {
    padding: 24,
  },
  graphSubtitle: {
    fontFamily: "Muli",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 12,
    lineHeight: "16px",
    letterSpacing: "0.1px",
    color: "#9FA2B4",
    marginTop: 4,
    marginRight: 8,
  },
  graphTitle: {
    fontFamily: "Muli",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 19,
    lineHeight: "24px",
    letterSpacing: "0.4px",
    color: "#252733",
  },
  legendTitle: {
    fontFamily: "Muli",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 12,
    lineHeight: "15px",
    letterSpacing: "0.1px",
    color: "#9FA2B4",
    marginLeft: 8,
  },
  separator: {
    backgroundColor: "#DFE0EB",
    width: 1,
    minWidth: 1,
  },
  statContainer: {
    borderBottom: "1px solid #DFE0EB",
    padding: "24px 32px 24px 32px",
    height: "calc(114px - 48px)",
    ":last-child": {
      border: "none",
    },
  },
  stats: {
    borderTop: "1px solid #DFE0EB",
    width: "100%",
  },
  statTitle: {
    fontFamily: "Muli",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 16,
    lineHeight: "22px",
    letterSpacing: "0.3px",
    textAlign: "center",
    color: "#9FA2B4",
    whiteSpace: "nowrap",
    marginBottom: 6,
  },
  statValue: {
    fontFamily: "Muli",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: "30px",
    letterSpacing: "0.3px",
    textAlign: "center",
    color: "#252733",
  },
});

export default function ChartDisplay(props) {
  return (
    <Row
      flexGrow={1}
      className={css(styles.container)}
      horizontal="center"
      breakpoints={{ 1024: "column" }}
    >
      <Column
        wrap
        flexGrow={1}
        flexBasis="100px"
        className={css(styles.graphSection)}
        breakpoints={{
          1024: { width: "calc(100% - 48px)", flexBasis: "auto" },
        }}
      >
        <div className={css(styles.graphContainer)}>{props.children}</div>
      </Column>
      <Column
        className={css(styles.separator)}
        breakpoints={{ 1024: { display: "none" } }}
      >
        <div />
      </Column>
    </Row>
  );
}
