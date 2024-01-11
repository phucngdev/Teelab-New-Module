import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/user/home/Home.jsx";
import Service from "./pages/user/page/Service.jsx";
import Shop_system from "./pages/user/page/Shop_system.jsx";
import Table_size from "./pages/user/page/Table_size.jsx";
import Check_order from "./pages/user/page/Check_order.jsx";
import ListProduct from "./pages/user/product/List_product.jsx";
import Ao_thun from "./pages/user/product/ao_thun.jsx";
import Baby_tee from "./pages/user/product/baby_tee.jsx";
import Ao_polo from "./pages/user/product/ao_polo.jsx";
import Item from "./components/item.jsx";
import HomeAdmin from "./pages/private/pageAdmin/home.jsx";
// admin remove
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
        <Route path="/baby-tee" element={<Baby_tee />}></Route>
        <Route path="/ao-polo" element={<Ao_polo />}></Route>
        <Route path="/kiem-tra-don-hang" element={<Check_order />}></Route>
        <Route path="/admin" element={<HomeAdmin />}></Route>
        <Route path="/:id" element={<Item />}></Route>
      </Routes>
    </div>
  );
}

export default App;
