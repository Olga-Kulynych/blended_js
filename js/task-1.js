// За допомогою циклу `for` виведи числа від 1 до 5. Кожне число має з’явитися в консолі на окремому рядку.

function numbers(start, end) {
    for (let i = start; i <= end; i += 1) {
        console.log(i);
    
    }
}
numbers(1, 5);




// Створи`removeSpaces(text)`.Циклом побудуй новий рядок, додаючи лише символи, які не є пробілами.Перевір`'learn js daily'`.
function removeSpaces(text) {
  let newString = "";

  for (let i = 0; i < text.length; i += 1) {
    if (text[i] !== " ") {
      newString += text[i];
    }
  }

  return newString;
}

console.log(removeSpaces("learn js daily")); // "learnjsdaily"


// Створи `reverseText(text)`, яка проходить від останнього символу до першого і повертає перевернутий рядок. Перевір `'browser'`.

function reverseText(text) {
  let reversedText = "";

  for (let i = text.length - 1; i >= 0; i -= 1) {
    reversedText += text[i];
  }

  return reversedText;
}

console.log(reverseText("browser")); // "resworb"


// Створи `hideVowels(text)`. Без `replace()` пройди циклом і заміни англійські голосні в будь-якому регістрі на `*`. Інші символи залиш без змін. Перевір `'Frontend'`.

function hideVowels(text) {
  let newString = "";
  const vowels = "aeiou";

  for (let i = 0; i < text.length; i += 1) {
    const symbol = text[i];
    const symbolLower = symbol.toLowerCase();
    const isVowel = vowels.includes(symbolLower);

    newString += isVowel ? "*" : symbol;
  }

  return newString;
}

console.log(hideVowels("Frontend")); // "Fr*nt*nd"


// Створи `getInitials(fullName)`. Після `trim()` додай у результат першу літеру рядка та кожну літеру після пробілу. Ініціали мають бути великими й розділеними крапками. Перевір `'  olena kovalenko  '`.

function getInitials(fullName) {
    let temp = fullName.trim();
    let result = temp[0].toUpperCase() +".";
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] === " ") {
            result += temp[i + 1].toUpperCase() + ".";
}
    }
    return result;
}
console.log(getInitials("  olena kovalenko  "));


// Створи `findLongestWord(text)`. Не використовуй масиви або `split()`. Проходь по рядку разом із додатковим пробілом у кінці, накопичуй поточне слово й запамятовуй найдовше. Перевір `'learning loops builds skill'`.

function findLongestWord(text) {
    let currentWord = "";
    let longestWord = "";

    for (let i = 0; i < text.length; i++) {
        currentWord += text[i];
        if (text[i] === " " || i === text.length - 1) {
            if (currentWord.length > longestWord.length) {
                longestWord = currentWord;
            }
            currentWord = "";
        }
    }
    return longestWord;

}
console.log(findLongestWord("learning loops builds skill"));