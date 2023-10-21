"use client";

import React, { useState } from "react";
import NavigationPanel from "@/app/components/NavigationPanel";
import { PageType } from "@/app/interfaces";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/app/pages/Home";
import Shop from "@/app/pages/Shop";
import Profile from "@/app/pages/Profile";
import Cart from "@/app/pages/Cart";

const App = () => {
  const [page, setPage] = useState<PageType>("main");
  return (
    <Router>
      <main>
        <div className={"page"}>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/shop"} element={<Shop />} />
            <Route path={"/profile"} element={<Profile />} />
            <Route path={"/cart"} element={<Cart />} />
          </Routes>
        </div>
        <NavigationPanel onChangePage={setPage} page={page} />
      </main>
    </Router>
  );
};

export default App;
