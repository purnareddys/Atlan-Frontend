import React, { useState } from "react";
import { Column, Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite/no-important";
import MiniCardComponent from "./MiniCardComponent";
import ChartDisplay from "./ChartDisplay";

import { Form } from "react-bootstrap";
import Chart1 from "../charts/Chart1";
import Chart2 from "../charts/Chart2";
import Chart3 from "../charts/Chart3";
import Chart4 from "../charts/Chart4";
import Chart5 from "../charts/Chart5";

const styles = StyleSheet.create({
  cardsContainer: {
    marginRight: -30,
    marginTop: -30,
  },
  cardRow: {
    marginTop: 30,
    "@media (max-width: 768px)": {
      marginTop: 0,
    },
  },
  miniCardContainer: {
    flexGrow: 1,
    marginRight: 30,
    "@media (max-width: 768px)": {
      marginTop: 30,
      maxWidth: "none",
    },
  },
  griditem: {
    background: "#b823c1",
    color: "white",
    padding: "1em 2em",
    border: "2px solid purple",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  gridcontainer: {
    marginTop: 30,
    // display: "grid",
    // gridTemplateColumns: "repeat(auto-fill, minmax(450px, 1fr))",
  },
});

function ContentComponent() {
  const [topFiveVenues, setTopFiveVenues] = useState(2017);
  const [mostMatchsWinner, setMostMatchsWinner] = useState(2017);
  return (
    <>
      <Column>
        <Row
          className={css(styles.cardsContainer)}
          wrap
          flexGrow={1}
          horizontal="space-between"
          breakpoints={{ 768: "column" }}
        >
          <Row
            className={css(styles.cardRow)}
            wrap
            flexGrow={1}
            horizontal="space-between"
            breakpoints={{ 384: "column" }}
          >
            <MiniCardComponent
              className={css(styles.miniCardContainer)}
              title="Total Matchs"
              value="637"
            />
            <MiniCardComponent
              className={css(styles.miniCardContainer)}
              title="Superovers"
              value="7"
            />
          </Row>
          <Row
            className={css(styles.cardRow)}
            wrap
            flexGrow={1}
            horizontal="space-between"
            breakpoints={{ 384: "column" }}
          >
            <MiniCardComponent
              className={css(styles.miniCardContainer)}
              title="Win by Runs"
              value="288"
            />
            <MiniCardComponent
              className={css(styles.miniCardContainer)}
              title="Win by Wickets"
              value="339"
            />
          </Row>
        </Row>
      </Column>
      <Column>
        <div className={css(styles.gridcontainer)}>
          {/* <Chart1 /> */}
          <ChartDisplay>
            <Chart1 />
          </ChartDisplay>
          <ChartDisplay>
            <Chart2 />
          </ChartDisplay>
          <ChartDisplay>
            <Form.Control
              as="select"
              defaultValue="2017"
              style={{ width: 120 }}
              onChange={(e) => setTopFiveVenues(e.target.value)}
            >
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
            </Form.Control>

            <Chart3 year={topFiveVenues} />
          </ChartDisplay>
          <ChartDisplay>
            <Chart4 />
          </ChartDisplay>
          <ChartDisplay>
            <Form.Control
              as="select"
              defaultValue="2017"
              style={{ width: 120 }}
              onChange={(e) => setMostMatchsWinner(e.target.value)}
            >
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
            </Form.Control>
            <Chart5 year={mostMatchsWinner} />
          </ChartDisplay>
        </div>
      </Column>
    </>
  );
}

export default ContentComponent;
