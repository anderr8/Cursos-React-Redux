import styles from '../styles/Estiloso.module.css'
import Layout from '../components/Layout'
// import Link from 'next/link'

// export default function Estiloso() {
//     return (
//         <div className={styles.vermelho}>
//             <Link href="/navegandoComponentes">
//                 <h3>Voltar</h3>
//             </Link>
//             <h1>Estilo, usando CSS Modularizado</h1>
//         </div>
//     )
// }

// Exemplo:

export default function Estiloso() {
    return (
        <Layout titulo="Exemplo de CSS Modularizado">
            <div className={styles.vermelho}>
                <h1>Estilo, usando CSS Módulos</h1>
            </div>
        </Layout>
    )
}