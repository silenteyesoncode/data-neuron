import Component1 from "./Component1";

declare module "./Component1" {
  export function Component1(isFileDragging: boolean, fileW: number): JSX.Element;
}
