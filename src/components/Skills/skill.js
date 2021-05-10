import React from "react";

export default function skillComponent({name = "", value = 0, color = 1}) {
  return (    
    <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
      <div className="progress-wrap">
        <h3>{name}</h3>
        <div className="progress">
          <div
            className={`progress-bar color-${color}`}
            role="progressbar"
            aria-valuenow={value}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: `${value}%` }}
          >
            <span>{`${value}%`}</span>
          </div>
        </div>
      </div>
    </div>    
  )
};
