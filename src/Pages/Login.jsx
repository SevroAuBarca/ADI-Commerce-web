import React from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../state/useStore";
import { shallow } from "zustand/shallow";
import { useFormik } from "formik";
import axios from "axios";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const { setUser, setToken } = useStore(
    (state) => ({ setUser: state.setUser, setToken: state.setToken }),
    shallow
  );
  const formik = useFormik({
    initialValues: {
      email: "",
      pass: "",
    },
    onSubmit: async (values) => {
      const { data } = await axios.post("http://localhost:3000/login", values);
      console.log(data);
      if (data.token) {
        setToken(data.token);
        setUser(data.user);
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

  return (
    <>
      {/* <!-- Start Banner Area --> */}
      <section className="banner-area organic-breadcrumb">
        <div className="container">
          <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
            <div className="col-first">
              <h1>Iniciar Sesion</h1>
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

      {/* <!--================Login Box Area =================--> */}
      <section className="login_box_area section_gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="login_box_img">
                <img className="img-fluid" src="img/login.jpg" alt="" />
                <div className="hover">
                  <h4>¿Eres un nuevo usuario?</h4>

                  <a className="primary-btn" href="registration.html">
                    Crear cuenta
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="login_form_inner">
                <h3>Inicia Sesion</h3>
                <form
                  className="row login_form"
                  method="post"
                  id="contactForm"
                  noValidate="novalidate"
                  onSubmit={formik.handleSubmit}
                >
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
                      name="pass"
                      placeholder="Contraseña"
                      onChange={formik.handleChange}
                      value={formik.values.pass}
                      onFocus={(e) => (e.target.placeholder = "")}
                      onBlur={(e) => (e.target.placeholder = "Contraseña")}
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <div className="creat_account">
                      <input type="checkbox" id="f-option2" name="selector" />
                      <label for="f-option2">Manten mi sesion iniciada</label>
                    </div>
                  </div>
                  <div className="col-md-12 form-group">
                    <button
                      type="submit"
                      value="submit"
                      className="primary-btn"
                    >
                      Iniciar sesion
                    </button>
                    <a href="">¿Olvidaste tu contraseña?</a>
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

export default Login;
