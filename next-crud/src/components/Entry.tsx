interface EntryProps {
    whatType?: 'text' | 'number'
    show: any
    wording: string
    forReading?: boolean
    className?: string
    changed?: (show: any) => void
}

export default function Entry(props: EntryProps) {
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-4">
                {props.wording}
            </label>
            <input 
                type={props.whatType ?? 'text'}
                value={props.show}
                readOnly={props.forReading}
                onChange={e => props.changed?.(e.target.value)}

                className={`
                    border border-red-500 rounded-lg
                    focus: outline-none bg-gray-100
                    px-4 py-2
                    ${props.forReading ? '' : 'focus:bg-white'}
                `}
            />
        </div>
    )
}