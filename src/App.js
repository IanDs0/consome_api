import React, {useState} from 'react';
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
  const escrevendo = (tex) =>{
    if (tex!=null){
      setTexto(texto+tex)
    }else if(tex==null){
      setTexto(texto.substring(0))
    }
  }

  const proc = () =>{
    const newProduto = produto.filter(produtos => produtos.id==texto);
    
    setProduto (newProduto);
  }

  const [texto,setTexto] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <labels>
            <input type="text"
              onChangeCapture={(onChange) => escrevendo(onChange.nativeEvent.data)}
              placeholder="Digite o id do que procurar"
            />
          </labels>
          <button onClick={proc}>Procurar</button>
        </div>
        {produto.map(
          (produtos) => Produtos(produtos)       
        )}
      </header>
    </div>
  );
}

export default App;
