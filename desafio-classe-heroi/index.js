class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo
    }

    atacar(){
        if(this.tipo === 'mago'){
            this.ataque = 'magia'
    } else if(this.tipo === 'guerreiro'){
        this.ataque = 'espada'
    } else if (this.tipo === 'monge'){
        this.ataque = 'artes marciais'
    } else if(this.tipo === 'ninja'){
        this.ataque = 'shuriken'
    }
    else {
        console.log('nao foi');
    }
    console.log(`o ${this.tipo} atacou usando ${this.ataque}`)
}
}

const hero1 = new Heroi("Cizento", 85, "mago")
const hero2 = new Heroi("Leonardo", 25, "ninja")
const hero3 = new Heroi("Tohr", 20, "guerreiro")
const hero4 = new Heroi("Monge", 50, "monge")

hero1.atacar()
hero2.atacar()
hero3.atacar()
hero4.atacar()

