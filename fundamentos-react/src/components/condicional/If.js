// Renderização Condicional #02
// Renderização Condicional #03

/*
    <If test={expressao}> // Se a Expressão for verdaderia será mostrado o conteúdo a debaixo
    <If test={aluno.nota >= 7}>
        <span>...</span>
        <span>...</span>
        ,span>...</span>
    </If>
*/

export default props => {
    const elseChild = props.children.filter(child =>{
        return child.type && child.type.name === 'Else'
    })[0]

    // Retira o else, pega todos os filhos menos o else:
    const ifChildren = props.children.filter(child =>{
        return child !== elseChild
    })


    //console.log(elseChild)

    if(props.test) {
        return ifChildren 
        // return props.children 
    }else if(elseChild){
        return elseChild 
    }
    else
        return false
}

export const Else = props => props.children
