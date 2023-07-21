import Layout from '../components/Layout'

export async function getStaticProps() {
    return {
        revalidate: 10,
        props: {
            number: Math.random()
        }
    }
}

export default function Estatico(props) {
    return (
        <Layout titulo="Conteúdo Estático">
            <div>{props.number}</div>
        </Layout>
    )
}