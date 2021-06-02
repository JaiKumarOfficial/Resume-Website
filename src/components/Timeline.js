import React from "react";
import { timeline_data } from "../data/project_data";
import TimelineItem from "./TimelineItem";

function Timeline() {
  const timeline = timeline_data.map((data, idx) => {
    return <TimelineItem key={idx} data={data} />;
  });

  return (
    <>
      <div id="timeline" className="timeline">
        <h1 className="title">TIMELINE</h1>
        <div className="timeline-container">
          {timeline}
          <div className="timeline-line" />
        </div>
      </div>
    </>
  );
}

export default Timeline;
