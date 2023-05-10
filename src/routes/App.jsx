import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from '@components/Layout';
import Home from '@containers/Home';
import Checkout from '@containers/Checkout';
import Payment from '@containers/Payment';
import Success from '@containers/Success';
import Information from '@containers/Information';
import NotFound from '@containers/NotFound';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import '@styles/App.css';

const App = () => {
  const initialState = useInitialState();
  return (
    <div>
      <AppContext.Provider value={initialState}>
        <HashRouter>
          <Layout>
            <Routes>
              <Route exact path="/checkout" element={<Checkout />} />
              <Route
                exact
                path="/checkout/information"
                element={<Information />}
              />
              <Route exact path="/checkout/payment" element={<Payment />} />
              <Route exact path="/checkout/success" element={<Success />} />
              <Route path="/" element={<Home />} />
              <Route element={<NotFound />} />
            </Routes>
          </Layout>
        </HashRouter>
      </AppContext.Provider>
    </div>
  );
};

export default App;
