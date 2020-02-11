const NOME_SISTEMA = "******** PETSHOP DO LUCÃO ********";

json = `[{"nome":"Bob","idade":5,"raca":"cachorro","dono":"João","sexo":"Feminino","peso":4,"vacinado":false,"servicos":["Banho"]}]` ;

//console.log(NOME_SISTEMA);

const lerPets = (umJSON) => {
    const pets = JSON.parse(umJSON);
    return pets;
};

const darEntradaPets = leituraLista => {
    let pets = leituraLista

    for (let i = 0; i < pets.length; i++) {
        //cadastrarPet("Niko", 5, "Cachorro", "Maria", "M", 3.4, false, ["Banho", "Tosa"]);
        cadastrarPet(pets[i].nome, pets[i].idade, pets[i].raca, pets[i].dono, pets[i].sexo, pets[i].peso, pets[i].vacinado, pets[i].servicos)
        //console.log(pets[i.servicos])
        // if (pets[i].vacinado == false) {
        //     console.log("Dando entrada no pet: " + pets[i].nome + "...")
        //     console.log("Pet" + pets[i].nome + " adicionado com sucesso!")
        //     vacinarPet(pets[i]);
        //     console.log("----------------------------------------------")
        // } else {
        //     console.log("Dando entrada no pet: " + pets[i].nome + "...")
        //     console.log("Pet" + pets[i].nome + " adicionado com sucesso!")
        //     console.log("O pet: " + pets[i].nome + " ja esta vacinado!")
        // }
    }
}

let listaPets = [{
    nome: "Babi",
    idade: 17,
    raca: "Cachorro",
    dono: "Lucas",
    sexo: "F",
    peso: 5.1,
    vacinado: true,
    servicos: ["Banho", "Vacina", "Tosa", "Passeio"]
}];


function cadastrarPet(nome, idade, raca, dono, sexo, peso, vacinado, servicos) {
    //código aqui
    let novaLista = {
        nome,
        idade,
        raca,
        dono,
        sexo,
        peso,
        vacinado,
        servicos
    }

    listaPets.push(novaLista);
    console.log(" ")
    console.log(" ")
    console.log("----------------------------------------------")
    console.log("Cadastrando no sistema ...")
    console.log("O Pet " + nome + " foi adicionado com sucesso!");
    console.log("----------------------------------------------")
}





const darVacina = function (pet) {
    console.log("                          ");
    console.log("                          ");
    console.log("------------------");
    console.log("Serviço de vacinação...");
    console.log("                          ");
    console.log("Pet: " + pet.nome);
    if (pet.vacinado) {
        console.log("O pet " + pet.nome + " ja está vacinado!");
    } else {
        pet.vacinado = true;
        console.log("O pet " + pet.nome + " foi vacinado com sucesso!");
    }
    console.log("------------------");
    console.log("                           ");
}

function visualizarPets() {
    console.log(" ");
    console.log("-------------------")
    console.log("Pets cadastrados: ");
    if (listaPets.length <= 0) {
        console.log("Não há pets cadastrados.");
    } else {
        for (let i = 0; i < listaPets.length; i++) {
            console.log(" ");
            console.log("Pet 0" + (i + 1) + ":")
            console.log("Nome: ......" + listaPets[i].nome);
            console.log("Idade: ......" + listaPets[i].idade);
            console.log("Raça: ......" + listaPets[i].raca);
            console.log("Dono: ......" + listaPets[i].dono);
            console.log("Servicos: ......" + listaPets[i].servicos);
            
            //console.log(listaPets[i].vacinado ? "Vacinado: ......Sim." : "Vacinado: ......Não.");
            if(listaPets[i].vacinado){
                console.log("Vacinado: ......Sim.");
            } else{
                console.log("Vacinado: ......Não.");
                darVacina(listaPets[i])
            }
        }
    }
    console.log("-------------------");
}

function quantidadeServicos(){
    let qtdServicos = 0;
    for(let i=0;i<listaPets.length;i++){
        qtdServicos += listaPets[i].servicos.length;
    }
    console.log(" ")
    console.log(" ")
    console.log("--------------------------------------------------")
    console.log("O Petshop ja prestou " + qtdServicos + " serviços.")
    console.log("--------------------------------------------------")
}

// 1º execução:
cadastrarPet("Niko", 5, "Cachorro", "Maria", "M", 3.4, false, ["Banho", "Tosa"]);

// 2ª execução:
darEntradaPets(lerPets(json), darVacina);

// 3ª execução:
visualizarPets();

// 4ª execução:
quantidadeServicos();



// DESAFIO #2;

// Quantos serviços seu petshop ja prestou?

// Vamos somar os serviços prestados a todos os pets