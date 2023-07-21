import './style/style.css'

// Valor Fixo:
export const getStaticProps = () => {
    return {
        props: {
            value: 0.123
        }
    }
}

const Estatica = props => {

    return (
        <div>
            <h1>Conteúdo Estático</h1>
            <h2>Último valor: {props.value}</h2>
        </div>
    )
}

export default Estatica