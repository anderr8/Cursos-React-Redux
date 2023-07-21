interface ButtonProps {
    color?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
}

export default function Button(props: ButtonProps) {
    // Não funcionou usando um acor padrão e nem as 3 colores
    const color = props.color ?? 'gray'
    console.log(color)
    return (
        <button className={`
            bg-gradient-to-r from-blue-400 to-blue-700
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}