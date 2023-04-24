import React from "react";

const CreateProduct = () => {
  const addProduct = () => {};
  return (
    <>
      {/* <!-- Start Banner Area --> */}
      <section className="banner-area organic-breadcrumb">
        <div className="container">
          <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
            <div className="col-first">
              <h1>Añadir Producto</h1>
              <nav className="d-flex align-items-center">
                <a href="index.html">
                  Inicio
                  <span className="lnr lnr-arrow-right" />
                </a>
                <a href="category.html">Iniciar Sesion</a>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Banner Area --> */}

      <section class="checkout_area section_gap">
        <div class="container">
          <div class="billing_details">
            <div class="row">
              <div class="col">
                <h3>Detalles del Producto</h3>
                <form
                  class="row contact_form"
                  action="#"
                  method="post"
                  novalidate="novalidate"
                >
                  <div className="row">
                    <div class="col-md-6 form-group p_star">
                      <input
                        type="text"
                        class="form-control"
                        id="first"
                        name="Nombre Producto"
                      />
                      <span
                        class="placeholder"
                        data-placeholder="Nobre Producto"
                      />
                    </div>
                    <div class="col-md-6 form-group p_star">
                      <input
                        type="text"
                        class="form-control"
                        id="last"
                        name="Marca"
                      />
                      <span class="placeholder" data-placeholder="Marca" />
                    </div>
                    <div class="col-md-6 form-group p_star">
                      <input
                        type="text"
                        class="form-control"
                        id="number"
                        name="Categoria"
                      />
                      <span class="placeholder" data-placeholder="Categoria" />
                    </div>
                    <div class="col-md-6 form-group p_star">
                      <input
                        type="text"
                        class="form-control"
                        id="email"
                        name="Cantidad"
                      />
                      <span class="placeholder" data-placeholder="Cantidad" />
                    </div>
                    <div class="col-md-6 form-group p_star">
                      <input
                        type="text"
                        class="form-control"
                        id="add1"
                        name="Descripcion Corta"
                      />
                      <span
                        class="placeholder"
                        data-placeholder="Descripcion Corta"
                      />
                    </div>
                    <div class="col-md-6 form-group p_star">
                      <input
                        type="text"
                        class="form-control"
                        id="city"
                        name="tamaño"
                      />
                      <span class="placeholder" data-placeholder="Tamaño" />
                    </div>
                    <div class="col-md-6 form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="zip"
                        name="Color"
                        placeholder="Color"
                      />
                    </div>
                    <div class="col-md-6 form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="zip"
                        name="Color"
                        placeholder="Precio"
                      />
                    </div>
                    <div class="col-md-6 form-group">
                      <textarea
                        class="form-control"
                        name="message"
                        id="message"
                        rows="1"
                        placeholder="Descripcion Larga"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    value="submit"
                    className="col-md-4 primary-btn"
                    onClick={addProduct}
                  >
                    Añadir{" "}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateProduct;
