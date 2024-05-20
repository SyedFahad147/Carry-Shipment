import React, { useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { logoutUser } from "../js/api";
import { User } from "../models";
import { SERVER_IMAGE_PATH } from "../js/constants";

export default function Profile(props) {
  const { user, setUser } = props.all;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    setLoading(true);
    const logoutData = await logoutUser();
    if (logoutData.success) {
      setUser(User);
      navigate("/signin");
    } else alert(logoutData.message);
    setLoading(false);
  };

  const editProfile = () => {
    // Edit Profile
  };

  useEffect(() => {
    if (!user?.isLoggedIn) navigate("/signin");
  }, [user, navigate]);

  return (
    <MDBContainer className="py-5 h-100">
      <div
        id="preloader"
        display-if={loading}
        style={{ position: "relative" }}
      ></div>
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol lg="9" xl="7">
          <MDBCard>
            <div
              className="rounded-top text-white d-flex flex-row"
              style={{ backgroundColor: "#000", height: "200px" }}
            >
              <div
                className="ms-4 mt-5 d-flex flex-column"
                style={{ width: "150px" }}
              >
                <MDBCardImage
                  src={
                    (user?.profile_img && SERVER_IMAGE_PATH + user?.profile_img) ||
                    "./assets/img/avatar.svg"
                  }
                  alt="Profile Image"
                  className="mt-4 mb-2 img-thumbnail"
                  fluid
                  style={{ width: "150px", minHeight: "175px", objectFit: "cover", objectPosition: "top", zIndex: "1" }}
                />
              </div>
              <div className="ms-3" style={{ marginTop: "130px" }}>
                <MDBTypography tag="h5">{user?.name || "Client"}</MDBTypography>
                <MDBCardText>
                  {user?.city || "City"}, {user?.country || "Country"}
                </MDBCardText>
              </div>
            </div>
            <MDBCardBody className="text-black p-4 mt-5">
              <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                <MDBCardText className="font-italic mb-1">
                  {user?.email}
                </MDBCardText>
                <MDBCardText className="font-italic mb-0">
                  {user?.contact_no && `Contact: ${user?.contact_no}`}
                </MDBCardText>
              </div>
              <div className="mb-4">
                <p className="lead fw-normal mb-1">About</p>
                <MDBCardText className="font-italic mb-1">
                  {user?.name || "Client"}
                </MDBCardText>
                <MDBCardText className="font-italic mb-1">
                  {user?.address && `Address: ${user?.address}`} <br display-if={user?.address} />
                  {user?.city || "City"}, {user?.country || "Country"}
                </MDBCardText>
              </div>
              <MDBBtn
                outline
                color="dark"
                className="px-4"
                style={{ height: "36px", overflow: "visible" }}
                onClick={editProfile}
                disabled={loading}
              >
                Edit Profile
              </MDBBtn>
              <MDBBtn
                outline
                color="dark"
                className="ms-4 px-4"
                style={{ height: "36px", overflow: "visible" }}
                onClick={handleLogout}
                disabled={loading}
              >
                Logout
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
