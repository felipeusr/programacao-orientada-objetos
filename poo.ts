class Carro {
	public getNome;
	public getData;
	public setNome;
	constructor(private nome:string, private data:number) {
		// propriedade = atributo
		this.getNome = () => {return this.nome};
		this.getData = () => {return this.data};
		// SET: método para alteração de variáveis privadas
		this.setNome = (novoNome:string) => {this.nome = novoNome};
	}
	// método { função }
	public descricao() {
		console.log(`${this.nome} de ${this.data}`);
	}
}

// ✅ HERANÇA: herança de propriedades e métodos para classe filha
class Aviao extends Carro {
	// ✅ ABSTRAÇÃO: metodologia de não usar superclasse para
    // criar objetos: apenas a classe filha
	public getMotor;
	public getVelocidade;
	// ✅ ENCAPSULAMENTO: privação de variáveis
	constructor(nome:string, data:number, private velocidade:string, private motor:string) {
		super(nome, data);
		// GET: método para leitura de variáveis privadas
		this.getMotor = () => {return this.motor};
		this.getVelocidade = () => {return this.velocidade};

	}
	// ✅ POLIMORFISMO: reescrita de métodos ou propriedades herdadas da classe pai
	public descricao() {
		console.log(`${this.getNome()} de ${this.getData()} com o motor ${this.motor} que atinge ${this.velocidade}`);
	}
}

let sr71 = new Aviao("sr71", 1966, "3.540 km/h", "j58 pratt and whitney");
sr71.setNome("sr71 Black Bird");

console.log(`${sr71.getNome()} de ${sr71.getData()} com o motor ${sr71.getMotor()} que atinge ${sr71.getVelocidade()}`);
// sr71.descricao();