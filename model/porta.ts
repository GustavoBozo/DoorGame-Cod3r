export default class PortaModel {
    #numero: number
    #temPresente: boolean
    #selecionada: boolean
    #aberta: boolean

    constructor(numero: number, temPresente = false, selecionada = false, aberta = false) {
        this.#numero = numero
        this.#temPresente = temPresente
        this.#selecionada = selecionada
        this.#aberta = aberta
    }

    //Metodos get para acessar os atrivutos privados da calsse Porta
    get numero() {
        return this.#numero
    }

    get temPresente() {
        return this.#temPresente
    }

    get selecionada() {
        return this.#selecionada
    }

    get aberta() {
        return this.#aberta
    }

    //Metodo para desselecionar a porta 
    desselecionar() {
        const selecionada = false
        
        //Nova instancia de uma porta
        return new PortaModel(this.numero, this.temPresente, selecionada, this.aberta)
    }

    //Metodo para alterar a selecao da porta
    alterarSelecao() {
        const selecionada = !this.selecionada
        
        //Nova instancia de uma porta
        return new PortaModel(this.numero, this.temPresente, selecionada, this.aberta)
    }

    //Metodo para ver se a porta esta aberta
    abrir() {
        const aberta = true
        
        //Nova instancia de uma porta
        return new PortaModel(this.numero, this.temPresente, this.selecionada, aberta)
    }




}