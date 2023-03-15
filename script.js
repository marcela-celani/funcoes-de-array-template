// PRATICA GUIADA - CALLBACKS

// PRATICA I ___________________________
/* 1) Declare duas funções:
A primeira deve receber um array de números, e retornar um novo array com todos os números do array original  multiplicados por 3.
A segunda deve receber um array de números, e retornar um array apenas com os números pares.
____________________________________ */

let array = [2, 5, 35, 101, 40]

//opção com for of
function triplicarNumeros(arrayDeNumeros) {
  const arrayTriplicado = []

  for (let numero of arrayDeNumeros) {
    const numeroTriplicado = numero * 3
    arrayTriplicado.push(numeroTriplicado)
  }

  return arrayTriplicado
}

//console.log(triplicarNumeros(array))

function retornarPares(arrayDeNumeros) {
  const arrayPares = []

  for(let numero of arrayDeNumeros){
    if(numero % 2 === 0){
      arrayPares.push(numero)
    }
  }

  return arrayPares
}

//console.log(retornarPares(array))

//opção com for geral
function retornarMultiplicado3(numeros) {
  const numerosMultiplicados = []

  for (i = 0; i < numeros.length; i++){
    const multiplicado = numeros[i]*3
    numerosMultiplicados.push(multiplicado)
  }

  return numerosMultiplicados
}

//console.log(retornarMultiplicado3(array))

function retornaPar(numeros) {
  const numerosPar = []

  for (i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 === 0){
      numerosPar.push(numeros[i])
    }
  }

  return numerosPar
}

//console.log(retornaPar(array))

// PRATICA II ___________________________
/* Agora, crie uma função que recebe como parâmetros um array e uma função de callback: 
→ A função principal deve chamar a função de callback passando o array como argumento. O valor do novo array deve ser guardado em uma variável, e a variável, retornada.
→ Faça duas chamadas da função acima, utilizando como callback as funções criadas anteriormente.
____________________________________ */

function manipulaNumeros(array, callback){
  const novoArray = callback(array)

  return novoArray
}

//console.log('TRIPLICANDO: ', manipulaNumeros([11, 22, 33, 44, 55], triplicarNumeros))

//console.log('SÓ PARES: ', manipulaNumeros([11, 22, 33, 44, 55], retornaPar))


const numeros = [3, 4, 123, -4, 44]

//funçao de array - map
const numerosTriplicados = numeros.map((elemento, indice, array) => {
  return elemento * 3
})

//console.log(numerosTriplicados)

//funçao de array - filter
const numerosPares = numeros.filter((elemento, indice, array) => {
  return elemento % 2 === 0
})

//console.log(numerosPares)


// EXERCICIO DE FIXAÇAO
/*____________________________________
Com o array de pokémons disponibilizado, faça o que se pede:
Declare uma função que receba como parâmetro o objeto poke, e que defina a propriedade vida como 100.
Utilize o map() e a função criada no item 1 para alterar a propriedade vida de todos os objetos do array pokemons. Guarde o novo array numa variável pokemonsVidaCheia.
Utilize o filter() e uma função não-nomeada para retornar apenas os pokémons de fogo. Guarde o novo array numa variável pokemonsDeFogo.
____________________________________*/

const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 }
]

function centroPokemon(poke){
  poke.vida = 100
  return poke
}

const encheVida = pokemons.map(centroPokemon)
console.log(encheVida)

const pokemonsFogo = pokemons.filter((elemento) => {
  return elemento.tipo === 'fogo'
})
console.log(pokemonsFogo)



