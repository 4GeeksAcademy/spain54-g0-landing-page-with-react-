import React from "react";

export const Card = () => {
  return (
    <div className="d-flex">
      <div className="card" style="width: 18rem;">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title 1</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Ir al sitio 1
          </a>
        </div>
      </div>
      <div className="card" style="width: 18rem;">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title 2</h5>
          <p className="card-text">
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
          <a href="#" className="btn btn-primary">
            Ir al sitio 2
          </a>
        </div>
      </div>
      <div className="card" style="width: 18rem;">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title 3</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Ir al Sitio 3
          </a>
        </div>
      </div>
      <div className="card" style="width: 18rem;">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title 4</h5>
          <p className="card-text">
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
          <a href="#" className="btn btn-primary">
            Ir al Sitio 4
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
