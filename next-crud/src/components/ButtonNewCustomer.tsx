interface ButtonProps {
    colors?: 'green' | 'blue' | 'gray'
    className?: string
    children:any
    onClick?: () => void
}

export default function Button(props: ButtonProps) {
    // Não funcionou usando um acor padrão e nem as 3 colores
    const color = props.color ?? 'gray'
    console.log(color)
    return (
        <button onClick={props.onClick} 
            className={`
                bg-gradient-to-r from-${colors}-400 to-${colors}-700
                text-white px-4 py-2 rounded-md
                ${props.className}
            `}>
            {props.children}
        </button>
    )
}
