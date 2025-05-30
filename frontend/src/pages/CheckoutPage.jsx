function CheckoutPage() {
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
                        className="nav-link dropdown-toggle active"
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
                    <a href="contact.html" className="nav-item nav-link">
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
              Checkout
            </h1>
            <div className="d-inline-flex">
              <p className="m-0">
                <a href>Home</a>
              </p>
              <p className="m-0 px-2">-</p>
              <p className="m-0">Checkout</p>
            </div>
          </div>
        </div>
        <div className="container-fluid pt-5">
          <div className="row px-xl-5">
            <div className="col-lg-8">
              <div className="mb-4">
                <h4 className="font-weight-semi-bold mb-4">Billing Address</h4>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <label>First Name</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="John"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Last Name</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Doe"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>E-mail</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="example@email.com"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Mobile No</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="+123 456 789"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Address Line 1</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="123 Street"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Address Line 2</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="123 Street"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Country</label>
                    <select className="custom-select">
                      <option selected>United States</option>
                      <option>Afghanistan</option>
                      <option>Albania</option>
                      <option>Algeria</option>
                    </select>
                  </div>
                  <div className="col-md-6 form-group">
                    <label>City</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="New York"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>State</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="New York"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>ZIP Code</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder={123}
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="newaccount"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="newaccount"
                      >
                        Create an account
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12 form-group">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="shipto"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="shipto"
                        data-toggle="collapse"
                        data-target="#shipping-address"
                      >
                        Ship to different address
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="collapse mb-4" id="shipping-address">
                <h4 className="font-weight-semi-bold mb-4">Shipping Address</h4>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <label>First Name</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="John"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Last Name</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Doe"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>E-mail</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="example@email.com"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Mobile No</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="+123 456 789"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Address Line 1</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="123 Street"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Address Line 2</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="123 Street"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Country</label>
                    <select className="custom-select">
                      <option selected>United States</option>
                      <option>Afghanistan</option>
                      <option>Albania</option>
                      <option>Algeria</option>
                    </select>
                  </div>
                  <div className="col-md-6 form-group">
                    <label>City</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="New York"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>State</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="New York"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>ZIP Code</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder={123}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card border-secondary mb-5">
                <div className="card-header bg-secondary border-0">
                  <h4 className="font-weight-semi-bold m-0">Order Total</h4>
                </div>
                <div className="card-body">
                  <h5 className="font-weight-medium mb-3">Products</h5>
                  <div className="d-flex justify-content-between">
                    <p>Colorful Stylish Shirt 1</p>
                    <p>$150</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>Colorful Stylish Shirt 2</p>
                    <p>$150</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>Colorful Stylish Shirt 3</p>
                    <p>$150</p>
                  </div>
                  <hr className="mt-0" />
                  <div className="d-flex justify-content-between mb-3 pt-1">
                    <h6 className="font-weight-medium">Subtotal</h6>
                    <h6 className="font-weight-medium">$150</h6>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-medium">Shipping</h6>
                    <h6 className="font-weight-medium">$10</h6>
                  </div>
                </div>
                <div className="card-footer border-secondary bg-transparent">
                  <div className="d-flex justify-content-between mt-2">
                    <h5 className="font-weight-bold">Total</h5>
                    <h5 className="font-weight-bold">$160</h5>
                  </div>
                </div>
              </div>
              <div className="card border-secondary mb-5">
                <div className="card-header bg-secondary border-0">
                  <h4 className="font-weight-semi-bold m-0">Payment</h4>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name="payment"
                        id="paypal"
                      />
                      <label className="custom-control-label" htmlFor="paypal">
                        Paypal
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name="payment"
                        id="directcheck"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="directcheck"
                      >
                        Direct Check
                      </label>
                    </div>
                  </div>
                  <div className>
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name="payment"
                        id="banktransfer"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="banktransfer"
                      >
                        Bank Transfer
                      </label>
                    </div>
                  </div>
                </div>
                <div className="card-footer border-secondary bg-transparent">
                  <button className="btn btn-lg btn-block btn-primary font-weight-bold my-3 py-3">
                    Place Order
                  </button>
                </div>
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

export default CheckoutPage;
