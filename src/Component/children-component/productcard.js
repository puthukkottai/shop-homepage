import React from "react";
export default function Productcard(props) {
  const { data = {}, onChange = (item) => {}, disabled = false } = props;
  return (
    <div className="col-lg-4 col-sm-12">
      <div className="card mb-3">
        <img
          src={data.imgUrl}
          className="card-img-top"
          alt={data.label}
          style={{ width: 215, height: 180 }}
        />
        <div className="card-body">
          <h4>{data.label || "Name Not Available"}</h4>

          <h5>
            {data.origin || "Name Not Available"}&nbsp;
            <img
              src={data.isVeg}
              className="card-img-top"
              alt="Food Type"
              style={{ width: 25, height: 18 }}
            />
          </h5>
          <h5>Star&nbsp;{data.star || "Name Not Available"}</h5>
          <h5 class="">{`₹${data.price}` || "Price not available"}</h5>

          <div className="btn" style={{ height: "100%" }}>
            <button
              disabled={disabled}
              className={`btn ${
                disabled ? "btn-secondary" : "btn-primary"
              } btn-sm`}
              onClick={() => onChange(data)}
            >
              {disabled ? "Ordered" : "Order Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
