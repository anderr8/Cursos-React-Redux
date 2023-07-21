export default function CabecalhoUm(props) {
    // props = propriedades é somente leitura:
    console.log(props.titulo)

    return (
        <header>
            <h1>{props.titulo}</h1>
        </header>
    )
}