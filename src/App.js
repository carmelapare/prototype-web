import React from 'react'
import { unstable_HistoryRouter as HistoryRouter, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';
import Report from './modules/Report'
import Home from './modules/Home'

import initFontAwesome from "./utils/fontAwesome";
initFontAwesome();

export default function App() {
  const history = createBrowserHistory();

  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="Report" element={<Report />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
  </HistoryRouter>    
  );
}