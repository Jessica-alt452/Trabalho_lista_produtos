import React from 'react';
import './App.css';

const beautyProducts = [
  {
    id: 1,
    title: "Hidratante Facial",
    price: "R$ 80,00",
    image: "https://epocacosmeticos.vteximg.com.br/arquivos/ids/618857-450-450/192333066911_p.jpg?v=638573293868000000",
    
  },
  {
    id: 2,
    title: "Máscara de Cílios",
    price: "R$ 50,00",
    image: "https://http2.mlstatic.com/D_NQ_NP_853926-MLB73347987206_122023-O.webp",
    
  },
  {
    id: 3,
    title: "Batom Matte",
    price: "R$ 40,00",
    image: "https://epocacosmeticos.vteximg.com.br/arquivos/ids/607549-450-450/3614273962117.01.jpg?v=638635846004400000",
    
  }
];

function App() {
  return (
    <div className="App">
      <h1>Lista de Produtos de Beleza</h1>
      <div className="product-list">
        {beautyProducts.map(product => (
          <div key={product.id} className="product">
            <a href={product.link} target="_blank" rel="noopener noreferrer">
              <img src={product.image} alt={product.title} />
              <h2>{product.title}</h2>
              <p>{product.price}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
