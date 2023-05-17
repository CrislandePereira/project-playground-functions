// Desafio 11 - Crie a função generatePhoneNumber

function generatePhoneNumber(array) {
  if (array.length === 11) {
    for (let index = 0; index < array.length; index += 1) {
      const element = array[index];

      const getRepetedNumbers = array.filter((number) => number === element);

      if (element < 0 || element > 9 || getRepetedNumbers.length >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  } else if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  let ddd = array.splice(0, 2).join('');
  let firstPartOfTheNumber = array.splice(0, 5).join('');
  let secondPartOfNumber = array.splice(0, 4).join('');
  return `(${ddd}) ${firstPartOfTheNumber}-${secondPartOfNumber}`;
}

// Desafio 12 -  Crie a função triangleCheck

function triangleCheck(lineA, lineB, lineC) {
  const line1 = lineA < Math.abs(lineB + lineC) && lineA > Math.abs(lineB - lineC);
  const line2 = lineB < Math.abs(lineA + lineC) && lineB > Math.abs(lineA - lineC);
  const line3 = lineC < Math.abs(lineA + lineB) && lineC > Math.abs(lineA - lineB);

  return !!(line1 || line2 || line3);
}

// Desafio 13 - Crie a função hydrate

function hydrate(string) {
  let breakString = string.split('');
  let totalCups = 0;

  for (let index = 0; index < breakString.length; index += 1) {
    const element = breakString[index];
    if (Number(element)) {
      totalCups += Number(element);
    }
  }
  return totalCups === 1 ? '1 copo de água' : `${totalCups} copos de água`;
}

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber:
    typeof generatePhoneNumber === 'function' ? generatePhoneNumber : () => {},
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : () => {},
  hydrate: typeof hydrate === 'function' ? hydrate : () => {},
};
