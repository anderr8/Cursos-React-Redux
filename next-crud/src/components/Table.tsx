import Cliente from "../core/Client"
import { IconEdit, IconTrash } from "./Icons"

interface TableProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
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
        return props.clientes?.map((cliente,i) => {
            return (
                <tr key={cliente.id}
                    className={`${i % 2 === 0 ? 'bg-gray-300' : 'bg-gray-200'}`}>
                    <td className="text-left p-4">{cliente.id}</td>
                    <td className="text-left p-4">{cliente.name}</td>
                    <td className="text-left p-4">{cliente.age}</td>
                    {exibirAcoes ? renderizarAcoes(cliente) : false}                    
                </tr>
            )
        })
    }

    function renderizarAcoes(cliente: Cliente) {
        return (
            <td className="flex justify-center">
                {props.clienteSelecionado ? (
                <button onClick={() => props.clienteSelecionado?.(cliente)} className={`
                    flex justify-center items-center
                    text-green-600 rounded-full p-2 m-1
                    hover:bg-gray-50
                `}>
                    {IconEdit}
                </button>
                ) : false}

                {props.clienteExcluido ? (
                <button onClick={() => props.clienteExcluido?.(cliente)} className={`
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