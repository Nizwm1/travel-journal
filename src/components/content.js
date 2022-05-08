import React from "react";

export default function Content(props) {
  return (
    <div className="content">
      <img className="content-img" src={props.imageUrl} alt="" />
      <div className="content-one">
        <div className="content-two">
          <img src="" alt="" />
          <p>{props.location}</p>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h4>{props.title}</h4>
        <p>
          <b>{props.startDate} - </b>
          <b>{props.endDate}</b>
        </p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
