module.exports.countGroups = function (word, k) {
  if (!!word && !!k && word.length >= k) {
    const formattedWord = word.toLowerCase().trim();
    let result = 0;
    for (let i = 0; i + k <= formattedWord.length; i++) {
      const stringSet = new Set(formattedWord.substr(i, k));
      if (stringSet.size === k) result++;
    }
    return `The number of groups with ${k} different characters is ${result}`;
  } else {
    return new Error("No valid Data, please check the arguments");
  }
};
