import React from 'react'

const UseCallbackButtons = props => {
    // Mostra no console do navegador:
    console.log('render....')

    return(
        <div>
            <button className="btn"
                onClick={() => props.inc(6)}>+6</button>
            <buitton className="btn"
                onClick={() => props.inc(12)}>12</buitton>
            <button className="btn"
                onClick={() => props.inc(18)}>18</button>
        </div>
    )
}

// export default UseCallbackButtons
export default React.memo(UseCallbackButtons)