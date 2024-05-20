import { Link } from "react-router-dom";
import { HeroSection } from "../components/exports";
import {getMapUrl, scrollToElement} from "../js/constants";
import {useEffect, useState} from "react";
import {ContactDetails} from "../models";
import {fetchContactDetails} from "../js/api";

function Home() {
  let [contactDetails, setContactDetails] = useState(JSON.parse(localStorage.contactDetails || null) || ContactDetails);
  useEffect(() => {
    fetchContactDetails().then(res => {
      try {
        if (res.success) {
          setContactDetails(res.data);
        } else {
          throw Error(res.message);
        }
      } catch (error) {
        console.log(error.message);
      }
    });
  }, []);
  return (
    <>
      <HeroSection />
      {/* <Link to="about">new</Link> */}
      {/* <StatusBar status="Picked up" /> */}
      {/* ======= #main ======= */}
      <main id="main">
        {/* ======= Get Started Section ======= */}
        <section id="get-started" className="get-started section-bg">
          <div className="container">
            <div className="row justify-content-between gy-4">
              <div
                className="col-lg-6 d-flex align-items-center"
                data-aos="fade-up"
              >
                <div className="content">
                  <h3>Welcome to <span className="site-name-primary">Carry Shipment</span></h3>
                  <p>
                    Beyond shipping, unlock potential Optimize every step, from
                    sourcing to delivery. Our experts provide customizable
                    solutions that drive efficiency and growth.
                  </p>
                </div>
              </div>
              <div className="col-lg-5" data-aos="fade">
                <form
                  action="forms/quote.php"
                  method="post"
                  className="php-email-form"
                >
                  <h3>Location</h3>
                  <p>
                    Vel nobis odio laboriosam et hic voluptatem. Inventore vitae
                    totam. Rerum repellendus enim linead sero park flows.
                  </p>
                  <div className="row gy-3">
                    <div className="col-md-12">
                      <iframe src={getMapUrl(contactDetails.location)}
                              style={{border: 0, width: '100%', height: 200}} allowFullScreen/>

                    </div>
                  </div>
                </form>
              </div>
              {/* End Quote Form */}
            </div>
          </div>
        </section>
        {/* End Get Started Section */}
        {/* ======= Constructions Section ======= */}
        <section id="constructions" className="constructions">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h3>Welcome to <span className="site-name-primary">Carry Shipment</span></h3>
              <p></p>
            </div>
            <div className="row gy-4">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                <div className="card-item" style={{ margin: 0, padding: 0 }}>
                  <div className="row" style={{ margin: 0, padding: 0 }}>
                    <div className="col-xl-5" style={{ margin: 0, padding: 0 }}>
                      <div
                          className="card-bg"
                          style={{
                            backgroundImage: "url(assets/img/Sone.png.jpg)",
                            height: "340px",
                          }}
                      />
                    </div>
                    <div className="col-xl-7 d-flex align-items-start">
                      <div className="card-body  lh-1">
                        <h4 className="card-title">Land Freight</h4>
                        <p>
                          Carry possesses outstanding expertise and extensive
                          experience in Road and Rail Transport. Utilizing our
                          extensive network, we excel in identifying the optimal
                          balance of time, cost, and perfortrailersmance to meet
                          customer requirements.
                        </p>
                        <Link
                            to="/services" scroll-to="#service-1" onClick={scrollToElement}
                            className="readmore stretched-link learn-more-link"
                        >
                          Learn more <i className="bi bi-arrow-right fs-4 ps-2 learn-more-icon" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Card Item */}
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
                <div className="card-item" style={{ margin: 0, padding: 0 }}>
                  <div className="row" style={{ margin: 0, padding: 0 }}>
                    <div className="col-xl-5" style={{ margin: 0, padding: 0 }}>
                      <div
                          className="card-bg"
                          style={{
                            backgroundImage: "url(assets/img/Stwo.jpg)",
                            height: "340px",
                          }}
                      />
                    </div>
                    <div className="col-xl-7 d-flex align-items-center">
                      <div className="card-body  lh-1">
                        <h4 className="card-title">
                          Warehousing Distribution:
                        </h4>
                        <p>
                          Warehousing solutions made simple. Freight
                          consolidation with a logistics partner reduces
                          unnecessary costs. Whether you have one pallet or one
                          hundred pallets, carry shipment provides an integrated
                          supply chain logistics solution for you.
                        </p>
                        <Link
                            to="/services" scroll-to="#service-2" onClick={scrollToElement}
                            className="readmore stretched-link learn-more-link"
                        >
                          Learn more <i className="bi bi-arrow-right fs-4 ps-2 learn-more-icon" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Card Item */}
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={300}>
                <div className="card-item" style={{ margin: 0, padding: 0 }}>
                  <div className="row" style={{ margin: 0, padding: 0 }}>
                    <div className="col-xl-5" style={{ margin: 0, padding: 0 }}>
                      <div
                          className="card-bg"
                          style={{
                            backgroundImage: "url(assets/img/Sthree.jpg)",
                            height: "340px",
                          }}
                      />
                    </div>
                    <div className="col-xl-7 d-flex align-items-start">
                      <div className="card-body  lh-1">
                        <h4 className="card-title">
                          Intermodal/Multimodal Freight
                        </h4>
                        <p>
                          Carry’s inter modal transportation services
                          encompasses both road and rail options and offer
                          several benefits such as greater flexibility,
                          increased capacity, reliable lead times, and a
                          significantly reduced carbon footprint.
                        </p>
                        <Link
                            to="/services" scroll-to="#service-3" onClick={scrollToElement}
                            className="readmore stretched-link learn-more-link"
                        >
                          Learn more <i className="bi bi-arrow-right fs-4 ps-2 learn-more-icon" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Card Item */}
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={400}>
                <div className="card-item" style={{ margin: 0, padding: 0 }}>
                  <div className="row" style={{ margin: 0, padding: 0 }}>
                    <div className="col-xl-5" style={{ margin: 0, padding: 0 }}>
                      <div
                          className="card-bg"
                          style={{
                            backgroundImage: "url(assets/img/Sfour.jpg)",
                            height: "340px",

                          }}
                      />
                    </div>
                    <div className="col-xl-7 d-flex align-items-start">
                      <div className="card-body lh-1">
                        <h4 className="card-title">Reverse Supply Chain</h4>
                        <p>
                          CarryShipment has developed an end-to-end reverse
                          logistics program that provides a system for managing
                          your product returns, allowing you to recoup revenue
                          while limiting your environmental impacts.
                        </p>
                        <Link
                            to="/services" scroll-to="#service-4" onClick={scrollToElement}
                            className="readmore stretched-link learn-more-link"
                        >
                          Learn more <i className="bi bi-arrow-right fs-4 ps-2 learn-more-icon" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={400}>
                <div className="card-item" style={{ margin: 0, padding: 0 }}>
                  <div className="row" style={{ margin: 0, padding: 0 }}>
                    <div className="col-xl-5" style={{ margin: 0, padding: 0 }}>
                      <div
                          className="card-bg"
                          style={{
                            backgroundImage: "url(assets/img/Sfive.jpg)",
                            height: "340px",
                          }}
                      />
                    </div>
                    <div className="col-xl-7 d-flex align-items-start">
                      <div className="card-body  lh-1">
                        <h4 className="card-title">Hazardous Freight</h4>
                        <p>
                          DG goods comes in various forms - solid, liquid & gas.
                          CarryShipment handles hazardous cargo including items
                          of everyday use such as perfumes, batteries, hair
                          spray and other chemicals.
                        </p>
                        <Link
                            to="/services" scroll-to="#service-5" onClick={scrollToElement}
                            className="readmore stretched-link learn-more-link"
                        >
                          Learn more <i className="bi bi-arrow-right fs-4 ps-2 learn-more-icon" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={400}>
                <div className="card-item" style={{ margin: 0, padding: 0 }}>
                  <div className="row" style={{ margin: 0, padding: 0 }}>
                    <div className="col-xl-5" style={{ margin: 0, padding: 0 }}>
                      <div
                          className="card-bg"
                          style={{
                            backgroundImage: "url(assets/img/Ssix.jpg)",
                            height: "340px",
                          }}
                      />
                    </div>
                    <div className="col-xl-7 d-flex align-items-start">
                      <div className="card-body  lh-1">
                        <h4 className="card-title">Integration</h4>
                        <p>
                          Carry provides personalized consolidation services on
                          a global scale for both outbound and inbound
                          shipments, regardless of the mode of transport.
                          Freight consolidation proves to be a cost-effective
                          and time-saving solution, ensuring the safety of
                          shipments.
                        </p>
                        <Link
                            to="/services" scroll-to="#service-6" onClick={scrollToElement}
                            className="readmore stretched-link learn-more-link"
                        >
                          Learn more <i className="bi bi-arrow-right fs-4 ps-2 learn-more-icon" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={400}>
                <div className="card-item" style={{ margin: 0, padding: 0 }}>
                  <div className="row" style={{ margin: 0, padding: 0 }}>
                    <div className="col-xl-5" style={{ margin: 0, padding: 0 }}>
                      <div
                          className="card-bg"
                          style={{
                            backgroundImage: "url(assets/img/Sseven.jpg)",
                            height: "357px",
                          }}
                      />
                    </div>
                    <div className="col-xl-7 d-flex align-items-start">
                      <div className="card-body  lh-1">
                        <h4 className="card-title">Freight Insurance</h4>
                        <p>
                          CarryShipment is adept in navigating the intricacies
                          of cargo insurance, recognizing the perils associated
                          with uninsured shipments. We simplify the process by
                          providing a comprehensive insurance cover that
                          safeguards against all potential external causes
                          resulting in physical loss or damage to freight during
                          shipping.
                        </p>
                        <Link
                            to="/services" scroll-to="#service-7" onClick={scrollToElement}
                            className="readmore stretched-link learn-more-link"
                        >
                          Learn more <i className="bi bi-arrow-right fs-4 ps-2 learn-more-icon" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={400}>
                <div className="card-item" style={{ margin: 0, padding: 0 }}>
                  <div className="row" style={{ margin: 0, padding: 0 }}>
                    <div className="col-xl-5" style={{ margin: 0, padding: 0 }}>
                      <div
                          className="card-bg"
                          style={{
                            backgroundImage: "url(assets/img/Seight.jpg)",
                            height: "100%",
                          }}
                      />
                    </div>
                    <div className="col-xl-7 d-flex align-items-start">
                      <div className="card-body  lh-1">
                        <h4 className="card-title">Exceptional cargo</h4>
                        <p className="col-12">
                          Fueled by a deep passion, we tackle our customers'
                          singular logistical hurdles.
                        </p>
                        <p>
                          Navigating bulk & break bulk shipments <br/>
                          Expertly managing heavy lifts and over-dimensional
                          cargo <br/> Orchestrating seamless relocations of entire
                          plants <br/> Mastering the art of lashing & chocking
                          Conducting precise survey services
                        </p>
                        <Link
                            to="/services" scroll-to="#service-8" onClick={scrollToElement}
                            className="readmore stretched-link learn-more-link"
                        >
                          Learn more <i className="bi bi-arrow-right fs-4 ps-2 learn-more-icon" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Card Item */}
            </div>
          </div>
        </section>
        {/* End Constructions Section */}
        {/* ======= Services Section ======= */}
        <section id="services" className="services section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>HOW WE DO IT</h2>
              <p>Our experienced, knowledgeable experts offer optimal solutions to help you meet your business challenges.</p>
            </div>
            <div className="row gy-4">
              <div
                  className="col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={100}
              >
                <div className="service-item  position-relative">
                  <div className="icon p-2">
                    <i className="fa-solid fa-mountain-city fs-3 ps-2" />
                  </div>
                  <h3>Your ocean freight Solution</h3>
                  <p>
                    We ensure the timely and cost-effective shipment of your valuable cargo to its destination via ocean transport with CarryShipment.
                  </p>
                </div>
              </div>
              {/* End Service Item */}
              <div
                  className="col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={200}
              >
                <div className="service-item position-relative">
                  <div className="icon p-2 ">
                    <i className="fa-solid fa-arrow-up-from-ground-water fs-3 ps-2" />
                  </div>
                  <h3>Land transportation services </h3>
                  <p>
                    Optimize your supply chain with CarryShipment's international road freight services tailored for efficient ground transportation.
                  </p>
                </div>
              </div>
              {/* End Service Item */}
              <div
                  className="col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={300}
              >
                <div className="service-item position-relative">
                  <div className="icon  p-2">
                    <i className="fa-solid fa-compass-drafting fs-3 ps-3" />
                  </div>
                  <h3>Warehousing</h3>
                  <p>
                    Ensure the effective and secure storage of your items by utilizing our warehousing services, expertly packaging and safeguarding your belongings.
                  </p>
                </div>
              </div>
              {/* End Service Item */}
              <div
                  className="col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={400}
              >
                <div className="service-item position-relative">
                  <div className="icon  p-2">
                    <i className="fa-solid fa-trowel-bricks fs-3 ps-3" />
                  </div>
                  <h3>Our exclusive services</h3>
                  <p>
                    Our warehousing services have gained a global reputation for being exceptionally reliable, secure, and cost-effective. We take pride in consistently providing top-notch warehousing solutions at the most competitive prices in the industry.
                  </p>
                </div>
              </div>
              {/* End Service Item */}
              <div
                  className="col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={500}
              >
                <div className="service-item position-relative">
                  <div className="icon  p-2">
                    <i className="fa-solid fa-helmet-safety fs-3 ps-3" />
                  </div>
                  <h3>Packaging And Safe Storage</h3>
                  <p>
                    Efficiently and securely pack and store your belongings to ensure their safety in storage.
                  </p>
                </div>
              </div>
              {/* End Service Item */}
              <div
                  className="col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={600}
              >
                <div className="service-item position-relative">
                  <div className="icon  p-2 ">
                    <i className="fa-solid fa-arrow-up-from-ground-water fs-3 ps-3" />
                  </div>
                  <h3> Cargo</h3>
                  <p>
                    Efficiently transport any cargo from one location to another promptly, saving both time and costs.
                  </p>
                </div>
              </div>
              <div
                  className="col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={600}
              >
                <div className="service-item position-relative">
                  <div className="icon  p-2 ">
                    <i className="bi bi-cone-striped fs-3 ps-3" />
                  </div>
                  <h3> Ground Transport</h3>
                  <p>
                    Explore ground transportation choices suitable for all visitors, regardless of your requirements, timetable, or destination.
                  </p>
                </div>
              </div>
              <div
                  className="col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={600}
              >
                <div className="service-item position-relative">
                  <div className="icon  p-2 ">
                    <i className="bi bi-airplane fs-3 ps-3" />
                  </div>
                  <h3>Delivery from one door to another</h3>
                  <p>
                    Our proficiency in transportation management and strategic planning enables us to create a tailored solution.
                  </p>
                </div>
              </div>
              <div
                  className="col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={600}
              >
                <div className="service-item position-relative">
                  <div className="icon  p-2 ">
                    <i className="bi bi-person-wheelchair fs-3 ps-3" />
                  </div>
                  <h3> Global Transportation</h3>
                  <p>
                    Specializing in the international forwarding of goods and providing related comprehensive logistic services.
                  </p>
                </div>
              </div>

              {/* End Service Item */}
            </div>
          </div>
        </section>
        {/* End Services Section */}
        {/* ======= Alt Services Section ======= */}
        <section id="alt-services" className="alt-services">
          <div className="container" data-aos="fade-up">
            <div className="row justify-content-around gy-4">
              <div
                className="col-lg-6 img-bg"
                style={{ backgroundImage: "url(assets/img/alt-services.jpg)" }}
                data-aos="zoom-in"
                data-aos-delay={100}
              />
              <div className="col-lg-5 d-flex flex-column justify-content-center">
                <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
                <p>
                  Esse voluptas cumque vel exercitationem. Reiciendis est hic
                  accusamus. Non ipsam et sed minima temporibus laudantium.
                  Soluta voluptate sed facere corporis dolores excepturi
                </p>
                <div
                  className="icon-box d-flex position-relative"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <i className="bi bi-easel flex-shrink-0" />
                  <div>
                    <h4>
                      <a href className="stretched-link">
                        Lorem Ipsum
                      </a>
                    </h4>
                    <p>
                      Voluptatum deleniti atque corrupti quos dolores et quas
                      molestias excepturi sint occaecati cupiditate non
                      provident
                    </p>
                  </div>
                </div>
                {/* End Icon Box */}
                <div
                  className="icon-box d-flex position-relative"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <i className="bi bi-patch-check flex-shrink-0" />
                  <div>
                    <h4>
                      <a href className="stretched-link">
                        Nemo Enim
                      </a>
                    </h4>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                    </p>
                  </div>
                </div>
                {/* End Icon Box */}
                <div
                  className="icon-box d-flex position-relative"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <i className="bi bi-brightness-high flex-shrink-0" />
                  <div>
                    <h4>
                      <a href className="stretched-link">
                        Dine Pad
                      </a>
                    </h4>
                    <p>
                      Explicabo est voluptatum asperiores consequatur magnam. Et
                      veritatis odit. Sunt aut deserunt minus aut eligendi omnis
                    </p>
                  </div>
                </div>
                {/* End Icon Box */}
                <div
                  className="icon-box d-flex position-relative"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <i className="bi bi-brightness-high flex-shrink-0" />
                  <div>
                    <h4>
                      <a href className="stretched-link">
                        Tride clov
                      </a>
                    </h4>
                    <p>
                      Est voluptatem labore deleniti quis a delectus et. Saepe
                      dolorem libero sit non aspernatur odit amet. Et eligendi
                    </p>
                  </div>
                </div>
                {/* End Icon Box */}
              </div>
            </div>
          </div>
        </section>
        {/* End Alt Services Section */}
        {/* ======= Features Section ======= */}
        <section id="features" className="features section-bg">
          <div className="container" data-aos="fade-up">
            <ul className="nav nav-tabs row  g-2 d-flex">
              <li className="nav-item col-3">
                <a
                  className="nav-link active show"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-1"
                >
                  <h4>Modisit</h4>
                </a>
              </li>
              {/* End tab nav item */}
              <li className="nav-item col-3">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-2"
                >
                  <h4>Praesenti</h4>
                </a>
                {/* End tab nav item */}
              </li>
              <li className="nav-item col-3">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-3"
                >
                  <h4>Explica</h4>
                </a>
              </li>
              {/* End tab nav item */}
              <li className="nav-item col-3">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-4"
                >
                  <h4>Nostrum</h4>
                </a>
              </li>
              {/* End tab nav item */}
            </ul>
            <div className="tab-content">
              <div className="tab-pane active show" id="tab-1">
                <div className="row">
                  <div
                    className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    <h3>Voluptatem dignissimos provident</h3>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <ul>
                      <li>
                        <i className="bi bi-check2-all" /> Ullamco laboris nisi
                        ut aliquip ex ea commodo consequat.
                      </li>
                      <li>
                        <i className="bi bi-check2-all" /> Duis aute irure dolor
                        in reprehenderit in voluptate velit.
                      </li>
                      <li>
                        <i className="bi bi-check2-all" /> Ullamco laboris nisi
                        ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate trideta
                        storacalaperda mastiro dolore eu fugiat nulla pariatur.
                      </li>
                    </ul>
                  </div>
                  <div
                    className="col-lg-6 order-1 order-lg-2 text-center"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    <img
                      src="assets/img/features-1.jpg"
                      alt
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              {/* End tab content item */}
              <div className="tab-pane" id="tab-2">
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                    <h3>Neque exercitationem debitis</h3>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <ul>
                      <li>
                        <i className="bi bi-check2-all" /> Ullamco laboris nisi
                        ut aliquip ex ea commodo consequat.
                      </li>
                      <li>
                        <i className="bi bi-check2-all" /> Duis aute irure dolor
                        in reprehenderit in voluptate velit.
                      </li>
                      <li>
                        <i className="bi bi-check2-all" /> Provident mollitia
                        neque rerum asperiores dolores quos qui a. Ipsum neque
                        dolor voluptate nisi sed.
                      </li>
                      <li>
                        <i className="bi bi-check2-all" /> Ullamco laboris nisi
                        ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate trideta
                        storacalaperda mastiro dolore eu fugiat nulla pariatur.
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    <img
                      src="assets/img/features-2.jpg"
                      alt
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              {/* End tab content item */}
              <div className="tab-pane" id="tab-3">
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                    <h3>Voluptatibus commodi accusamu</h3>
                    <ul>
                      <li>
                        <i className="bi bi-check2-all" /> Ullamco laboris nisi
                        ut aliquip ex ea commodo consequat.
                      </li>
                      <li>
                        <i className="bi bi-check2-all" /> Duis aute irure dolor
                        in reprehenderit in voluptate velit.
                      </li>
                      <li>
                        <i className="bi bi-check2-all" /> Provident mollitia
                        neque rerum asperiores dolores quos qui a. Ipsum neque
                        dolor voluptate nisi sed.
                      </li>
                    </ul>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    <img
                      src="assets/img/features-3.jpg"
                      alt
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              {/* End tab content item */}
              <div className="tab-pane" id="tab-4">
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                    <h3>Omnis fugiat ea explicabo sunt</h3>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <ul>
                      <li>
                        <i className="bi bi-check2-all" /> Ullamco laboris nisi
                        ut aliquip ex ea commodo consequat.
                      </li>
                      <li>
                        <i className="bi bi-check2-all" /> Duis aute irure dolor
                        in reprehenderit in voluptate velit.
                      </li>
                      <li>
                        <i className="bi bi-check2-all" /> Ullamco laboris nisi
                        ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate trideta
                        storacalaperda mastiro dolore eu fugiat nulla pariatur.
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    <img
                      src="assets/img/features-4.jpg"
                      alt
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              {/* End tab content item */}
            </div>
          </div>
        </section>
        {/* End Features Section */}
        {/* ======= Testimonials Section ======= */}
        <section id="testimonials" className="testimonials section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Testimonials</h2>
              <p>
                Quam sed id excepturi ccusantium dolorem ut quis dolores nisi
                llum nostrum enim velit qui ut et autem uia reprehenderit sunt
                deleniti
              </p>
            </div>
            <div className="slides-2 swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-1.jpg"
                        className="testimonial-img"
                        alt
                      />
                      <h3>Saul Goodman</h3>
                      <h4>Ceo &amp; Founder</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                      </div>
                      <p>
                        <i className="bi bi-quote quote-icon-left" />
                        Proin iaculis purus consequat sem cure digni ssim donec
                        porttitora entum suscipit rhoncus. Accusantium quam,
                        ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                        risus at semper.
                        <i className="bi bi-quote quote-icon-right" />
                      </p>
                    </div>
                  </div>
                </div>
                {/* End testimonial item */}
                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-2.jpg"
                        className="testimonial-img"
                        alt
                      />
                      <h3>Sara Wilsson</h3>
                      <h4>Designer</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                      </div>
                      <p>
                        <i className="bi bi-quote quote-icon-left" />
                        Export tempor illum tamen malis malis eram quae irure
                        esse labore quem cillum quid cillum eram malis quorum
                        velit fore eram velit sunt aliqua noster fugiat irure
                        amet legam anim culpa.
                        <i className="bi bi-quote quote-icon-right" />
                      </p>
                    </div>
                  </div>
                </div>
                {/* End testimonial item */}
                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-3.jpg"
                        className="testimonial-img"
                        alt
                      />
                      <h3>Jena Karlis</h3>
                      <h4>Store Owner</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                      </div>
                      <p>
                        <i className="bi bi-quote quote-icon-left" />
                        Enim nisi quem export duis labore cillum quae magna enim
                        sint quorum nulla quem veniam duis minim tempor labore
                        quem eram duis noster aute amet eram fore quis sint
                        minim.
                        <i className="bi bi-quote quote-icon-right" />
                      </p>
                    </div>
                  </div>
                </div>
                {/* End testimonial item */}
                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-4.jpg"
                        className="testimonial-img"
                        alt
                      />
                      <h3>Matt Brandon</h3>
                      <h4>Freelancer</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                      </div>
                      <p>
                        <i className="bi bi-quote quote-icon-left" />
                        Fugiat enim eram quae cillum dolore dolor amet nulla
                        culpa multos export minim fugiat minim velit minim dolor
                        enim duis veniam ipsum anim magna sunt elit fore quem
                        dolore labore illum veniam.
                        <i className="bi bi-quote quote-icon-right" />
                      </p>
                    </div>
                  </div>
                </div>
                {/* End testimonial item */}
                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-5.jpg"
                        className="testimonial-img"
                        alt
                      />
                      <h3>John Larson</h3>
                      <h4>Entrepreneur</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                      </div>
                      <p>
                        <i className="bi bi-quote quote-icon-left" />
                        Quis quorum aliqua sint quem legam fore sunt eram irure
                        aliqua veniam tempor noster veniam enim culpa labore
                        duis sunt culpa nulla illum cillum fugiat legam esse
                        veniam culpa fore nisi cillum quid.
                        <i className="bi bi-quote quote-icon-right" />
                      </p>
                    </div>
                  </div>
                </div>
                {/* End testimonial item */}
              </div>
              <div className="swiper-pagination" />
            </div>
          </div>
        </section>
        {/* End Testimonials Section */}
        {/* <Chat/> */}
      </main>
      {/* End #main */}
    </>
  );
}

export default Home;
