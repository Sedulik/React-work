import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import TextField from "@material-ui/core/TextField";

let id = 0;
function createData(name, calories, fat,  input) {
  id += 1;
  return { id, name, calories, fat,  input };
}

const rows = [
  createData("Expenses Mac", "1.483 $", "$", "1,009."),
  createData("Freight Revenue", "1.483 $", "$", "1,486.69"),
  createData("Total Cost", "328.343$", "$", "328.343$"),
  createData("Profit/Loss", "1.483 $", "$", "1,009.00"),
  createData("Next Voyage Day", "3 Days", "Days", 5)
];

function VoyageDetails(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <h3 className={classes.subtitle}>Livorno Voyage Details</h3>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell> </TableCell>
                  <TableCell numeric>Estimated</TableCell>
                  <TableCell>Final </TableCell>
                  <TableCell numeric> </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => {
                  return (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell numeric>{row.calories}</TableCell>
                      <TableCell numeric>
                        <TextField
                          defaultValue={row.input}
                          id="bootstrap-input"
                          InputProps={{
                            disableUnderline: true,
                            classes: {
                              root: classes.bootstrapRoot,
                              input: classes.bootstrapInput
                            }
                          }}
                          InputLabelProps={{
                            shrink: true,
                            className: classes.bootstrapFormLabel
                          }}
                        />{" "}
                      </TableCell>
                      <TableCell numeric>{row.fat}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          <h3 className={classes.subtitle}> Bright Glory Voyage Details</h3>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell> </TableCell>
                  <TableCell numeric>Estimated</TableCell>
                  <TableCell>Final </TableCell>
                  <TableCell numeric> </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => {
                  return (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell numeric>{row.calories}</TableCell>
                      <TableCell numeric>
                        <TextField
                          defaultValue={row.input}
                          id="bootstrap-input"
                          InputProps={{
                            disableUnderline: true,
                            classes: {
                              root: classes.bootstrapRoot,
                              input: classes.bootstrapInput
                            }
                          }}
                          InputLabelProps={{
                            shrink: true,
                            className: classes.bootstrapFormLabel
                          }}
                        />{" "}
                      </TableCell>
                      <TableCell numeric>{row.fat}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

VoyageDetails.propTypes = {
  classes: PropTypes.object.isRequired
};
const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: "1%"
  },
  paper: {
    color: "#4770ff",
    padding: "10px 100px 10px 0",
    fontWeight: 500
  },
  bootstrapRoot: {
    padding: 0,
    "label + &": {
      marginTop: theme.spacing.unit * 3
    }
  },
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 12px",
    width: "calc(100% - 24px)"
  },
  subtitle:{
    color:" #4770ff",
    borderBottom: "1px solid #496fff",
    marginLeft:"2%",
    fontWeight: 600,

  }
});

export default withStyles(styles)(VoyageDetails);
