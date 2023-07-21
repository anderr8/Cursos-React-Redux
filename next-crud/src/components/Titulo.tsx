interface TituloProps {
    children: string
}

export default function Titulo(props: TituloProps) {
    return (
        <div className="flex flex-col justify-center">
            <h1 className="pl-5 py-2 text-2xl">
                {props.children}
            </h1>

            {/* Para pular um alinha: <hr />*/}
            <hr className="border-2 border-red-500"/>
        </div>
    )
}