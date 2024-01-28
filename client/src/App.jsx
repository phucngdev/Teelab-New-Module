import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/user/page/Home.jsx";
import Service from "./pages/user/page/Service.jsx";
import Shop_system from "./pages/user/page/Shop_system.jsx";
import Table_size from "./pages/user/page/Table_size.jsx";
import Check_order from "./pages/user/page/Check_order.jsx";
import ListProduct from "./pages/user/product/List_product.jsx";
import Ao_thun from "./pages/user/product/ao_thun.jsx";
import Item from "./pages/user/page/item.jsx";
import HomeAdmin from "./pages/private/page/home.jsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Pay from "./pages/user/page/Pay.jsx";
import Cart from "./pages/user/page/Cart.jsx";
import ProductsAdmin from "./pages/private/page/products.jsx";
import Check from "./pages/user/page/Check.jsx";
import NotFound from "./pages/user/page/NotFound.jsx";
import Login from "./pages/private/page/Login.jsx";
import ManagerAcc from "./pages/private/page/ManagerAcc.jsx";
import PublicCart from "./routes/PublicCart";
import Public from "./routes/Public.jsx";
import Private from "./routes/Private";
import NotFoundAdmin from "./pages/private/page/NotFound";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Public />}>
          <Route index element={<Home />}></Route>
          <Route path="chinh-sach-doi-tra" element={<Service />}></Route>
          <Route path="bang-size" element={<Table_size />}></Route>
          <Route path="he-thong-cua-hang" element={<Shop_system />}></Route>
          <Route path="tat-ca-san-pham" element={<ListProduct />}></Route>
          <Route path="ao-thun" element={<Ao_thun />}></Route>
          <Route path="kiem-tra-don-hang" element={<Check_order />}></Route>
          <Route path="chi-tiet-san-pham/:id" element={<Item />}></Route>
          <Route path="kiem-tra-don-hang/:id" element={<Check />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/gio-hang" element={<PublicCart />}>
          <Route index element={<Cart />}></Route>
          <Route path="thanh-toan" element={<Pay />}></Route>
        </Route>
        <Route path="/dang-nhap" element={<Login />}></Route>
        <Route path="/admin" element={<Private />}>
          <Route index element={<HomeAdmin />}></Route>
          <Route path="danh-sach-san-pham" element={<ProductsAdmin />}></Route>
          <Route path="danh-sach-nhan-su" element={<ManagerAcc />}></Route>
          <Route path="*" element={<NotFoundAdmin />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
