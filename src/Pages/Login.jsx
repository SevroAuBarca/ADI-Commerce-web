import React from "react";

const Login = () => {
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
                >
                  <div className="col-md-12 form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Usuario"
                      onFocus={(e) => (e.target.placeholder = "")}
                      onBlur={(e) => (e.target.placeholder = "Usuario")}
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Contraseña"
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
