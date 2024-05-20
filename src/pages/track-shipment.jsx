import React, { useEffect, useRef, useState } from "react";
import "../styles/track-shipment.scss";
import StatusBar from "../components/status-bar";
import { fetchShipmentDetails } from "../js/api";
import {useParams, Link, useNavigate} from "react-router-dom";

const TrackShipment = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [shipmentData, setShipmentData] = useState(null);
  const { clientID } = useParams();
  const inputID = useRef();
  const navigate = useNavigate();
  const handleTracking = async (e) => {
    e && e.preventDefault();
    let clientID = inputID.current?.value;
    if (clientID?.trim()) {
      navigate("/track-shipment/" + clientID);
    }
  };
  const formatDateAndTime = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    const formattedDate = dateTime.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const formattedTime = dateTime.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
    });
    return { date: formattedDate, time: formattedTime };
  };
  useEffect(() => {
    console.log(clientID);
    if (clientID) {
      setLoading(true);
      fetchShipmentDetails(clientID).then(orders => {
        try {

          if (orders.success) {
            setShipmentData(orders.data);
          } else {
            throw Error(orders.message);
          }
          setError(null);
        } catch (error) {
          setShipmentData(null);
          setError("Shipment not found!");
        } finally {
          setLoading(false);
        }
      });
    } else setError(null);
  }, [clientID]);
  return (
    <main id="main" className="track-shipment">
      {/* ======= Breadcrumbs ======= */}
      <div
        className="breadcrumbs d-flex align-items-center"
        style={{ backgroundImage: 'url("assets/img/breadcrumbs-bg.jpg")' }}
      >
        <div
          className="container position-relative d-flex flex-column align-items-center"
          data-aos="fade"
        >
          <h2>Track Shipment</h2>
          <ol>
            <li>
              <a href="/">Home</a>
            </li>
            <li>Track Shipment</li>
          </ol>
        </div>
      </div>
      {/* End Breadcrumbs */}
      {/* ======= Tracking ======= */}
      <div className="container custom-container">
        <div
          className="card p-4 border border-2"
          style={{ marginTop: "-35px" }}
        >
          <div className="row justify-content-center align-items-center">
            <label className="col-12 col-lg-3 mb-3 mb-lg-0">
              Shipment/User Id:
            </label>
            <div className="col-12 col-md-8 col-lg-6 mb-4 mb-md-0">
              <input
                type="text"
                className="form-control"
                ref={inputID}
                disabled={loading}
                onKeyDown={(e) => {
                  e.key === "Enter" && handleTracking(e);
                }}
              />
            </div>
            <div className="col-7 col-md-4 col-lg-3">
              <button
                className="btn btn-primary col-12"
                onClick={handleTracking}
                disabled={loading}
              >
                {(!loading && "Track") || "Loading..."}
              </button>
            </div>
          </div>
        </div>
        <div
          id="preloader"
          display-if={loading}
          style={{ position: "relative" }}
        ></div>

        <div className="alert alert-danger mt-5" display-if={error} role="alert">
          {error}
        </div>

        {!loading &&
          shipmentData &&
          shipmentData.map((shipment, index) => {
            let statusUpdatedAt = formatDateAndTime(shipment.updated_at);
            let statusColor;
            if (shipment.status === "Rejected") {
              statusColor = "text-danger";
            } else if (shipment.status === "Delivered") {
              statusColor = "text-success";
            } else {
              statusColor = "text-primary";
            }
            return (
              <div key={index}>
                <div className="mt-5">
                  <div className=" p-4 border border-2 mt-5 mb-4">
                    <div className="row justify-content-center align-items-center">
                      <div className="col-lg-12 col-md-6 col-12">
                        <div className="container">
                          <div className="row justify-content-center align-items-center">
                            <div className="col-3">
                              <img
                                src="https://img.freepik.com/free-vector/isometric-laptop-with-shopping-cart-keypad_1262-16544.jpg?size=626&ext=jpg&ga=GA1.1.153145685.1709292001&semt=ais"
                                alt="nothing"
                                className="col-12 bg-white rounded-circle"
                              />
                            </div>
                            <div className="col-9 d-flex flex-column justify-content-center">
                              <p className="text-primary font-monospace track-shipment">
                                Delivery status of {shipment.id}{" "}
                                <Link to="/">
                                  <i
                                    title="Edit"
                                    display-if={shipment.status === "Rejected"}
                                    className="bi bi-pencil-square ps-2 text-primary fs-6"
                                  ></i>
                                </Link>
                                <Link to="/">
                                  <i
                                    title="Delete"
                                    display-if={shipment.status === "Rejected"}
                                    className="bi bi-trash-fill ps-2 text-danger fs-6"
                                  ></i>
                                </Link>
                              </p>
                              <h4 className={statusColor + " track-shipment"}>
                                {shipment.status}
                              </h4>
                              <small className="mt-2 track-shipment">
                                {statusUpdatedAt.time}{" "}
                                <i className="bi bi-dot"></i>{" "}
                                <span className="text-info">
                                  {" "}
                                  {statusUpdatedAt.date}
                                </span>
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <StatusBar status={shipment.status} />
                <div className="mt-5">
                  <div className="p-4 border border-2 mt-5 track-shipment">
                    <h4 className="text-primary py-5">Shipping Information:</h4>
                    <div className="col-12">
                      <div className="container">
                        <div className="row">
                          <div className="col-12 row m-0 p-0">
                            <h5 className="col-3">Shipping ID:</h5>
                            <p className="col-9 text-primary">{shipment.id}</p>
                          </div>
                          <div
                            className="col-12 row m-0 p-0 text-danger"
                            display-if={
                              shipment.rejection_reason &&
                              shipment.status === "Rejected"
                            }
                          >
                            <h5 className="col-3">Rejection Reason:</h5>
                            <p className="col-9">{shipment.rejection_reason}</p>
                          </div>
                          <div
                            className="col-12 row m-0 p-0"
                            display-if={shipment.price}
                          >
                            <h5 className="col-3">Price:</h5>
                            <p className="col-9">{shipment.price} USD</p>
                          </div>
                          <div className="col-12 row m-0 p-0 mb-3">
                            <h5 className="col-12">Received From:</h5>
                            <p className="col-12 row m-0 p-0 ps-5">
                              <b className="col-3">User Name:</b>
                              <span className="col-9">
                                {shipment.client.name}
                              </span>
                              <b
                                className="col-3"
                                display-if={shipment.received_address}
                              >
                                Street Address:
                              </b>
                              <span
                                className="col-9"
                                display-if={shipment.received_address}
                              >
                                {shipment.received_address}
                              </span>
                              <b
                                className="col-3"
                                display-if={shipment.received_city}
                              >
                                City:
                              </b>
                              <span
                                className="col-9"
                                display-if={shipment.received_city}
                              >
                                {shipment.received_city}
                              </span>
                              <b
                                className="col-3"
                                display-if={shipment.received_country}
                              >
                                Country:
                              </b>
                              <span
                                className="col-9"
                                display-if={shipment.received_country}
                              >
                                {shipment.received_country}
                              </span>
                              <b
                                className="col-3"
                                display-if={shipment.received_date}
                              >
                                Date:
                              </b>
                              <span
                                className="col-9"
                                display-if={shipment.received_date}
                              >
                                {shipment.received_date}
                              </span>
                            </p>
                          </div>
                          <div className="col-12 row m-0 p-0 mb-3">
                            <h5 className="col-12">Delivered To:</h5>
                            <p className="col-12 row m-0 p-0 ps-5">
                              <b
                                className="col-3"
                                display-if={shipment.receiver_name}
                              >
                                Receiver Name:
                              </b>
                              <span
                                className="col-9"
                                display-if={shipment.receiver_name}
                              >
                                {shipment.receiver_name}
                              </span>
                              <b
                                className="col-3"
                                display-if={shipment.delivered_address}
                              >
                                Street Address:
                              </b>
                              <span
                                className="col-9"
                                display-if={shipment.delivered_address}
                              >
                                {shipment.delivered_address}
                              </span>
                              <b
                                className="col-3"
                                display-if={shipment.delivered_city}
                              >
                                City:
                              </b>
                              <span
                                className="col-9"
                                display-if={shipment.delivered_city}
                              >
                                {shipment.delivered_city}
                              </span>
                              <b
                                className="col-3"
                                display-if={shipment.delivered_country}
                              >
                                Country:
                              </b>
                              <span
                                className="col-9"
                                display-if={shipment.delivered_country}
                              >
                                {shipment.delivered_country}
                              </span>
                              <b
                                className="col-3"
                                display-if={shipment.delivered_date}
                              >
                                Date:
                              </b>
                              <span
                                className="col-9"
                                display-if={shipment.delivered_date}
                              >
                                {shipment.delivered_date}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-top border-bottom  border-start border-end border-2">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-lg-12 col-md-6 col-12">
                      <div className="container">
                        <div className="row align-items-center pt-3 pb-3">
                          <div className="col-md-3 col-6">
                            <small className="fw-semibold ps-4">
                              number of percent <i className="bi bi-dot"></i>
                              <span className="fw-light">1</span>{" "}
                            </small>
                          </div>
                          <div className="col-md-3 col-6">
                            <small className="fw-semibold">
                              weight of goods <i className="bi bi-dot"></i>
                              <span className="fw-light">3kg</span>
                            </small>
                          </div>
                          <div className="col-md-3 col-6 ps-5 ps-md-0">
                            <small className="fw-semibold">
                              volumn <i className="bi bi-dot"></i>{" "}
                              <span className="fw-light">
                                0.0008 <sup>2</sup>
                              </span>
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

        <div className="my-5 p-4 border border-2">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12 col-md-6 col-12">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="row align-items-center">
                      <div className="col-3 text-center">
                        <div
                          className="rounded-circle bg-success"
                          style={{
                            width: "60px",
                            height: "60px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <i className="bi bi-check fs-1 text-white"></i>
                        </div>
                      </div>
                      <div className="col-9">
                        <h6 className="text-primary">Fixed prices</h6>
                        <p className="w-100">
                          Our prices are always what you pay, simple and secure
                          with shipLink
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="row align-items-center">
                      <div className="col-3 text-center">
                        <div
                          className="rounded-circle bg-success-emphasis p-3"
                          style={{
                            backgroundColor: "grey",
                            width: "60px",
                            height: "60px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <i className="bi bi-telephone-plus-fill fs-4 text-white"></i>
                        </div>
                      </div>
                      <div className="col-9">
                        <h6 className="text-primary">Customer Services</h6>
                        <p className="w-75">
                          Phone: 010-20-708-
                          <br />
                          E-mail: order@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End Tracking Section */}
    </main>
  );
};

export default TrackShipment;
