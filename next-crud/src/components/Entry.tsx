interface EntryProps {
    whatType?: 'text' | 'number'
    putName: string
    showName: any
    age: string
    showAge: number
    forReading?: boolean
}

export default function Entry(props: EntryProps) {
    return (
        <div className="flex flex-col">
            <label className="mb-4">
                {props.putName}
            </label>
            <input 
                type={props.whatType ?? 'text'}
                value={props.showName}
                readOnly={props.forReading}

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