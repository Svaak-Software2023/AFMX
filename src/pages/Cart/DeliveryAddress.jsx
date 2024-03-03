import React from "react";

const DeliveryAddress = () => {
  return (
    <>
      <div className="container my-3 ">
        <div className="row px-0 gap-3">
          <div className="col-12">
            <div class="card">
              <div class="card-body">
                <div className="row px-md-5">
                  <div className="col-sm-9 col-md-8 col-lg-6 col-12">
                    <div className="d-flex justify-content-between">
                      <a className="fs-5 color_black font_weight_500">Login</a>
                      <p className="fs-5">User name</p>
                      <p className="fs-5">+91 76876762</p>
                    </div>
                  </div>
                  <div className="col-sm-3 col-md-4 col-lg-6 col-3">
                    <button className="btn btn-light d-flex ms-auto change_btn">
                      Change
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="container-fluid delivery_address_bg px-md-5">
              <h6>DELIVERY ADDRESS</h6>
            </div>
            <div class="card">
              <div class="card-body px-md-5">
                <div className="row ">
                  <div className="col-md-3 col-6">
                    <p className="delivery_address_key">User name</p>
                  </div>
                  <div className="col-md-8 col-6">
                    <p className="delivery_address_value">+91 76876762</p>
                  </div>
                  <div className="col-md-3 col-6">
                    <p className="delivery_address_key">Pin code</p>
                  </div>
                  <div className="col-md-8 col-6">
                    <p className="delivery_address_value">242221</p>
                  </div>
                  <div className="col-md-3 col-6">
                    <p className="delivery_address_key">Address</p>
                  </div>
                  <div className="col-md-8 col-6">
                    <p className="delivery_address_value">
                      delivery address
                      .................................................
                    </p>
                  </div>
                </div>
                <button className="btn btn-danger">DELIVER HERE</button>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div class="card">
              <div class="card-body px-md-5">
                <div
                  class="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                      <p
                        class=" collapsed order_or_payment_title"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        + ADD NEW ADDRESS
                      </p>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="NEW ADDRESS"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div class="card">
              <div class="card-body px-md-5">
                <p className="order_or_payment_title">ORDER SUMMARY</p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div class="card">
              <div class="card-body px-md-5">
                <p className="order_or_payment_title">PAYMENT OPTIONS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliveryAddress;
