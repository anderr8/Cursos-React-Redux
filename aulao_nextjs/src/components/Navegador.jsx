import Link from 'next/link'
import styles from '../styles/Navegador.module.css'

export default function Navegador(props) {
    // return (
    //     <Link href="/estiloso">
    //         Estiloso
    //     </Link>
    // )

    return (
        <Link href={props.destino}>
            {/* Aplicando estilo de forma dinâmica: */}
            <div className={styles.navegador} style={{
                backgroundColor: props.cor ?? 'darkgrey'
            }}>
                {props.texto}
            </div>
        </Link>
    )
}