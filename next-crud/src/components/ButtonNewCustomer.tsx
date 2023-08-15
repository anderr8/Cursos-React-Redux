interface ButtonProps {
    colors?: 'green' | 'blue' | 'gray'
    className?: string
    children:any
    onClick?: () => void
}

export default function Button(props: ButtonProps) {
    const colors = props.colors ?? 'gray'
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