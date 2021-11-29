import { Routes, Route } from "react-router-dom";
import Restock from "../molecules/restock/Restock";
import MyBoxes from "../molecules/myboxes/MyBoxes";
import ProductsOverview from "../molecules/overview/ProductsOverview";

function Main({farmerId}) {
  return (
    <div>
      <div className="content">
        <Routes>
          <Route path="/" element={<MyBoxes farmerId={farmerId} />} />
          <Route path="/productsoverview" element={<ProductsOverview farmerId={farmerId}/>} />
          <Route path="/restock" element={<Restock farmerId={farmerId}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default Main;