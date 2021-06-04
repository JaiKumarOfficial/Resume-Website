import React from "react";
import { CircularProgress } from "@material-ui/core";

export default function LoadingSite() {
  return (
    <div className="loading-site">
      <CircularProgress color="secondary" />
    </div>
  );
}
