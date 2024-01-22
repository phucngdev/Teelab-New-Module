import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/user/home/Home.jsx";
import Service from "./pages/user/page/Service.jsx";
import Shop_system from "./pages/user/page/Shop_system.jsx";
import Table_size from "./pages/user/page/Table_size.jsx";
import Check_order from "./pages/user/page/Check_order.jsx";
import ListProduct from "./pages/user/product/List_product.jsx";
import Ao_thun from "./pages/user/product/ao_thun.jsx";
import Item from "./components/item.jsx";
import HomeAdmin from "./pages/private/home.jsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Pay from "./pages/user/page/Pay.jsx";
import Cart from "./pages/user/page/Cart.jsx";
import ProductsAdmin from "./pages/private/products.jsx";
import Check from "./pages/user/page/Check.jsx";
import NotFound from "./pages/user/page/NotFound.jsx";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/chinh-sach-doi-tra" element={<Service />}></Route>
        <Route path="/bang-size" element={<Table_size />}></Route>
        <Route path="/he-thong-cua-hang" element={<Shop_system />}></Route>
        <Route path="/tat-ca-san-pham" element={<ListProduct />}></Route>
        <Route path="/ao-thun" element={<Ao_thun />}></Route>
        <Route path="/kiem-tra-don-hang" element={<Check_order />}></Route>
        <Route path="/gio-hang" element={<Cart />}></Route>
        <Route path="/thanh-toan" element={<Pay />}></Route>
        <Route path="/chi-tiet-san-pham/:id" element={<Item />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/kiem-tra-don-hang/:id" element={<Check />}></Route>
        <Route path="/admin/tong-quan" element={<HomeAdmin />}></Route>
        <Route
          path="/admin/san-pham/tat-ca-san-pham"
          element={<ProductsAdmin />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
