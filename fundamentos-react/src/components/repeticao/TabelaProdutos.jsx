import React from 'react'
import Produtos from '../../data/produtos'
import './TabelaProdutos.css'

export default (props) => {

    // Criando uma função
    function getLinhas(){
        return Produtos.map((produto, i) =>{
            return (
                <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}> {/* Condição para fazer uma tabela zebrada/ Comparação estrita === três sinais de igual*/}
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>R${produto.preço.toFixed(2).replace('.', ',')}</td>
                </tr>                
            )
        })
    }
    
    return (
        <div className="TabelaProdutos">
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>  
                    {getLinhas()}
                </tbody>
            </table>
        </div>
    )
}
        
