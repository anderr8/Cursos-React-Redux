import './style/style.css'


// Revalidando a página à cada 10 segundos:
export async function getStaticProps() {
    const resp = await fetch('http:localhost:3000/api/random')
    const data = await resp.json()

    return {
        revalidate: 10, // A cada 10 segundos será 
        props: {
            value: data.value
        }
    }
}

export default function Estatica(props) {
    return (
        <div>
            <h1>Conteúdo Estático</h1>
            <h2>Último valor: {props.value}</h2>
        </div>
    )
}
