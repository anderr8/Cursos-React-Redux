import Layout from '../components/Layout';
import Cliente from '../core/Client';
import Table from './../components/Table';
import Button from '../components/ButtonNewCustomer'
import Fill from '../components/Fill';




export default function Home() {
    
    const clientes = [
        new Cliente('Gigi', 27, '4'),
        new Cliente('Anderson', 44, '1' ),
        new Cliente('Jéssica', 34, '2'),
        new Cliente('Fernanda', 42, '3')
    ]


    function clienteSelecionado(cliente: Cliente) {
        console.log(cliente.name)
    }

    function clienteExcluido(cliente: Cliente) {
        console.log(`Excluir... ${cliente.name}`)
    }

    return (
        <div className={`
            flex justify-center items-center h-screen
            bg-gradient-to-r from-blue-500 to-red-700
        `}>
            <Layout titulo="Cadastro Simples">
                <div className="flex justify-end">
                <Button color='green' className="mb-4">Novo Cliente</Button>
                </div>
                <Table clientes={clientes} 
                    clienteSelecionado={clienteSelecionado}
                    clienteExcluido={clienteExcluido}
                />

                <Fill />
            </Layout>
        </div>
    )
}