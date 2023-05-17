// Desafio 1 - Crie a função compareTrue

const compareTrue = (param1, param2) => !!(param1 && param2 === true);

// Desafio 2 - Crie a função splitSentence

function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 3 - Crie a função concatName

function concatName(arrayItens) {
  let firstItem;
  let lastItem;

  for (let counter = 0; counter < arrayItens.length; counter += 1) {
    const element = arrayItens[counter];

    if (element === arrayItens[0]) {
      firstItem = element;
    }

    if (element === arrayItens[arrayItens.length - 1]) {
      lastItem = element;
    }
  }

  return `${lastItem}, ${firstItem}`;
}

// Desafio 4 - Crie a função footballPoints

function footballPoints(wins, ties) {
  let pointsWins = 3 * wins;
  let pointsTies = 1 * ties;
  let totalPoints = pointsWins + pointsTies;

  return totalPoints;
}

// Desafio 5 - Crie a função highestCount

function highestCount(arrayNumbers) {
  let biggestNumber = null;

  for (let index = 0; index < arrayNumbers.length; index += 1) {
    const element = arrayNumbers[index];

    if (Number(element) > biggestNumber || !biggestNumber) {
      biggestNumber = element;
    }
  }

  return arrayNumbers.filter((valor) => valor === biggestNumber).length;
}

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

function calcRectangleArea(base, height) {
  return base * height;
}

function calcTriangleArea(base, height) {
  return (base * height) / 2;
}

function calcAllAreas(base, height, form) {
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(
      base,
      height,
    )}`;
  }
  if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(
      base,
      height,
    )}`;
  }
  return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
}

// Desafio 7 - Crie a função catAndMouse

function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs(cat1 - mouse);
  let distance2 = Math.abs(cat2 - mouse);

  if (distance2 < distance1) {
    return 'cat2';
  }
  if (distance1 < distance2) {
    return 'cat1';
  }
  if (distance1 === distance2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8 - Crie a função fizzBuzz

function getValue(value) {
  const divisibleFor3 = value % 3 === 0;
  const divisibleFor5 = value % 5 === 0;

  if (divisibleFor3 && divisibleFor5) {
    return 'fizzBuzz';
  }
  if (divisibleFor3) {
    return 'fizz';
  }
  if (divisibleFor5) {
    return 'buzz';
  }
  return 'bug!';
}

function fizzBuzz(array) {
  for (let index = 0; index < array.length; index += 1) {
    array[index] = getValue(array[index]);
  }
  return array;
}

// Desafio 9 - Crie a função encode e a função decode

function encode(string) {
  let newString = string;
  newString = newString.replaceAll('a', '1');
  newString = newString.replaceAll('e', '2');
  newString = newString.replaceAll('i', '3');
  newString = newString.replaceAll('o', '4');
  newString = newString.replaceAll('u', '5');

  return newString;
}

function decode(string) {
  let newString = string;
  newString = newString.replaceAll('1', 'a');
  newString = newString.replaceAll('2', 'e');
  newString = newString.replaceAll('3', 'i');
  newString = newString.replaceAll('4', 'o');
  newString = newString.replaceAll('5', 'u');

  return newString;
}

// Desafio 10 - Crie a função techList

function techList(array, string) {
  let newArray = [];
  const arraySort = array.sort();

  for (let index = 0; index < arraySort.length; index += 1) {
    const element = arraySort[index];

    const tech = {
      tech: element,
      name: string,
    };

    newArray.push(tech);
  }

  return newArray;
}

// Não modifique essas linhas
module.exports = {
  calcTriangleArea:
    typeof calcTriangleArea === 'function' ? calcTriangleArea : () => {},
  calcRectangleArea:
    typeof calcRectangleArea === 'function' ? calcRectangleArea : () => {},
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : () => {},
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : () => {},
  compareTrue: typeof compareTrue === 'function' ? compareTrue : () => {},
  concatName: typeof concatName === 'function' ? concatName : () => {},
  decode: typeof decode === 'function' ? decode : () => {},
  encode: typeof encode === 'function' ? encode : () => {},
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : () => {},
  footballPoints:
    typeof footballPoints === 'function' ? footballPoints : () => {},
  highestCount: typeof highestCount === 'function' ? highestCount : () => {},
  splitSentence: typeof splitSentence === 'function' ? splitSentence : () => {},
  techList: typeof techList === 'function' ? techList : () => {},
};
