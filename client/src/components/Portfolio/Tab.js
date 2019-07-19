import React from "react";

function Tab(props) {
  let classNameValue = "tab";
  console.log(
    "----------------SELECTED TAB IS " + props.selectedTab,
    props.tab
  );
  if (props.tab === props.selectedTab) {
    classNameValue = "tab active-tab";
  }
  return (
    <div
      className={classNameValue}
      onClick={() => {
        props.onClick(props.tab);
      }}
    >
      {props.tab}
    </div>
  );
}

export default Tab;
