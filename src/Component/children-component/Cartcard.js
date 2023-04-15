import React from "react";

export default function Cartcard(props) {
  const { data = {}, onRemove = (item) => {} } = props;
  return (
    <div className="card mb-3">
      <div className="card-body">
        <img
          src={data.imgUrl}
          className="card-img-top"
          alt={data.label}
          style={{ width: 215, height: 180 }}
        />
        <div className="row">
          <div className="col-8">
            <div className="d-flex flex-column justify-content-center">
              <h3>{data.label || "Name Not Available"}</h3>
              <p class="">{`₹${data.price}` || "Price not available"}</p>
            </div>
          </div>
          <div className="col-4">
            <div
              className="d-flex h-100vh flex-column justify-content-center"
              style={{ height: "100%" }}
            >
              <button
                className={`btn
                    btn-danger
                  btn-sm`}
                onClick={() => onRemove(data)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
