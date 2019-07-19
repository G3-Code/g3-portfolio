import React from "react";
import Tab from "./Tab";

function Tabs(props) {
  return (
    <div className="tabs">
      {props.tabs.map((tab, index) => (
        <Tab tab={tab} key={index} selectedTab={props.selectedTab} />
      ))}
    </div>
  );
}

export default Tabs;
