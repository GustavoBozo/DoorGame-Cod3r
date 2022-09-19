import styles from '../../../styles/Jogo.module.css'
import Porta from "../../../components/Porta"
import { useEffect, useState } from 'react'
import { atualizarPortas, criarPortas } from '../../../functions/portas'
import Link from '../../../node_modules/next/link'
import { useRouter } from '../../../node_modules/next/router'



export default function jogo(){
    const router = useRouter()

    const [portas, setPortas] = useState([])

    useEffect(() => {
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente
        setPortas(criarPortas(portas, temPresente))

    }, [router?.query])

    
    
  
    function renderizarPotas() {
        return portas.map(porta => {
        return <Porta key={porta.numero} value={porta} 
        onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}/>
        })
    }
    
    return (
        <div id={styles.jogo}>
            <div className={styles.portas}>
                {renderizarPotas()}
            </div>
            <div className={styles.botoes}>
                <Link href="/">
                    <button>
                        Reiniciar Jogo
                    </button>
                </Link>

            </div>
        </div>
    )
}