// import firebase from '../config'
// import Client from '@/src/core/Client';
// import ClientRepositorio from './../../core/ClientRepositorio';

// export default class ColecaoClient implements ClientRepositorio {

//     private conversor = {
//         toFirestore(client: Client) {
//             return {
//                 name: client.name,
//                 age: client.age,
//             }
//         },
//         fromFirestore(snapshot: firebase.firestore.QueryDocumentShapshot, options: firebase.firestore.SnapshotOptions) : Client {
//             const dados = snapshot.data(options)
//             return new Client(dados.name, dados.age, snapshot.id)
//         }
//     }

//     async salvar(client: Client): Promise<Client> {
//         if(client?.id) {
//             await this.colecao().doc(client.id).set(client)
//             return client
//         } else {
//             const docRef = await this.colecao().add(client)
//             const doc await docRef.get()
//             return doc.data()
//         }
//         return null
//     }

//     async excluir(client: Client): Promise<void> {
//         return this.colecao().doc(client.id).delete
//     }

//     async obterTodos(): Promise<Client[]> {
//         const query = await this.colecao().get()
//         return query.docs.map(doc => doc.data()) ?? []
//     }

//     private colecao() {
//         return firebase
//         .firestore().collection('clients')
//         .withConverter(this.#convesor)
//     }
// }