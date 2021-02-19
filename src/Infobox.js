import React from "react";
import "./Infobox.css";
import { Card, CardContent, Typography } from "@material-ui/core";

export const Infobox = ({ active, isRed, title, cases, total, ...props }) => {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      }`}
    >
      <CardContent>
        {/* Title */}
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>

        {/* Number of casses */}
        <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
          {" "}
          {cases}{" "}
        </h2>

        {/* Total */}
        <Typography className="infoBox__total" color="textSecondary">
          {total} Total{" "}
        </Typography>
      </CardContent>
    </Card>
  );
};
