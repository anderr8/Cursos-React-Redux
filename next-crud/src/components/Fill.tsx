import Entry from "./Entry";


interface FillProps {

}

export default function Fill(props: FillProps) {
    return (
        <div>
            <Entry putName="Nome" showName="Nome" />
            <Entry age="Idade" showAge="33" />
        </div>
    )
}