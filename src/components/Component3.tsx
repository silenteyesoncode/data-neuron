import React from "react";
import { cn } from "../utils/cn";

// Function component for rendering Component - 3
export function Component3(isTerminalDragging: boolean, terminalH: number) {
  return (
    <div
      className={cn(
        "shrink-0 bg-darker contents",
        isTerminalDragging && "dragging"
      )}
      style={{ height: terminalH }}
    >
      Component - 3
    </div>
  );
}
