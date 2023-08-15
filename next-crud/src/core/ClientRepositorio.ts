import Client from "./Client";


export default interface ClientRepositorio {
    salvar(client: Client): Promise<Client>
    excluir(client: Client): Promise<void>
    obterTodos(): Promise<Client[]>
}