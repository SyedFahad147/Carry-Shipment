import { Component } from "react";
import { Outlet } from "react-router-dom";

class LayoutWithOutHeader extends Component {
  componentDidMount() {
    let header = document.getElementById("header");
    if (header) header.remove();
  }

  render() {
    return (
      <>
        <Outlet />
      </>
    );
  }
}

export default LayoutWithOutHeader;
