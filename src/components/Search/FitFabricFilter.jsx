import React from "react";

const FitFabricFilter = (props) => {
  return (
    <>
      <div className="fit list">
        <h4>{props.heading}</h4>
        {props.dataList.map(function (data) {
          return (
            <div className="item" key={data.id}>
              <input type="checkbox" name="" id="" />
              <span>{data.text}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FitFabricFilter;
