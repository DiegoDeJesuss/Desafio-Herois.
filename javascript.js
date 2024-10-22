class heroi{
        constructor(nome, idade, tipo){
            this.nome = nome
            this.idade = idade
            this.tipo = tipo
           
            

            if (tipo == "mago"){
                this.ataque = "usou magia"
            } else if (tipo == "guerreiro") {
                this.ataque = "usou espada"
            } else if (tipo == "monge"){
                this.ataque = "usou artes marcias"
            } else if (tipo == "ninja"){
                this.ataque = "usou shuriken"
            }
           
        }
    
        atacar(){
             console.log(`${this.tipo} atacou usando ${this.ataque}`)
        }

    }
    

let heroi1 = new heroi("Diego", "22", "ninja")
let heroi2 = new heroi("Jonathan", "33", "mago")
let heroi3 = new heroi("Matheus", "13", "guerreiro")
let heroi4 = new heroi("Lucas", "27", "monge")

heroi1.atacar()
heroi2.atacar()
heroi3.atacar()
heroi4.atacar()

