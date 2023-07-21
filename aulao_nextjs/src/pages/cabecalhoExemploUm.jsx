import CabecalhoUm from '../components/CabecalhoUm'
import Layout from '../components/Layout'

export default function ExemploUm() {
    return (
        <Layout titulo="Usando Componentes">
            <>
                <CabecalhoUm titulo="Next.js & React"/>
                <CabecalhoUm titulo="Aprendendo Next.js na prática" />
            </>
        </Layout>
    )
}