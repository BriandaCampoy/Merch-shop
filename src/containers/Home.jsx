import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
// import '@styles/Home.css'
import Products from '../components/Products';

const Home = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Merch - shop</title>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@Rakka_21" />
          <meta name="twitter:creator" content="@Rakka_21" />
          <meta name="twitter:title" content="Merch-shop" />
          <meta name="twitter:description" content="Merch - shop" />
          <meta
            name="twitter:image"
            content="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1683772140/samples/Dise%C3%B1o_sin_t%C3%ADtulo_skwgwu.png"
          />
          <meta property="og:title" content="Merch-shop" />
          <meta property="og:description" content="Merch-shop" />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1683772140/samples/Dise%C3%B1o_sin_t%C3%ADtulo_skwgwu.png"
          />
          <meta property="og:url" content="Merch-shop.xyz" />
          <meta property="og:site_name" content="Merch-shop" />
          <meta property="og:locale" content="es_ES" />
          <meta property="og:type" content="article" />
          <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
        </Helmet>
      </HelmetProvider>
      <Products />
    </>
  );
};

export default Home;
