import { Component } from "react";
import { Outlet } from "react-router-dom";
import { WhatsappBtn, Footer } from "../components/exports";

class LayoutWithHeader extends Component {
  render() {
    return (
      <>
        <Outlet />
        <Footer />
        <WhatsappBtn/>
      </>
    );
  }
}

export default LayoutWithHeader;
