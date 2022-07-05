import "./scss/card.scss";

const Card = () => {
  return (
    <section className="container">
      <picture>
        <source 
          media="(min-width: 768px)"
          srcSet="../../src/images/image-product-desktop.jpg"
          className="pictureDesktop"
        />
        <img
          src="../../src/images/image-product-mobile.jpg"
          alt="product"
          className="pictureMobile"
        />
      </picture>
      <article className="article-container">
        <div className="article">
          <h1>Perfume</h1>
          <h2>Gabrielle Essence Eau De Parfum</h2>
          <p>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="container-prices">
            <div className="final-price">$149.99</div>
            <div className="price-throughline">$169.99</div>
          </div>
          <button className="card-button"> <span><img className="cart" src="../../src/images/icon-cart.svg" alt="cart"/></span> Add to Cart</button>
        </div>
      </article>
    </section>
  );
};

export { Card };
