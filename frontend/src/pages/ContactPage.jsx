function ContactPage() {
  return (
    <>
      <div>
        <div className="container-fluid">
          <div className="row border-top px-xl-5">
            <div className="col-lg-3 d-none d-lg-block">
              <a
                className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"
                data-toggle="collapse"
                href="#navbar-vertical"
                style={{ height: 65, marginTop: "-1px", padding: "0 30px" }}
              >
                <h6 className="m-0">Categories</h6>
                <i className="fa fa-angle-down text-dark" />
              </a>
              <nav
                className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light"
                id="navbar-vertical"
                style={{ width: "calc(100% - 30px)", zIndex: 1 }}
              >
                <div
                  className="navbar-nav w-100 overflow-hidden"
                  style={{ height: 410 }}
                >
                  <div className="nav-item dropdown">
                    <a href="#" className="nav-link" data-toggle="dropdown">
                      Dresses{" "}
                      <i className="fa fa-angle-down float-right mt-1" />
                    </a>
                    <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                      <a href className="dropdown-item">
                        Men's Dresses
                      </a>
                      <a href className="dropdown-item">
                        Women's Dresses
                      </a>
                      <a href className="dropdown-item">
                        Baby's Dresses
                      </a>
                    </div>
                  </div>
                  <a href className="nav-item nav-link">
                    Shirts
                  </a>
                  <a href className="nav-item nav-link">
                    Jeans
                  </a>
                  <a href className="nav-item nav-link">
                    Swimwear
                  </a>
                  <a href className="nav-item nav-link">
                    Sleepwear
                  </a>
                  <a href className="nav-item nav-link">
                    Sportswear
                  </a>
                  <a href className="nav-item nav-link">
                    Jumpsuits
                  </a>
                  <a href className="nav-item nav-link">
                    Blazers
                  </a>
                  <a href className="nav-item nav-link">
                    Jackets
                  </a>
                  <a href className="nav-item nav-link">
                    Shoes
                  </a>
                </div>
              </nav>
            </div>
            <div className="col-lg-9">
              <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                <a href className="text-decoration-none d-block d-lg-none">
                  <h1 className="m-0 display-5 font-weight-semi-bold">
                    <span className="text-primary font-weight-bold border px-3 mr-1">
                      E
                    </span>
                    Shopper
                  </h1>
                </a>
                <button
                  type="button"
                  className="navbar-toggler"
                  data-toggle="collapse"
                  data-target="#navbarCollapse"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse justify-content-between"
                  id="navbarCollapse"
                >
                  <div className="navbar-nav mr-auto py-0">
                    <a href="index.html" className="nav-item nav-link">
                      Home
                    </a>
                    <a href="shop.html" className="nav-item nav-link">
                      Shop
                    </a>
                    <a href="detail.html" className="nav-item nav-link">
                      Shop Detail
                    </a>
                    <div className="nav-item dropdown">
                      <a
                        href="#"
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Pages
                      </a>
                      <div className="dropdown-menu rounded-0 m-0">
                        <a href="cart.html" className="dropdown-item">
                          Shopping Cart
                        </a>
                        <a href="checkout.html" className="dropdown-item">
                          Checkout
                        </a>
                      </div>
                    </div>
                    <a href="contact.html" className="nav-item nav-link active">
                      Contact
                    </a>
                  </div>
                  <div className="navbar-nav ml-auto py-0">
                    <a href className="nav-item nav-link">
                      Login
                    </a>
                    <a href className="nav-item nav-link">
                      Register
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="container-fluid bg-secondary mb-5">
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ minHeight: 300 }}
          >
            <h1 className="font-weight-semi-bold text-uppercase mb-3">
              Contact Us
            </h1>
            <div className="d-inline-flex">
              <p className="m-0">
                <a href>Home</a>
              </p>
              <p className="m-0 px-2">-</p>
              <p className="m-0">Contact</p>
            </div>
          </div>
        </div>
        <div className="container-fluid pt-5">
          <div className="text-center mb-4">
            <h2 className="section-title px-5">
              <span className="px-2">Contact For Any Queries</span>
            </h2>
          </div>
          <div className="row px-xl-5">
            <div className="col-lg-7 mb-5">
              <div className="contact-form">
                <div id="success" />
                <form
                  name="sentMessage"
                  id="contactForm"
                  noValidate="novalidate"
                >
                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required="required"
                      data-validation-required-message="Please enter your name"
                    />
                    <p className="help-block text-danger" />
                  </div>
                  <div className="control-group">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                      required="required"
                      data-validation-required-message="Please enter your email"
                    />
                    <p className="help-block text-danger" />
                  </div>
                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                      required="required"
                      data-validation-required-message="Please enter a subject"
                    />
                    <p className="help-block text-danger" />
                  </div>
                  <div className="control-group">
                    <textarea
                      className="form-control"
                      rows={6}
                      id="message"
                      placeholder="Message"
                      required="required"
                      data-validation-required-message="Please enter your message"
                      defaultValue={""}
                    />
                    <p className="help-block text-danger" />
                  </div>
                  <div>
                    <button
                      className="btn btn-primary py-2 px-4"
                      type="submit"
                      id="sendMessageButton"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5 mb-5">
              <h5 className="font-weight-semi-bold mb-3">Get In Touch</h5>
              <p>
                Justo sed diam ut sed amet duo amet lorem amet stet sea ipsum,
                sed duo amet et. Est elitr dolor elitr erat sit sit. Dolor diam
                et erat clita ipsum justo sed.
              </p>
              <div className="d-flex flex-column mb-3">
                <h5 className="font-weight-semi-bold mb-3">Store 1</h5>
                <p className="mb-2">
                  <i className="fa fa-map-marker-alt text-primary mr-3" />
                  123 Street, New York, USA
                </p>
                <p className="mb-2">
                  <i className="fa fa-envelope text-primary mr-3" />
                  info@example.com
                </p>
                <p className="mb-2">
                  <i className="fa fa-phone-alt text-primary mr-3" />
                  +012 345 67890
                </p>
              </div>
              <div className="d-flex flex-column">
                <h5 className="font-weight-semi-bold mb-3">Store 2</h5>
                <p className="mb-2">
                  <i className="fa fa-map-marker-alt text-primary mr-3" />
                  123 Street, New York, USA
                </p>
                <p className="mb-2">
                  <i className="fa fa-envelope text-primary mr-3" />
                  info@example.com
                </p>
                <p className="mb-0">
                  <i className="fa fa-phone-alt text-primary mr-3" />
                  +012 345 67890
                </p>
              </div>
            </div>
          </div>
        </div>
        <a href="#" className="btn btn-primary back-to-top">
          <i className="fa fa-angle-double-up" />
        </a>
      </div>
    </>
  );
}

export default ContactPage;
