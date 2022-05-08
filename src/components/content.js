import React from "react";

export default function Content(props) {
  return (
    <div className="content">
      <img className="content-img" src={props.imageUrl} alt="" />
      <div className="content-one">
        <div className="content-two">
          <img
            className="location-logo"
            src={process.env.PUBLIC_URL + "/images/location.png"}
            alt=""
          />
          <p>{props.location}</p>
          <a className="location-url" href={props.googleMapsUrl}>
            View on Google Maps
          </a>
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
