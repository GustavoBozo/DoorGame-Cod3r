import styles from '../styles/porta.module.css'
import PortaModel from '../model/porta'

interface PortaProps {
    value: PortaModel
    onChange: (novaPorta: PortaModel) => void 
}

export default function Porta(props: PortaProps) {
    const porta = props.value
    const selected = porta.selecionada ? styles.selecionada : ''

    //Funcoes
    const alternarSelecao = e => props.onChange(porta.alterarSelecao())
    
    return (
        <div className={styles.area} onClick={alternarSelecao}>
            <div className={`${styles.batente} ${selected}`}>
                <div className={styles.porta}>
                    <div className={styles.numero}>{ porta.numero }</div>
                    <div className={styles.macaneta}></div>
                </div>
            </div>
            <div className={styles.chao}></div>
        </div>
        
    )
}