import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Blog from "./Blog";
import NotFound from "./NotFound";
import Dashboard from "./Admin/Dashboard";
import Category from "./Admin/Category";
import Product from "./Admin/SubCategory";
import Billing from "./Admin/QA";
import Adminpanel from "../Components/Adminpanel"

const App = () => {
  return (
    <Routes>

      <Route path="/adminpanel">
        <Route index element={<Adminpanel />} />
      </Route>

      <Route path="/admin">
        <Route index element={<Dashboard />} />
        <Route path="category" element={<Category />} />
        <Route path="product" element={<Product />} />
        <Route path="login" element={<Adminpanel />} />
        <Route path="billing" element={<Billing />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route path="/">
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
