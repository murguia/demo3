import "./styles.css";
import * as React from "react";
import TC from "./TC";

export type ExProp = { name: string; val: number };
export type PrevExMap = { [name: string]: ExProp[] };

const prevDates: string[] = ["12/21/2020", "12/20/2020", "12/19/2020"];
const realEx: ExProp[] = [
  { name: "ex0", val: 0 },
  { name: "ex1", val: 1 },
  { name: "ex2", val: 2 }
];

const headerData: string[] = ["col 1", "col 2", "col 3"];
const bodyData: string[][] = [
  ["blue 1", "blue 2", "blue 3"],
  ["black 1", "black 2", "black 3"]
];

export default function App() {
  //const classes = useStyles()

  return (
    <div className="App">
      <TC headerArray={headerData} bodyArray={bodyData} />
    </div>
  );
}
