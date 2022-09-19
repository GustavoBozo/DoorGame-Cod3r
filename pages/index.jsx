import Link from 'next/link';
import Cartao from '../components/Cartao';
import EntradaNumerica from '../components/EntradaNumerica'
import styles from '../styles/Form.module.css'
import { useState } from 'react';


export default function Form() {
  const [qtdePortas, setQtdePortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)

  
  return (
    <div className={styles.form}>
      <div>
        <Cartao bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica text="Qtde Portas?" value={qtdePortas} onChange={novaQtde => setQtdePortas(novaQtde)}/>
        </Cartao>
      </div>
      <div>
        <Cartao>
          <EntradaNumerica text="Com Presente" value={comPresente} onChange={comPresente => setComPresente(comPresente)}/>
        </Cartao>
        <Cartao bgcolor="#28a085">
          <Link href={`/jogo/${qtdePortas}/${comPresente}`} >
            <h1 className={styles.link}>Começar </h1>
          </Link>
        </Cartao>
      </div>
    </div>
  )
}
 