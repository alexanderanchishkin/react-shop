"use client";

import React, { useState } from "react";
import NavigationPanel from "@/app/components/NavigationPanel";
import { PageType } from "@/app/interfaces";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "@/app/pages/Main";
import Shop from "@/app/pages/Shop";
import Profile from "@/app/pages/Profile";
import Cart from '@/app/pages/Cart'

const App = () => {
  const [page, setPage] = useState<PageType>("main");
  return (
    <Router>
      <main>
        <Routes>
          <Route path={"/"} element={<Main />} />
          <Route path={"/shop"} element={<Shop />} />
          <Route path={"/profile"} element={<Profile />} />
          <Route path={"/cart"} element={<Cart />} />
        </Routes>
        <NavigationPanel onChangePage={setPage} page={page} />
      </main>
    </Router>
  );
};

export default App;
