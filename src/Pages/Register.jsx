import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import Swal from "sweetalert2";

const Register = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      user: "",
      password: "",
    },

    onSubmit: async (values) => {
      const response = await axios.post("http://localhost:3000/register", {
        name: values.name,
        email: values.email,
        user: values.user,
        password: values.password,
      });
      console.log(response);
      if (response.data.token) {
        Swal.fire(
          "Registro completo!",
          "El usuario ha sido registrado con exito!",
          "success"
        );
        navigate("/login");
      }
      if (response.data.message) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: response.data.message,
        });
      }
    },
  });
  return (
    <>
      {/* <!-- Start Banner Area --> */}
      <section className="banner-area organic-breadcrumb">
        <div className="container">
          <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
            <div className="col-first">
              <h1>Registrarse</h1>
              <nav className="d-flex align-items-center">
                <a href="index.html">
                  Inicio
                  <span className="lnr lnr-arrow-right" />
                </a>
                <a href="category.html">Registrarse</a>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Banner Area --> */}

      {/* <!--================Login Box Area =================--> */}
      <section className="login_box_area section_gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="login_box_img">
                <img className="img-fluid" src="img/login.jpg" alt="" />
                <div className="hover">
                  <h4>¿Ya eres usuario?</h4>

                  <Link className="primary-btn" to="login">
                    Iniciar sesion
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="login_form_inner">
                <h3>Registrarse</h3>
                <form
                  onSubmit={formik.handleSubmit}
                  className="row login_form"
                  method="post"
                  id="contactForm"
                  noValidate="novalidate"
                >
                  <div className="col-md-12 form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Nombre"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                      onFocus={(e) => (e.target.placeholder = "")}
                      onBlur={(e) => (e.target.placeholder = "Nombre")}
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="email"
                      placeholder="Email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      onFocus={(e) => (e.target.placeholder = "")}
                      onBlur={(e) => (e.target.placeholder = "Email")}
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="user"
                      placeholder="Usuario"
                      onChange={formik.handleChange}
                      value={formik.values.user}
                      onFocus={(e) => (e.target.placeholder = "")}
                      onBlur={(e) => (e.target.placeholder = "Usuario")}
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="password"
                      placeholder="Contraseña"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      onFocus={(e) => (e.target.placeholder = "")}
                      onBlur={(e) => (e.target.placeholder = "Contraseña")}
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <button
                      type="submit"
                      value="submit"
                      className="primary-btn"
                    >
                      Registrarse{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--================End Login Box Area =================--> */}
    </>
  );
};

export default Register;
