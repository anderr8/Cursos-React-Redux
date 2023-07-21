// Usando chaves {} é possivel acessar o mundo javascript 
import Layout from '../components/Layout'


export default function Jsx() {    
    const a = 4
    const b = 3
    console.log(a * b)


    const titulo = <h1>JSX é um conceito Central</h1>

    function subtitulo() {
        return <h2>{"muito legal!!!".toUpperCase()}</h2>
    }

    return (
        <Layout titulo="Entendendo o JSX">
            <div>
                {titulo}
                {subtitulo()}
                <p>
                    {JSON.stringify({nome: 'Cláudia', idade:30 })}
                </p>
                {a * b}
            </div>
        </Layout>
    )
}