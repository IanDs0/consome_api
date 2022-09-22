import React, {useState, useEffects} from 'react';
import './App.css';
import api from './api';
import Produtos from './produtos';
function App() {
  
  const [produto,setProduto] = useState([]);
  const [procura,setProcura] = useState(false);

  const getProdutos = async () => {

    const datat = await api.get('');

    setProduto(datat.data);

    setProcura(true);
  }

  if (procura === false){
    getProdutos()
  }

  const [texto,setTexto] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <labels>
            <input type="text"
              onChangeCapture={() => setTexto()}
              placeholder="Digite o que seseja procurar"
            />
          </labels>
          <button onClick={console.log(texto)}>Procurar</button>
        </div>
        {produto.map(
          (produtos) => Produtos(produtos)       
        )}
      </header>
    </div>
  );
}

export default App;
