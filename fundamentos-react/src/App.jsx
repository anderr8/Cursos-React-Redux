import './App.css'
import React from "react"


import Mega from "./components/mega/Mega.jsx"
import Counter from "./components/counter/Counter"
import Contador from "./components/contador/Contador"
import Input from "./components/formulario/Input"
import IndiretaPai from "./components/comunicacao/IndiretaPai"
import DiretaPai from "./components/comunicacao/DiretaPai"
import Usuario from "./components/condicional/Usuario"
import ParOuImpar from "./components/condicional/ParOuImpar"
import TabelaProdutos from "./components/repeticao/TabelaProdutos"
import ListaAlunos from "./components/repeticao/ListaAlunos"
import Familia from "./components/basicos/Familia"
import FamiliaMembro from "./components/basicos/FamiliaMembro"
import Card from "./components/layout/Card"
import Primeiro from "./components/basicos/Primeiro"
import ComParamentro from "./components/basicos/ComParametro"
import Fragmento from "./components/basicos/Fragmento"
import NumeroAleatorio from "./components/basicos/DesafioNumeroAleatorio"


// A forma mais reduzida usando o React
/* Propriedades Pode ser usado (props), () ou _ underline simbolizando que estou ignorando as propriedades*/
// Usando o default a function pode ser anônima
// Arrow function => sintaxe reduzida


export default _ =>
    <div className="App">
        <h1>Fundamentos React </h1>
            
        <div className="Cards">
        

        <Card titulo="#14 - Gerador de Números da Mega Sena" color="#F2A71B">
            <Mega qtde={8}></Mega>
        </Card>

        <Card titulo="#13 - Counter" color="#8b0000">
            <Counter numeroInicial={10}></Counter>
        </Card>

        <Card titulo="#12 - Contador" color="#424242">
            <Contador numeroInicial={10}></Contador>
        </Card>

        <Card titulo="#11 - Componente Controlado(Input)" color="#E45F56">
            <Input></Input>
        </Card>

        <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
            <IndiretaPai></IndiretaPai>
        </Card>

        <Card titulo="#09 - Comunicação Direta" color="#59323C">
            <DiretaPai></DiretaPai>
        </Card>

        <Card titulo="#08 - Renderização Condicional #01 #2" color="#f1C40F">
            <ParOuImpar numero={20}></ParOuImpar>
            <Usuario usuario={{ nome: 'Anderson'}}/>
            
            {/*
                Caso não tenha nome, ou nome de usuário:
            */}

            {/* 
            <Usuario usuario={{ email: 'Anderson@.com'}}/>
            <Usuario usuario={{}} />
            <Usuario /> 
            */}
            
        </Card>

        <Card titulo="#07 - Desafio Repetição" color="#5A9At1">
            <TabelaProdutos></TabelaProdutos>
        </Card>

        <Card titulo="#6 - Repetição" color="#FF4C65">
            <ListaAlunos></ListaAlunos>
        </Card>

        <Card titulo="#05 - Componentes com Filhos" color="#00C8F8">
            <Familia sobrenome=" Martinelli" >
            {/*<FamiliaMembro nome="Harodo" sobrenome=" Melo" />
            <FamiliaMembro nome="Márcia" {...props} />
            <FamiliaMembro nome="Fernanda" sobrenome=" Silva" />
            */}
                <FamiliaMembro nome='Haroldo' />
                <FamiliaMembro nome='Márcia' />
                <FamiliaMembro nome='Fernanda' />
        </Familia>
        </Card>

        <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
        <NumeroAleatorio min={1} max={60} />
        </Card>

        <Card titulo="#03 - Fragmento" color="#E94C6F">
            <Fragmento />
        </Card>
        
        <Card titulo="#02 - Com Parâmentro" color="#E8871A">
        <ComParamentro 
            Título="Sittuação do aluno"
            Aluno="Michelle"
            nota={9.7}
        />
        </Card>

        <Card titulo="#01 - Primeiro Componente" color="#588C73">
            <Primeiro></Primeiro>
        </Card>

        </div>

    </div>
 