import { useNavigate, useLocation } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { loginUser } from "../js/api";

export default function SignIn(props) {
  const { user, setUser, cameFrom } = props.all;
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setPasswordVisibility] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const loginData = await loginUser(user.email, user.password, remember);

      if (loginData.success) {
        setUser({
          ...loginData.data,
          isLoggedIn: true,
        });
        navigate(cameFrom);
      } else {
        alert(loginData.message);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user?.isLoggedIn) navigate(cameFrom);
  }, [user, location, navigate, cameFrom]);
  return (
    <MDBContainer
      fluid
      className="d-flex align-items-center justify-content-center bg-image py-4"
    >
      <div
        id="preloader"
        display-if={loading}
        style={{ position: "relative" }}
      ></div>
      <MDBCard className="m-5 pt-5 pb-4" style={{ maxWidth: "600px" }}>
        <MDBCardBody className="px-5">
          <h2 className="text-uppercase text-center mb-5">Sign In</h2>
          <MDBInput
            wrapperClass="mb-4"
            size="lg"
            id="email"
            type="email"
            label="Email: "
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            disabled={loading}
            onKeyDown={(e) => {
              e.key === "Enter" && handleLogin(e);
            }}
          />
          <div className="input-group mb-4">
            <MDBInput
              size="lg"
              id="email"
              type={showPassword ? "text" : "password"}
              label="Password: "
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              disabled={loading}
              onKeyDown={(e) => {
                e.key === "Enter" && handleLogin(e);
              }}
            />
            <button
              disabled={loading}
              onClick={() => setPasswordVisibility(!showPassword)}
              className="input-group-text px-3"
              style={{ height: "45px" }}
            >
              <MDBIcon display-if={showPassword} icon="eye-slash" />
              <MDBIcon display-if={!showPassword} icon="eye" />
            </button>
          </div>
          <div className="d-flex flex-row mb-4">
            <MDBCheckbox
              name="flexCheck"
              id="flexCheckDefault"
              label="Remember Me"
              checked={remember}
              onChange={() => setRemember(!remember)}
            />
          </div>
          <MDBBtn
            outline
            color="dark"
            className="d-flex justify-content-center w-100"
            style={{ overflow: "visible" }}
            size="lg"
            onClick={handleLogin}
            disabled={loading}
          >
            {(!loading && "Sign In") || "Loading..."}
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
