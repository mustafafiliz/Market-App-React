import Basket from "../components/basket/Basket";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import ProductList from "../components/products/ProductList";
import Sidebar from "../components/sidebar/Sidebar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <Sidebar />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <ProductList />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <Basket />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
