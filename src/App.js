import React, { useState, useEffect } from "react";
import "./App.css";
import { Column, Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";
import Header from "./components/header/Header";
import SidebarComponent from "./components/sidebar/SidebarComponent";
import ContentComponent from "./components/content/ContentComponent";
import "bootstrap/dist/css/bootstrap.min.css";
const styles = StyleSheet.create({
  container: {
    height: "100%",
    minHeight: "100vh",
  },
  content: {
    marginTop: 54,
  },
  mainBlock: {
    backgroundColor: "#F7F8FC",
    padding: 30,
  },
});

//For updating the UI based on the window resize
const useForceUpdate = () => useState()[1];

function App() {
  const [selectedItem, setSelectedItem] = useState("Dashboard");
  const resize = useForceUpdate();
  useEffect(() => {
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [resize]);

  return (
    <Row className={css(styles.container)}>
      <SidebarComponent
        selectedItem={selectedItem}
        onChange={(selectedItem) => setSelectedItem(selectedItem)}
      />
      <Column flexGrow={1} className={css(styles.mainBlock)}>
        <Header title={selectedItem} />
        <div className={css(styles.content)}>
          <ContentComponent />
        </div>
      </Column>
    </Row>
  );
}

export default App;
