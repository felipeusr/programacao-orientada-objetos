class Carro {
    constructor(nome, data) {
        // propriedade = atributo
        this.nome = nome;
        this.data = data;
    }
    // método { função }
    descricao() {
        console.log(`${this.nome} de ${this.data}`);
    }
}

// ✅ HERANÇA: herança de propriedades e métodos para classe filha
class Aviao extends Carro {
    // ✅ ABSTRAÇÃO: metodologia de não usar superclasse para
    // criar objetos: apenas a classe filha
    constructor(nome, data, velocidade, motor) {
        super(nome, data, velocidade, motor);

        // ✅ ENCAPSULAMENTO: privação de variáveis
        this._nome = nome;
        this._data = data;
        this._velocidade = velocidade;
        this._motor = motor;

        // GET: método para leitura de variáveis privadas
        this.getNome = () => { return this._nome };
        this.getData = () => { return this._data };
        this.getVelocidade = () => { return this._velocidade };
        this.getMotor = () => { return this._motor };

        // SET: método para alteração de variáveis privadas
        this.setNome = (novoNome) => { this._nome = novoNome; };
    }
    // ✅ POLIMORFISMO: reescrita de métodos ou propriedades herdadas da classe pai
    descricao() {
        console.log(`${this._nome} de ${this._data} com o motor ${this._motor} que atinge ${this._velocidade}`);
    }
}

const sr71 = new Aviao("sr71", 2015, "3.540 km/h", "j58 pratt and whitney");
sr71.setNome("sr71 Black Bird");

console.log(`${sr71.getNome()} de ${sr71.getData()} com o motor ${sr71.getMotor()} que atinge ${sr71.getVelocidade()}`);
// ou sr71.descricao();