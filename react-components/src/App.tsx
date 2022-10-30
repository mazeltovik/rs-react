import React, { useState } from 'react';
import HomePage from './routes/homePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './routes/aboutPage';
import DeliveryPage from './routes/deliveryPage';
import ErrorPage from './routes/errorPage';
import { GlobalContext } from './components/globalState';
type Card<T, N> = {
  [key: string]: T | N;
};
type ReqData = Card<string, number>[];

function App() {
  const [modalCtxData, setModalCtxData] = useState<ReqData>([]);
  const [page, setPage] = useState('1');
  return (
    <GlobalContext.Provider
      value={{
        modalCtxData,
        setModalCtxData,
        page,
        setPage,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="aboutUs" element={<About />} />
          <Route path="delivery" element={<DeliveryPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;
