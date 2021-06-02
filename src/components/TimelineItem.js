import React from "react";

export default function TimelineItem({ data }) {
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <span
          className="tag"
          style={{
            backgroundColor: data.category.color,
            color: data.category.color === "#62cd62" ? "white" : "black",
          }}
        >
          {data.category.tag}
        </span>
        <time className="timeline-date">{data.date}</time>
        <h5 className="timeline-content-title">{data.title}</h5>
        {data.body && <p>{data.body}</p>}
        <span className="circle"></span>
      </div>
    </div>
  );
}
