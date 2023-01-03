import Footer from "./component/footer";
import Home from "./component/home";
import NavBar from "./component/navbar";
import {Routes ,Route} from "react-router-dom"
import Products from "./component/products";

function App() {
 

  return (
    <div className="App">
      <NavBar />
      <Routes >
      <Route path="/" element={<Home />}></Route>
        <Route path="/product/:id" element={<Products />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
