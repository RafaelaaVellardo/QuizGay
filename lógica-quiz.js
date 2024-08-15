let elementoSelectUm = document.getElementById('selectPerguntaUm')
let elementoSelectDois = document.getElementById('selectPerguntaDois')
let elementoSelectTres = document.getElementById('selectPerguntaTres')
let elementoInputPontos = document.getElementById('inptPontos')

let pontosTotal

function FinalizaQuiz(){

    pontosTotal = 0

    if(elementoSelectUm.value == '3' || elementoSelectDois.value == '3' || elementoSelectTres.value == '2'){

        alert('completa tudo, animal ')

    }else{

        if(elementoSelectUm.value == '1'){

            pontosTotal++

        }

        if(elementoSelectDois.value == '1'){

            pontosTotal++

        }

        if(elementoSelectTres.value == '1'){

            pontosTotal++

        }

        elementoInputPontos.value = pontosTotal
        
        if(pontosTotal == 3){
    
            alert('Quiz finalizado! Parabéns, você realmente é gay')            
    
        }else{
    
            alert('Acabou o quiz')  
    
        }
        

    }

}

