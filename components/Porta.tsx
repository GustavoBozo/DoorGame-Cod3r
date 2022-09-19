import styles from '../styles/porta.module.css'
import PortaModel from '../model/porta'
import Presente from './Presente'

interface PortaProps {
    value: PortaModel
    onChange: (novaPorta: PortaModel) => void 
}

export default function Porta(props: PortaProps) {
    const porta = props.value
    const selected = porta.selecionada  && !porta.aberta ? styles.selecionada : ''

    //Funcoes
    const alternarSelecao = e => props.onChange(porta.alterarSelecao())
    const abrir = e => {
        e.stopPropagation()
        props.onChange(porta.abrir())
    }

    function renderizarPota(){
        return (
            <div className={styles.porta}>
                <div className={styles.numero}>{ porta.numero }</div>
                <div className={styles.macaneta} onClick={abrir}></div>
            </div>
        )
    }
    
    return (
        <div className={styles.area} onClick={alternarSelecao}>
            <div className={`${styles.batente} ${selected}`}>
                {porta.fechada ? 
                    renderizarPota() : 
                    porta.temPresente ? <Presente></Presente> : false
                }
            </div>
            <div className={styles.chao}></div>
        </div>
        
    )
}