const splitter = GraphemeSplitter();
const plainTextToScreamCipherMap = {
    'A': 'A',
    'B': 'Ȧ',
    'G': 'A̋',
    'L': 'Ă',
    'Q': 'A̤',
    'V': 'À',
    'C': 'A̧',
    'H': 'A̰',
    'M': 'Ǎ',
    'R': 'Ȃ',
    'W': 'Ȁ',
    'D': 'A̲',
    'I': 'Ả',
    'N': 'Â',
    'S': 'Ã',
    'X': 'A̽',
    'E': 'Á',
    'J': 'A̓',
    'O': 'Å',
    'T': 'Ā',
    'Y': 'A̦',
    'F': 'A̮',
    'K': 'Ạ',
    'P': 'A̯',
    'U': 'Ä',
    'Z': 'Ⱥ',
  };
  
  const screamCipherToPlainTextMap = Object.fromEntries(Object.entries(plainTextToScreamCipherMap).map(([k, v]) => [v, k]));
  
  const plainTextElement = document.getElementById('plain-text');
  const screamCipherTextElement = document.getElementById('scream-cipher-text');
  
  const translateText = (text, translationMap) => {
    let translatedText = '';
    splitter.splitGraphemes(text).forEach((c) => {
      const upperCaseC = c.toUpperCase();
      const cWasUpperCasedOriginally = c === upperCaseC;
      const translatedUpperCaseC = translationMap[upperCaseC];
      if (!translatedUpperCaseC) {
        translatedText += c;
        return;
      }
      translatedText += cWasUpperCasedOriginally ? translatedUpperCaseC : translatedUpperCaseC.toLowerCase();
    })
    return translatedText;
  };
  
  const onPlainTextChange = () => {
    screamCipherTextElement.textContent = translateText(plainTextElement.value, plainTextToScreamCipherMap);
  };
  
  const onScreamCipherTextChange = () => {
    plainTextElement.value = translateText(screamCipherTextElement.value, screamCipherToPlainTextMap);
  };
  
  plainTextElement.addEventListener('input', onPlainTextChange);
  screamCipherTextElement.addEventListener('input', onScreamCipherTextChange);
  onPlainTextChange();