import React from "react";
import SampleSplitter from "./SampleSplitter";
import { useResizable } from "react-resizable-layout";
import { Component1 }  from "./Component1";
import { Component3 } from "./Component3";
import { Component2 } from "./Component2";

const Mydrag = (): JSX.Element => {
  // State and props for resizing Component - 1 (axis: x)
  const {
    isDragging: isFileDragging,
    position: fileW,
    splitterProps: fileDragBarProps
  } = useResizable({
    axis: "x",
    initial: 500, // Initial width of Component - 1
    min: 50 // Minimum width of Component - 1
  });

  // State and props for resizing Component - 3 (axis: y)
  const {
    isDragging: isTerminalDragging,
    position: terminalH,
    splitterProps: terminalDragBarProps
  } = useResizable({
    axis: "y",
    initial: 250, // Initial height of Component - 3
    min: 50, // Minimum height of Component - 3
    reverse: true // Reverse resizing direction
  });

  // State and props for resizing Component - 2 (axis: x)
  const {
    isDragging: isPluginDragging,
    position: pluginW,
    splitterProps: pluginDragBarProps
  } = useResizable({
    axis: "x",
    initial: 200, // Initial width of Component - 2
    min: 50, // Minimum width of Component - 2
    reverse: true // Reverse resizing direction
  });

  return (
    <div
      className={
        "flex flex-column h-screen bg-dark font-mono color-white overflow-hidden"
      }
    >
      {/* Top section containing Component - 1, Component - 2, and their splitters */}
      <div className={"flex grow"}>
        {/* Component - 1 */}
        {Component1(isFileDragging, fileW)}
        {/* Splitter for Component - 1 */}
        <SampleSplitter isDragging={isFileDragging} {...fileDragBarProps} />
        {/* Component - 2 */}
        {Component2()}
      </div>
      {/* Splitter for resizing vertically between Component - 2 and Component - 3 */}
      <SampleSplitter
        dir={"horizontal"}
        isDragging={isTerminalDragging}
        {...terminalDragBarProps}
      />
      {/* Component - 3 */}
      {Component3(isTerminalDragging, terminalH)}
    </div>
  );
};

export default Mydrag;



