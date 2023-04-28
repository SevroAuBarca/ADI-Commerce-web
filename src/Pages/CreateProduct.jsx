import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CreateProduct = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      brand: "",
      category: "",
      quantity: 0,
      shortDescription: "",
      longDescription: "",
      size: "",
      colors: [""],
      price: 0,
    },
    onSubmit: async (values) => {
      const { data } = await axios.post(
        "http://localhost:3000/products",
        values
      );
      console.log(data);
      if (data) {
        Swal.fire("Exxito!", "El  Producto fue creado con exito!", "success");
        navigate("/");
      }
      if (data.message) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: data.message,
        });
      }
    },
  });
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
                  onSubmit={formik.handleSubmit}
                  method="post"
                  novalidate="novalidate"
                >
                  <div className="row">
                    <div class="col-md-6 form-group p_star">
                      <input
                        type="text"
                        class="form-control"
                        id="first"
                        name="name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        placeholder="Nombre Producto"
                      />
                    </div>
                    <div class="col-md-6 form-group p_star">
                      <input
                        type="text"
                        class="form-control"
                        id="last"
                        name="brand"
                        onChange={formik.handleChange}
                        value={formik.values.brand}
                        placeholder="Marca"
                      />
                    </div>
                    <div class="col-md-6 form-group p_star">
                      <input
                        type="text"
                        class="form-control"
                        id="number"
                        name="category"
                        onChange={formik.handleChange}
                        value={formik.values.category}
                        placeholder="Categoria"
                      />
                    </div>
                    <div class="col-md-6 form-group p_star">
                      <input
                        type="text"
                        class="form-control"
                        id="email"
                        name="quantity"
                        onChange={formik.handleChange}
                        value={formik.values.quantity}
                        placeholder="Cantidad"
                      />
                    </div>
                    <div class="col-md-6 form-group p_star">
                      <input
                        type="text"
                        class="form-control"
                        id="add1"
                        name="shortDescription"
                        onChange={formik.handleChange}
                        value={formik.values.shortDescription}
                        placeholder="Descripcion Corta"
                      />
                    </div>
                    <div class="col-md-6 form-group p_star">
                      <input
                        type="text"
                        class="form-control"
                        id="city"
                        name="size"
                        onChange={formik.handleChange}
                        value={formik.values.size}
                        placeholder="Tamaño"
                      />
                    </div>
                    <div class="col-md-6 form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="zip"
                        name="colors"
                        placeholder="Color"
                        onChange={formik.handleChange}
                        value={formik.values.colors[0]}
                      />
                    </div>
                    <div class="col-md-6 form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="zip"
                        name="price"
                        placeholder="Precio"
                        onChange={formik.handleChange}
                        value={formik.values.price}
                      />
                    </div>
                    <div class="col-md-6 form-group">
                      <textarea
                        class="form-control"
                        name="longDescription"
                        id="message"
                        rows="1"
                        placeholder="Descripcion Larga"
                        onChange={formik.handleChange}
                        value={formik.values.longDescription}
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    value="submit"
                    className="col-md-4 primary-btn"
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
