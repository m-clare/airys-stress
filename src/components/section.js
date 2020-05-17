import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegualr,
  },
}));

export default function SimpleExpansionPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <BlockMath
            math={
              "\\begin{aligned}" +
              "\\frac{\\partial \\sigma_x}{\\partial x} +" +
              "\\frac{\\partial \\tau_{yx}}{\\partial y} &=" +
              "q_x \\\\" +
              "\\frac{\\partial \\tau_{xy}}{\\partial x} +" +
              "\\frac{\\partial \\sigma_{y}}{\\partial y} &=" +
              "q_y" +
              "\\end{aligned}"
            }
          />
        </ExpansionPanelSummary>
        <ExpansionPanelDetails></ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
