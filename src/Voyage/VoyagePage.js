import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';

import Checkbox from "@material-ui/core/Checkbox";
import classNames from "classnames";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";




import { Bar } from "react-chartjs-2";

import VoyageDetails from "./VoyageDetails";
import "./voyage.css";

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData("Livorno", 12956, "12 October 2017", "Closed", "Pending"),
  createData("Bright Glory", 123568, "17 October 2017", "Closed", "Confirmed"),
  createData("Poseidon", 12956, "10 October 2017", "Closed", "Pending")
];

const initialState = {
  labels: ["Estimation Cost", "Actual Cost", "Profit/Loss on Cost"],
  datasets: [
    {
      label: "Voyage A",
      backgroundColor: "rgb(137, 160, 255)",
      hoverBackgroundColor: "rgb(137, 160, 255)",
      data: [8, 5, 3]
    },
    {
      label: "Voyage B",
      backgroundColor: "rgb(70, 223, 185)",
      hoverBackgroundColor: "rgb(70, 223, 185)",
      data: [12, 16, -6]
    },
    {
      label: "Voyage C",
      backgroundColor: "rgb(117, 100, 252)",
      hoverBackgroundColor: "rgb(117, 100, 252)",
      data: [3, 4, 0.5]
    }
  ]
};

class Voyage extends React.Component {
  componentWillMount() {
    this.setState(initialState);
  }
  handleSelectAllClick = event => {
    if (event.target.checked) {
      this.setState(state => ({ selected: state.data.map(n => n.id) }));
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick = (event, id) => {
    const { selected, isSelected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    this.setState({ selected: newSelected });
  };
  isSelected = id => this.state.selected.indexOf(id) !== -1;
  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1>
          {" "}
          Page Header <small>Optional description</small>
        </h1>

        <Paper className={classes.root}>
          <div>
            <div className={classes.header}>
              <h3 className={classes.title}>Voyage Analysis</h3>
            </div>

            <p className={classes.subtitle}>Filter by: </p>
            <div className={classes.buttongroup}>
              <Button variant="contained" color="primary" disableRipple>
                Voyage status
              </Button>
              <Button
                className={classes.leftButton}
                variant="outlined"
                color="primary"
                disableRipple
              >
                Payment status
              </Button>
              <IconButton className={classes.button} aria-label="Delete">
                <DeleteIcon />
              </IconButton>
              <IconButton className={classes.button} aria-label="Delete">
                <EditIcon />
              </IconButton>
            </div>
          </div>
          <div className={classes.buttonStyle}>
            <p>Search by: </p>
            <Button variant="outlined" color="primary" disableRipple>
              Voyage status
            </Button>
            <Button
              className={classes.leftButton}
              variant="outlined"
              color="primary"
              disableRipple
            >
              Payment status
            </Button>
          </div>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Vessel Name</TableCell>
                <TableCell numeric> TC Code</TableCell>
                <TableCell numeric>Voyage Commended </TableCell>
                <TableCell numeric>Voyage Status </TableCell>
                <TableCell numeric>Payment Status </TableCell>
                <TableCell numeric> </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => {
                return (
                  <TableRow key={row.id}>
                    <TableCell padding="checkbox">
                      <Checkbox />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell numeric>{row.calories}</TableCell>
                    <TableCell numeric>{row.fat}</TableCell>
                    <TableCell numeric>{row.carbs}</TableCell>
                    <TableCell numeric>
                      {" "}
                      <div className={classes.rowStyle}>{row.protein}</div>
                    </TableCell>
                    <TableCell numeric>
                      {" "}
                      <IconButton
                        className={classes.button}
                        aria-label="Delete"
                      >
                        <DeleteIcon />
                      </IconButton>
                      <IconButton
                        className={classes.button}
                        aria-label="Delete"
                      >
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
        <div className={classes.LivornoVoyageStyle}>
          {" "}
          <VoyageDetails />{" "}
        </div>
        <div className="box">
          <Bar data={this.state} />
        </div>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  leftButton: {
    marginLeft: "0.5%"
  },
  buttonStyle: {
    marginTop: "-7%",
    marginLeft: "45%",
    margin: "3%"
  },
  header: {
    color: "#444",
    display: "block",
    padding: "10px",
    position: "relative",
    width: "295px"
  },
  title: {
    color: "#3F64FF",
    borderBottom: "1px solid #3F64FF",
    marginLeft: "2%",
    fontWeight: 400
  },
  rowStyle: {
    color: "#ff7271"
  },
  subtitle: {
    marginLeft: "-88%"
  },
  buttongroup: {
    marginLeft: "-64%"
  }
});

Voyage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Voyage);
