import React from "react";
import Tab from "./Tab";

function Tabs(props) {
  return (
    <div className="tabs">
      {props.tabs.map((tab, index) => (
        <Tab
          tab={tab}
          key={index}
          selectedTab={props.selectedTab}
          onClick={props.onClick}
        />
      ))}
    </div>
  );
}

export default Tabs;
