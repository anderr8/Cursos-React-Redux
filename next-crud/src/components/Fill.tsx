import { useState } from "react";
import Entry from "./Entry";
import Client from './../core/Client';
import Button from '../components/ButtonNewCustomer'


interface FillProps {
    client: Client
    customerChanged?: (client: Client) => void
    canceled?: () => void
}

export default function Fill(props: FillProps) {
    const id = props.client?.id
    const [name, setName] = useState(props.client?.name ?? '')
    const [age, setAge] = useState(props.client?.age ?? 0)

    return (
        <div>
            {id ? (
                <Entry forReading wording="Código" show={id} className="m-2" />
            ): false}

            <Entry wording="Nome"  show={name} changed={setName} className="m-2" />

            <Entry wording="Idade" whatType="number" show={age} changed={setAge} className="m-2" />

            <div className="flex justify-end mt-7" >
                <Button colors="blue" className="mr-2" onClick={() => props.customerChanged?.(new Client(name, +age, id))} >
                    {id ? 'Alterar' : 'Salvar'}
                </Button>

                <Button onClick={props.canceled} >
                    Cancelar
                </Button>
            </div>
        </div>
    )
}