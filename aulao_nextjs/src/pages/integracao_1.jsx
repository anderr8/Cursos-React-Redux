import { useState } from 'react'
import Layout from '../components/Layout'

export default function Integração() {

    const [codigo, setCodigo] = useState(1)
    const [cliente, setCliente] = useState({})

    // fetch('http://localhost:3000/api/clientes/123')
    //     .then(resp => resp.json())
    //     .then(dados => setCliente(dados))
    
    // function obterCliente() {
    //     fetch(`http://localhost:3000/api/clientes/${codigo}`)
    //         .then(resp => resp.json())
    //         .then(dados => setCliente(dados))
    // }

    // Forma original:
    
    async function obterCliente() {
        const resp = await fetch(`http://localhost:3000/api/clientes/${codigo}`)
        const dados = await resp.json()
        setCliente(dados)
    }


    return (
        <Layout>
            {/* Integrando um valor específico ao input: */}
                <div>
                    <input type="number" value={codigo}
                        onChange={e => setCodigo(e.target.value)}/>
                    <button onClick={obterCliente}>Obter Cliente</button>
                </div>
            <ul>
                <li>Código: {cliente.id}</li>
                <li>Nome: {cliente.nome}</li>
                <li>Email: {cliente.email}</li>
            </ul>
        </Layout>
    )
}