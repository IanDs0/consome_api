import React, {useState, useEffects} from 'react';

const produtos = ( produtos ) => {

    return (
        <div id = {produtos.id} 
            border = {'solid'} 
            margin = {"10%"}
            >
            <img src={produtos.image} 
                width = {"50%"}
            /> 
            <h1>{produtos.title}</h1>
            <h4>{produtos.category}</h4>
            <h6>{produtos.rating.count}</h6>
            <h3>{produtos.price}</h3>
            <h6>{produtos.description}</h6>
            <p>{produtos.rating.rate}</p>
            
        </div>
    )

}

export default produtos;