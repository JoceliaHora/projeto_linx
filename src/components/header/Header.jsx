import React from 'react'
import Botao from '../botao/Botao'
import styles from './Header.modules.css'


const Header = () => {
  return (
    <header className='cabecalho'>
    <section>
        <div>
            <p>Uma seleção de produtos</p>
            <h1>especial para você</h1>
            <p>todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</p>
        </div>
    </section>
    <nav>
        <ul>
            <li>
                <Botao texto='Conheça a Linx' />
            </li>
            <li> 
                <Botao texto='Ajude o Algotítimo' />
            </li>
            <li>
                <Botao texto='Seus Produtos' />
            </li>
            <li>
                <Botao texto='Compartilhe' />
            </li>
        </ul>
    </nav>
</header>
  )
}

export default Header