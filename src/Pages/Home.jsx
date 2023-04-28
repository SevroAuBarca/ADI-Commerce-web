import axios from "axios";
import React, { useEffect } from "react";
import useStore from "../state/useStore";
import { shallow } from "zustand/shallow";
import { Link, useNavigate } from "react-router-dom";

const shoes = [
  { pic: "img/product/p1.jpg" },
  { pic: "img/product/p2.jpg" },
  { pic: "img/product/p3.jpg" },
  { pic: "img/product/p4.jpg" },
  { pic: "img/product/p5.jpg" },
  { pic: "img/product/p6.jpg" },
  { pic: "img/product/p7.jpg" },
  { pic: "img/product/p8.jpg" },
];
const Home = () => {
  const navigate = useNavigate();
  const { products, setProducts, setIdProduct } = useStore(
    (state) => ({
      products: state.products,
      setProducts: state.setProducts,
      setIdProduct: state.setIdProduct,
    }),
    shallow
  );

  const getProducts = async () => {
    const { data } = await axios.get("http://localhost:3000/products");
    setProducts(data);
  };

  const getIdProduct = (id) => {
    console.log(id);
    setIdProduct(id);
    navigate("description");
  };

  useEffect(() => {
    getProducts();
    return () => {};
  }, []);

  return (
    <>
      <section className="banner-area">
        <div className="container">
          <div
            className="row fullscreen align-items-center justify-content-start"
            style={{ height: "682px" }}
          >
            <div className="col-lg-12">
              <div className="row  align-items-center d-flex">
                <div className="col-lg-5 col-md-6">
                  <div className="banner-content">
                    <h1>
                      Nueva Coleccion de <br />
                      Nike!
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation.
                    </p>
                    <div className="add-bag d-flex align-items-center">
                      <a className="add-btn" href="">
                        <span className="lnr lnr-cross" />
                      </a>
                      <span className="add-text text-uppercase">
                        Añadir al Carrito
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="banner-img">
                    <img
                      className="img-fluid"
                      src="img/banner/banner-img.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-area section_gap">
        <div className="container">
          <div className="row features-inner">
            {/* <!-- single features --> */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-features">
                <div className="f-icon">
                  <img src="img/features/f-icon1.png" alt="" />
                </div>
                <h6>Envio Gratis </h6>
                <p>¡Envios a todo el pais!</p>
              </div>
            </div>
            {/* <!-- single features --> */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-features">
                <div className="f-icon">
                  <img src="img/features/f-icon2.png" alt="" />
                </div>
                <h6>Politica de Reembolso!</h6>
                <p>¡Te devolvemos tu dinero!</p>
              </div>
            </div>
            {/* <!-- single features --> */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-features">
                <div className="f-icon">
                  <img src="img/features/f-icon3.png" alt="" />
                </div>
                <h6>Soporte 24/7</h6>
                <p>¿Ayuda en todo Momento!</p>
              </div>
            </div>
            {/* <!-- single features --> */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-features">
                <div className="f-icon">
                  <img src="img/features/f-icon4.png" alt="" />
                </div>
                <h6>Pago Seguro</h6>
                <p>¿Sientete Seguro de tu Compra!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- start product Area --> */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="section-title">
              <h1>Ultimos Productos</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {/* <!-- single product --> */}
          {products &&
            products.map((shoe, index) => (
              <div key={`shoe ${index}`} className="col-lg-3 col-md-6">
                <div className="single-product">
                  <img className="img-fluid" src={shoe.pic} alt="" />
                  <div className="product-details">
                    <button
                      onClick={() => getIdProduct(shoe._id)}
                      className="h6"
                    >
                      addidas New Hammer sole for Sports person
                    </button>
                    <div className="price">
                      <h6>MXN150.00</h6>
                      <h6 className="l-through">MXN210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <a href="" className="social-info">
                        <span className="ti-bag" />
                        <p className="hover-text">Añadir al Carrito</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-heart" />
                        <p className="hover-text">Lista de Deseos</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      {/*  */}
      {/* <!-- end product Area --> */}
    </>
  );
};

export default Home;
