//import Link from 'next/link'
import styles from '../styles/Navegando.module.css'
import Navegador from '../components/navegador'


export default function Inicio() {
    // return (
    //     <div className={styles.branca}>
    //         <Link href="/estiloso">Estiloso</Link>
    //     </div>
    // )


    return (
        // Colocando estilo interno:
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // Quebra linha flexWrap:
            flexWrap: 'wrap',
            height:'100vh',
        }}>
            <Navegador texto="ESTILOSO" destino="/estiloso" cor="darkgrey"/>
            <Navegador texto="CABEÇALHO EXEMPLO UM" destino="/cabecalhoExemploUm" cor="#ece906"/>
            <Navegador texto="JSX" destino="/jsx" cor="#e01111"/>
            <Navegador texto="Navegação #01" destino="/navegacao" cor="green"/>
            <Navegador texto="Navegação #02" destino="/cliente/SP-2/123" cor="blue"/>
            <Navegador texto="Componente com Estado" destino="/estado" cor="brown"/>
            <Navegador texto="Integração com API #01" destino="/integracao_1" cor="orange"/>
            <Navegador texto="Conteúdo Estático" destino="/estatico" cor="#fd7e14"/>
        </div>

    )
}