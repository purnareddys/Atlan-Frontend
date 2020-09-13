import React, { useState, useContext } from "react";
import { Column, Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite/no-important";
import MiniCardComponent from "./MiniCardComponent";
import ChartDisplay from "./ChartDisplay";
import { ChartDataContext } from "../../context/ChartData";

import Chart1 from "../charts/Chart1";
import Chart2 from "../charts/Chart2";
import Chart3 from "../charts/Chart3";
import Chart4 from "../charts/Chart4";
import Chart5 from "../charts/Chart5";
import Chart6 from "../charts/Chart6";

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
  },
});

function ContentComponent() {
  const { totalMatches, superOvers, winByRunsWickets } = useContext(
    ChartDataContext
  );
  const [topFiveVenues, setTopFiveVenues] = useState(2017);
  const [mostMatchsWinner, setMostMatchsWinner] = useState(2017);

  const MyOptimizedComponent = React.memo(function MyComponent(props) {
    /* render using props */
    return (
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
              value={props.totalMatches}
            />
            <MiniCardComponent
              className={css(styles.miniCardContainer)}
              title="Superovers"
              value={props.superOvers}
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
              value={props.winByRunsWickets[0]}
            />
            <MiniCardComponent
              className={css(styles.miniCardContainer)}
              title="Win by Wickets"
              value={props.winByRunsWickets[1]}
            />
          </Row>
        </Row>
      </Column>
    );
  });
  return (
    <>
      <MyOptimizedComponent
        totalMatches={totalMatches}
        superOvers={superOvers}
        winByRunsWickets={winByRunsWickets}
      />
      <Column>
        <div className={css(styles.gridcontainer)}>
          <ChartDisplay>
            <Chart1 />
          </ChartDisplay>
          <ChartDisplay>
            <Chart2 />
          </ChartDisplay>
          <ChartDisplay>
            <select
              defaultValue="2017"
              style={{ width: 120, borderRadius: ".25em", padding: "0.5em" }}
              onChange={(e) => setTopFiveVenues(e.target.value)}
            >
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
            </select>

            <Chart3 year={topFiveVenues} />
          </ChartDisplay>
          <ChartDisplay>
            <Chart4 />
          </ChartDisplay>
          <ChartDisplay>
            <select
              defaultValue="2017"
              style={{ width: 120, borderRadius: ".25em", padding: "0.5em" }}
              onChange={(e) => setMostMatchsWinner(e.target.value)}
            >
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
            </select>

            <Chart5 year={mostMatchsWinner} />
          </ChartDisplay>
          <ChartDisplay>
            <Chart6 />
          </ChartDisplay>
        </div>
      </Column>
    </>
  );
}

export default ContentComponent;
