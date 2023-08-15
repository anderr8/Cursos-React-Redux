import {useState} from 'react'
import Layout from '../components/Layout';
import Client from '../core/Client';
import Table from './../components/Table';
import Button from '../components/ButtonNewCustomer'
import Fill from '../components/Fill';
// import ColecaoClient from './../backend/db/ColecaoClient';




export default function Home() {
    
    const clientes = [
        new Cliente('Gigi', 27, '4'),
        new Cliente('Anderson', 44, '1' ),
        new Cliente('Jéssica', 34, '2'),
        new Cliente('Fernanda', 42, '3')
    ]

    // useEffect(() => {
    //     reportError.obterTodos().then(setClients)
    function obterTodos() {
        reportError.obterTodos().then(clients => {
            setClients(clients)
            setVisible('table')
        })
    }
    // }, [])



    function clienteSelecionado(client: Client) {
        //console.log(client.name)
        setClient(client)
        setVisible('form')
    }

    async function clienteExcluido(client: Client) {
        // console.log(`Excluir... ${client.name}`)
        await reportError.excluir(client)
        obterTodos()
    }

    function newClient() {
        setClient(Client.vazio())
        setVisible('form')
    }

    async function saveClient(client: Client){
        // console.log(client)
        await reportError.save(client)
        obterTodos()
        // setVisible('table')
    }


    return (
        <div className={`
            flex justify-center items-center h-screen
            bg-gradient-to-r from-blue-500 to-red-700
        `}>
            <Layout titulo="Cadastro Simples">
                {visible === 'table' ? (
                    <>
                        <div className="flex justify-end">
                        <Button colors="blue" className="mb-4" onClick={newClient}>
                            Novo Cliente
                        </Button>
                        </div>

                        <Table clients={clients} 
                            clienteSelecionado={clienteSelecionado}
                            clienteExcluido={clienteExcluido}
                        />           
                    </>

                    ) : (
                        <Fill client={client} customerChanged={saveClient} canceled={() => setVisible('table')}/>
                    )}
            </Layout>
        </div>
    )
}
