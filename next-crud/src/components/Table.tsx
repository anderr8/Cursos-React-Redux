import Client from "../core/Client"
import { IconEdit, IconTrash } from "./Icons"

interface TableProps {
    clients: Client[]
    clienteSelecionado?: (client: Client) => void
    clienteExcluido?: (client: Client) => void
}


export default function Table(props: TableProps) {

    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado
    
    function renderizarCabecalho() {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {exibirAcoes ? <th className="p-4">Ações</th> : false}
            </tr>
        )
    }

    function renderizarDados() {
        return props.clients?.map((client, i) => {
            return (
                <tr key={client.id}
                    className={`${i % 2 === 0 ? 'bg-gray-300' : 'bg-gray-200'}`}>
                    <td className="text-left p-4">{client.id}</td>
                    <td className="text-left p-4">{client.name}</td>
                    <td className="text-left p-4">{client.age}</td>
                    {exibirAcoes ? renderizarAcoes(client) : false}                    
                </tr>
            )
        })
    }

    function renderizarAcoes(client: Client) {
        return (
            <td className="flex justify-center">
                {props.clienteSelecionado ? (
                    <button onClick={() => props.clienteSelecionado?.(client)} className={`
                        flex justify-center items-center
                        text-green-600 rounded-full p-2 m-1
                        hover:bg-gray-50
                    `}>
                        {IconEdit}
                    </button>
                ) : false}

                {props.clienteExcluido ? (
                    <button onClick={() => props.clienteExcluido?.(client)}
                    className={`
                        flex justify-center items-center
                        text-red-600 rounded-full p-2 m-1
                        hover:bg-gray-50
                    `}>
                        {IconTrash}
                    </button>
                ) : false}
            </td>
        )
    }
    
    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-red-500 to-red-800
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}