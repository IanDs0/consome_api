import React, {useState, useEffect} from 'react';
import api from './api';
import copy from 'copy-to-clipboard';

const Home = () => {

    const [produto,setProduto] = useState();
    const [message, setMessage] = useState('');
    const [Procura, setProcura] = useState('');

    let Username = ''
    let Password = ''

    async function getProdutos (event){

        event.preventDefault();

        const datat = await api.get(Procura,{
        auth : {
            username: Username,
            password: Password
        }
        }
        );

        setProduto(datat.data.product);
    }

    function copyUrl(url) {
        console.log(url)
    }

    const Offer = (Offer) => {

        return (

        <div id = "Offer">

            <h6>{Offer.name}</h6>
            
            <img src={Offer.imageURL}/>
            
            <div class = "loja">
            <h6>{Offer.storeName}</h6>
            <img src={Offer.storeLogoURL}/>
            </div>

            <button onClick={() => {
            copy(Offer.url)
            alert("A URL foi copiada");
            }}>Copiar Url</button>


        </div>

        )

    }


    const Produto = (Produtos) => {

        return (

        <div id = "Produtos">

            {Produtos.offer.map(
            (Produtos)=> Offer(Produtos)
            )}

        </div>

        )

    }

    const handleChange = event => {
        setMessage(event.target.value);
        setProcura(event.target.value.replace(/ /g, '+'))
    };

    return (
    <>
    
        <h1>Get de API</h1>

        <form onSubmit={getProdutos} >

            <label>

            <input type="text" onChange={handleChange} value={message}/>
            </label>
            {/* <button onClick={getProdutos}>Busca</button> */}
            <input type="submit" />
        </form>
        {produto?.map(
          (Produtos)=> Produto(Produtos)
        )}

    </>
    )
}

export default Home;