import React from "react";
import { Choose, When, Otherwise } from "babel-plugin-jsx-control-statements";
import "../styles/status-bar-component.scss";

export default function StatusBar(props) {
  let status = props.status.toLowerCase();
  let position = 66.67;
  if (status === "rejected" || status === "pending") position = 0;
  else if (status === "accepted") position = 33.33;
  else if (status === "delivered") position = 100;
  return (
    <div className="d-flex px-5 pt-5 pb-5 ">
      <div className="delivery-status-bar">
        <div className="line-success" style={{ width: `${position}%` }}></div>
        <div className="line-gray"></div>
        <Choose>
          <When condition={status === "rejected"}>
            <div className="cell cell-1 cross">
              <span className="text-danger">Rejected</span>
            </div>
          </When>
          <Otherwise>
            <div className={position > 0 ? "cell cell-1 done" : "cell cell-1"}>
              <span>Pending</span>
            </div>
          </Otherwise>
        </Choose>
        <div className={position >= 33.33 ? "cell cell-2 done" : "cell cell-2"}>
          <span>Accepted</span>
        </div>
        <div className={position > 66.67 ? "cell cell-3 done" : "cell cell-3"}>
          <span>On The Way</span>
        </div>
        <div className={position === 100 ? "cell cell-4 done" : "cell cell-4"}>
          <span className="text-success">Delivered</span>
        </div>
      </div>
    </div>
  );
}
