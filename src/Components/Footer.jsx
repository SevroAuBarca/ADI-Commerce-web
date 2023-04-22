import React from "react";

const Footer = () => {
  return (
    <footer className="footer-area section_gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h6>Sobre Nosotros</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore dolore magna aliqua.
              </p>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h6>Siguenos</h6>

              <div className="footer-social d-flex align-items-center">
                {/* rome-ignore lint/a11y/useValidAnchor: <explanation> */}
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
                {/* rome-ignore lint/a11y/useValidAnchor: <explanation> */}
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
                {/* rome-ignore lint/a11y/useValidAnchor: <explanation> */}
                <a href="#">
                  <i className="fa fa-dribbble" />
                </a>
                {/* rome-ignore lint/a11y/useValidAnchor: <explanation> */}
                <a href="#">
                  <i className="fa fa-behance" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom d-flex justify-content-center align-items-center flex-wrap">
          <p className="footer-text m-0">
            Copyright &copy;
            <script>document.write(new Date().getFullYear());</script> Todos los
            Derechos Reservados{" "}
            <i className="fa fa-heart-o" aria-hidden="true" /> por{" "}
            <a href="https://colorlib.com" target="_blank" rel="noreferrer">
              ADI Commerce Web
            </a>
            {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
