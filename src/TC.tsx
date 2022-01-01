import {
  Button,
  FormControlLabel,
  Grid,
  Switch,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  makeStyles
} from "@material-ui/core";
import { ExProp, PrevExMap } from "./App";

const useStyles = makeStyles(() => ({
  activityHeaderLabel: {
    marginTop: "7px",
    marginLeft: "10px",
    width: "250px"
    // whiteSpace: 'nowrap',
  },
  searchTableOutter: {
    border: "2px",
    overflowX: "scroll"
  },
  searchTable: {
    tableLayout: "fixed",
    margin: "40px auto 0px auto"
  },
  cellStyle: {
    minWidth: "200px"
  }
}));

//const classes = useStyles()

export interface TCProps {
  prevDates: string[];
  currEx: ExProp[];
  pastExNames: ExProp[];
  pastExData: PrevExMap;
}

const TC = (props: TCProps) => {
  const { prevDates, currEx, pastExNames, pastExData } = props;
  const classes = useStyles();

  return (
    <TableContainer className={classes.searchTableOutter} component={Paper}>
      <Table stickyHeader aria-label="Treatments">
        <TableHead>
          <TableRow>
            <TableCell className={classes.cellStyle}>Activity</TableCell>
            <TableCell className={classes.cellStyle}>currDate</TableCell>
            {prevDates?.length
              ? prevDates.map((item, index) => (
                  <TableCell className={classes.cellStyle} key={index}>
                    {item}
                  </TableCell>
                ))
              : null}
          </TableRow>
        </TableHead>
        <TableBody>
          {bodyArray?.length
            ? bodyArray.map((outer, i) => (
                <TableRow>
                  {outer.map((inner, j) => (
                    <TableCell className={classes.cellStyle} key={i}>
                      {inner}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TC;
