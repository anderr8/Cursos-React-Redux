// Renderização Condicional #02

import React from 'react'
import If, {Else} from './If'

export default props => {
   
{/*     
        return (
            <div>
                Seja bem vindo <strong>{props.usuario.nome}</strong>!
            </div>
        )
        
*/}

    // Caso não tenha sido passado nada, colocando um valor padrão:

    const usuario = props.usuario || {}
    return (
        <div>
            <If test={usuario && usuario.nome}>
                Seja bem vindo <strong>{usuario.nome}</strong>!
            </If> 
            <br />
            
            {/* Caso não tenha nome, ou nome de usuário: */}
            {/*              
            <If test={!usuario || !usuario.nome}>
                    Seja bem vindo <strong>"Quebra Tudo Tricolor !!!"</strong>
            </If>  
            */}
 
            <If test={usuario && usuario.nome}>
                Seja bem vinda <strong>Ninina Gostosa</strong>!!!
                <Else>
                    <strong>Seja bem vindo!</strong>
                </Else>

            </If>
         

        </div>
    )

}