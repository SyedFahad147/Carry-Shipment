import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles/side-bar.scss";
import { fetchUserProfile } from "../js/api";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  componentDidMount() {
    require("../js/side-bar");
    if (window.sessionStorage.authToken) {
      this.fetchData();
    } else this.setState({ loading: false });
  }

  async fetchData() {
    const { setUser } = this.props.all;

    try {
      const userData = await fetchUserProfile();
      if (userData.success) {
        setUser({
          ...userData.data,
          isLoggedIn: true,
        });
      }
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { isLoggedIn } = this.props.all?.user || {};

    return (
      <div className="profile-page">
        <Link className="toggle mobile-toggle" style={{ display: "none" }}>
          <i className="fas fa-bars" />
        </Link>
        <nav>
          <ul>
            <li>
              <Link className="toggle">
                <span className="icon">
                  <i className="fas fa-bars" />
                </span>
                <span className="title">Menu</span>
              </Link>
            </li>
            <li display-if={isLoggedIn}>
              <Link to="/profile">
                <span className="icon">
                  <i className="fas fa-user" />
                </span>
                <span className="title">Profile</span>
              </Link>
            </li>
            <li display-if={!isLoggedIn}>
              <Link to="/signup">
                <span className="icon">
                  <i className="fas fa-user" />
                </span>
                <span className="title">Sign Up</span>
              </Link>
            </li>
            <li display-if={!isLoggedIn}>
              <Link to="/signin">
                <span className="icon">
                  <i className="fas fa-user" />
                </span>
                <span className="title">Sign In</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div
          className="profile-right gradient-custom-2"
          display-if={!this.state.loading}
        >
          <Outlet />
        </div>
        <div className="profile-right" display-if={this.state.loading}>
          <div id="preloader" style={{ position: "relative" }}></div>
        </div>
      </div>
    );
  }
}

export default SideBar;
