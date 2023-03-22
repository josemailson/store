import Header from "./components/Header";
import GlobalStyle from "./globalStyles";
import { Card } from "./components/Card";
import { getProducts } from "./services/api";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import './styles/App.css'


function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchProducts() {
    try {
      setIsLoading(true);
      const data = await getProducts();
      setProducts(data);
    } catch {
    } finally {
      setIsLoading(false);
    }
  }


  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <GlobalStyle>
        <Header />
        <div className="mainDiv">
          {isLoading ? (
            <ReactLoading type={"bars"} color={"red"} className="loading"/>
          ) : (
            products.map((product, id) => (
              <Card
                title={product.title}
                price={product.price}
                description={product.description}
                key={id}
                image={product.images[0]}
              />
            ))
          )}
        </div>
      </GlobalStyle>
    </>
  );
}

export default App;