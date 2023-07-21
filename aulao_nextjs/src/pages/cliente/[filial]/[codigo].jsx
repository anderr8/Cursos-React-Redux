import Layout from '../../../components/Layout'
// import { useEffect } from 'react'
// import router from 'next/router'
import {useRouter} from 'next/router'


export default function ClientePorCodigo() {
    const router = useRouter()

    // useEffect(() => {
    //     console.log(router.query.codigo)
    // }, [])

    return (
        <Layout titulo="Navegação Dinâmica">
            {/* <div>Código = ????</div> */}
            <div>Código = {router.query.codigo}</div>
            <div>Filial = {router.query.filial}</div>
        </Layout>
    )
}