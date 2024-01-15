import React from "react";

export default function Card({properties}) {
  return (
    <div className="container-fluid d-flex justify-content-center">
      { properties.map((props,index)=>(
      <div className="card my-2 mx-2" style={{ width: "18rem" }} key={index}>
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.subtitle}</p>
          <a href="#" className="btn btn-primary">Press here</a>
        </div>
      </div>))}
    </div>
  );
};

