const inicioPrograma = Number(prompt(`
    ============== Bem-Vindo ==========
    O que deseja comprar?
    ===================================
     Selecione uma opção
     __________________________________
    [1] -Banana
    [2] -Maçã
    [3] -Manga
    [4] -Laranja
    [5] -Limão`
))
function comprarBanana() {
    var resultado = 0
    alert("Preço da banana é R$1,30 a unidade, a partir de 12 unidades o preço sai a R$1,00")

    var qtdBanana = Number(prompt("Quantas bananas deseja comprar?"))
    if (qtdBanana >= 12) {
        resultado = qtdBanana * 1
        alert(`Voce comprou ${qtdBanana} bananas e saiu por ${resultado}`)
    } else {
        resultado = qtdBanana * 1.30
        alert(`voce comprou ${qtdBanana} bananas e saiu por ${resultado.toLocaleString(`pt-br`, {
            style: `currency`,
            currency: `BRL`,
        })}`)
    }
}

function comprarMaca() {
    var resultado = 0
    alert("O KG da maçã é R$8,55 a partir de 2KG sai por R$6,99")

    var qtdMaca = Number(prompt("Quantos kilos de Maçã deseja comprar?"))
    if (qtdMaca >= 2) {
        resultado = qtdMaca * 6.99
        alert(`Voce comprou ${qtdMaca} Maçãs e saiu por ${resultado}`)
    } else {
        resultado = qtdMaca * 8.55
        alert(`voce comprou ${qtdMaca} Maçãs e saiu por ${resultado.toLocaleString(`pt-br`, {
            style: `currency`,
            currency: `BRL`,
        })}`)
    }
}


function comprarManga() {

    var manga = prompt(`Qual tipo de manga você quer?
    [1]Palmer R$5,49
    [2]Rosa R$10,00
    [3]Tommy R$2,99
    `)
    const qtdManga = Number(prompt("Quantas Mangas você quer?"))
    switch (manga & qtdManga) {
        case 1:
            alert(`Você comprou ${qtdManga} da Palmer e saiu por ${qtdManga * 5.49}`)
            break;
        case 2:
            alert(`Você comprou ${qtdManga} da Rosa e saiu por ${qtdManga * 10.00}`)
            break
        case 3:
            alert(`Você comprou ${qtdManga} da Tommy e saiu por ${qtdManga * 2.99}`)
            break
        default:
            alert("Não existe essa opção")
            break;
    }
}

function comprarLaranja(){

    const tipolaranja = (prompt(`Qual tipo de laranja voçê deseja comprar?
        [1] Laranja-pera R$ 5,99 KG a cima 2 KG R$ 5,00
        [2] Laranja-lima R$ 3,00* KG a cima 3 KG R$ 2,00
        [3] Laranja-Bahia R$ 4,00 KG a cima 4 KG R$ 3,50 ,`))
        const qtdLaranja = (prompt(`Quantos kilos voçê deseja?`))
        let resultado = 0;
        if(tipolaranja == 1){

            if(qtdLaranja >= 2){
                resultado = qtdLaranja * 5.00
                alert(`Voçê comprou ${resultado} reais de Laranja`)
            }else {
                resultado = qtdLaranja * 5.99
                alert(`Voçê comprou ${resultado} reais de Laranja`)}
            }
        if(tipolaranja == 2){

            if(qtdLaranja >= 3){
                resultado = qtdLaranja * 2.00
                alert(`Voçê comprou ${resultado} reais de Laranja`)
            }else {
                resultado = qtdLaranja * 3.00
                alert(`Voçê comprou ${resultado} reais de Laranja`)}
            }
        if(tipolaranja == 3){

            if(qtdLaranja >= 4){
                resultado = qtdLaranja * 3.50
                alert(`Voçê comprou ${resultado} reais de Laranja`)
            }else {
                resultado = qtdLaranja * 4.00
                alert(`Voçê comprou ${resultado} reais de Laranja`)}
            }
            
}

function comprarLimão(){
    var resultado = 0
    alert("O KG do limão é R$4,50 a partir de 2KG sai por R$3,00")

    var qtdLimao = Number(prompt("Qauntos kilos de Limão voçê deseja?"))
    if (qtdLimao >= 2){
        resultado = qtdLimao * 3.00
        alert(`Voçê comprou ${qtdLimao} de Limão e saiu por ${resultado}`)
    }else {
        resultado = qtdLimao * 4.50
        alert(`Voçê comprou ${qtdLimao} de limão e saiu por ${resultado}`)
    }
}

switch (inicioPrograma) {
    case 1:
        comprarBanana()


        break;
    case 2:
        comprarMaca()

        break;
    case 3:
        comprarManga()
        break;
    case 4:
        comprarLaranja()
        break;

    case 5:
        comprarLimão()
        break;
    default:
        alert("Não existe esta opção!")

}