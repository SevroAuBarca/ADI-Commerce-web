import React from "react";

const Checkout = () => {
  return (
    <>
      <section class="banner-area organic-breadcrumb">
        <div class="container">
          <div class="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
            <div class="col-first">
              <h1>Checkout</h1>
              <nav class="d-flex align-items-center">
                <a href="index.html">
                  Home
                  <span class="lnr lnr-arrow-right" />
                </a>
                <a href="single-product.html">Checkout</a>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Banner Area --> */}

      {/* <!--================Checkout Area =================--> */}
      <section class="checkout_area section_gap">
        <div class="container">
          <div class="billing_details">
            <div class="row">
              <div class="col-lg-8">
                <h3>Detalles de la compra</h3>
                <form
                  class="row contact_form"
                  action="#"
                  method="post"
                  novalidate="novalidate"
                >
                  <div class="col-md-6 form-group p_star">
                    <input
                      type="text"
                      class="form-control"
                      id="first"
                      name="name"
                    />
                    <span class="placeholder" data-placeholder="Nombres" />
                  </div>
                  <div class="col-md-6 form-group p_star">
                    <input
                      type="text"
                      class="form-control"
                      id="last"
                      name="name"
                    />
                    <span class="placeholder" data-placeholder="Apellidos" />
                  </div>
                  <div class="col-md-6 form-group p_star">
                    <input
                      type="text"
                      class="form-control"
                      id="number"
                      name="number"
                    />
                    <span
                      class="placeholder"
                      data-placeholder="Numero de telefono"
                    />
                  </div>
                  <div class="col-md-6 form-group p_star">
                    <input
                      type="text"
                      class="form-control"
                      id="email"
                      name="compemailany"
                    />
                    <span class="placeholder" data-placeholder="Correo" />
                  </div>
                  <div class="col-md-12 form-group p_star">
                    <select class="country_select">
                      <option value="1">Mexico</option>
                    </select>
                  </div>
                  <div class="col-md-12 form-group p_star">
                    <input
                      type="text"
                      class="form-control"
                      id="add1"
                      name="add1"
                    />
                    <span class="placeholder" data-placeholder="Calle" />
                  </div>
                  <div class="col-md-12 form-group p_star">
                    <input
                      type="text"
                      class="form-control"
                      id="add2"
                      name="add2"
                    />
                    <span class="placeholder" data-placeholder="Numero #" />
                  </div>
                  <div class="col-md-12 form-group p_star">
                    <input
                      type="text"
                      class="form-control"
                      id="city"
                      name="city"
                    />
                    <span class="placeholder" data-placeholder="Ciudad" />
                  </div>
                  <div class="col-md-12 form-group p_star">
                    <select class="country_select">
                      <option value="1">Morelos</option>
                    </select>
                  </div>
                  <div class="col-md-12 form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="zip"
                      name="zip"
                      placeholder="Codigo Postal"
                    />
                  </div>
                  <div class="col-md-12 form-group">
                    <textarea
                      class="form-control"
                      name="message"
                      id="message"
                      rows="1"
                      placeholder="Notas de la orden"
                    />
                  </div>
                </form>
              </div>
              <div class="col-lg-4">
                <div class="order_box">
                  <h2>Tu orden</h2>
                  <ul class="list">
                    <li>
                      {/* rome-ignore lint/a11y/useValidAnchor: <explanation> */}
                      <a href="#">
                        Total <span>Productos</span>
                      </a>
                    </li>
                    <li>
                      {/* rome-ignore lint/a11y/useValidAnchor: <explanation> */}
                      <a href="#">
                        Tenis nike<span class="middle">x 02</span>{" "}
                        <span class="last">$720.00</span>
                      </a>
                    </li>
                    <li>
                      {/* rome-ignore lint/a11y/useValidAnchor: <explanation> */}
                      <a href="#">
                        Tenis nike <span class="middle">x 02</span>{" "}
                        <span class="last">$720.00</span>
                      </a>
                    </li>
                    <li>
                      {/* rome-ignore lint/a11y/useValidAnchor: <explanation> */}
                      <a href="#">
                        Tenis nike <span class="middle">x 02</span>{" "}
                        <span class="last">$720.00</span>
                      </a>
                    </li>
                  </ul>
                  <ul class="list list_2">
                    <li>
                      {/* rome-ignore lint/a11y/useValidAnchor: <explanation> */}
                      <a href="#">
                        Subtotal <span>$2160.00</span>
                      </a>
                    </li>
                    <li>
                      {/* rome-ignore lint/a11y/useValidAnchor: <explanation> */}
                      <a href="#">
                        Shipping <span>Flat rate: $50.00</span>
                      </a>
                    </li>
                    <li>
                      {/* rome-ignore lint/a11y/useValidAnchor: <explanation> */}
                      <a href="#">
                        Total <span>$2210.00</span>
                      </a>
                    </li>
                  </ul>
                  <div class="payment_item">
                    <div class="radion_btn">
                      <input type="radio" id="f-option5" name="selector" />
                      <label for="f-option5">Check payments</label>
                      <div class="check" />
                    </div>
                    <p>
                      Please send a check to Store Name, Store Street, Store
                      Town, Store State / County, Store Postcode.
                    </p>
                  </div>
                  <div class="payment_item active">
                    <div class="radion_btn">
                      <input type="radio" id="f-option6" name="selector" />
                      <label for="f-option6">Paypal </label>
                      <img src="img/product/card.jpg" alt="" />
                      <div class="check" />
                    </div>
                    <p>
                      Pay via PayPal; you can pay with your credit card if you
                      don’t have a PayPal account.
                    </p>
                  </div>
                  <div class="creat_account">
                    <input type="checkbox" id="f-option4" name="selector" />
                    <label for="f-option4">He leido los </label>
                    {/* rome-ignore lint/a11y/useValidAnchor: <explanation> */}
                    <a href="#">Terminos y Condiciones*</a>
                  </div>
                  {/* rome-ignore lint/a11y/useValidAnchor: <explanation> */}
                  <a class="primary-btn" href="#">
                    Poceder al Pago
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--================End Checkout Area =================--> */}
    </>
  );
};

export default Checkout;
