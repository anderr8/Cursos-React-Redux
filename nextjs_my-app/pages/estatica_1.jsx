import './style/style.css'
import {useEffect, useState} from 'react'


// Buscando o valor que esta na api random
// Valor aleatório:
const Estatica = props => {
    const [value, setValue] = useState(0)

    async function obterValor() {
        const resp = await fetch('http://localhost:3000/api/random')
        const data = await resp.json()
        setValue(data.value)
    }

    useEffect(() => {
        obterValor()
    }, [])

    return (
        <div>
            <h1>Conteúdo Estático</h1>
            <h2>Último valor: {value}</h2>
        </div>
    )
}

export default Estatica