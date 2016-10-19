'use strict';

const MAX_SIGN_WIDTH = 13;
const LINE_DELIMITER = '\n';

function buildBunny() {
  return '(\\__/) ||\n(•ㅅ•) ||\n/ 　 づ';
}

function buildSignBoundary() {
  return `|${'-'.repeat(MAX_SIGN_WIDTH - 2)}|`;
}

function buildMiddleOfSign(inputArr) {
  const lines = [];
  inputArr.forEach((word) => {
    if (word.length > (MAX_SIGN_WIDTH - 3)) throw 'One of your words is too long.'
    if (lines.length == 0) {
      lines.push(word)
      return;
    }
    const lastLine = lines[lines.length - 1];
    if(lastLine.length + 1 + word.length > (MAX_SIGN_WIDTH - 3)) {
      lines.push(word);
      return;
    }
    lines[lines.length - 1] = lastLine + ' ' + word;
  });
  return lines.map((line) => `| ${line}${' '.repeat(MAX_SIGN_WIDTH - 3 - line.length)}|` ).join(LINE_DELIMITER);
}

function buildSign(inputArr) {
    return [
            buildSignBoundary(),
            buildMiddleOfSign(inputArr),
            buildSignBoundary(),
            buildBunny()
           ].join(LINE_DELIMITER);
}

module.exports = buildSign;
