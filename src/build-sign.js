'use strict';

const MAX_SIGN_WIDTH = 10;
const LINE_DELIMITER = '\n';

function buildBunny() {
  return '(\\__/) ||\n(•ㅅ•) ||\n/ 　 づ';
}

function buildBottomOfSign() {
  return `|${'＿'.repeat(MAX_SIGN_WIDTH)}|`;
}

function buildTopOfSign() {
  return `|${'￣'.repeat(MAX_SIGN_WIDTH)}|`;
}

function buildMiddleOfSign(inputArr) {
  const lines = inputArr.map((word) => {
    if (word.length > (MAX_SIGN_WIDTH - 3)) throw 'One of your words is too long.'
    return `| ${word}${' '.repeat(MAX_SIGN_WIDTH - 3 - word.length)}|`;
  });
  return lines.join(LINE_DELIMITER);
}

function buildSign(inputArr) {
    return [
            buildTopOfSign(),
            buildMiddleOfSign(inputArr),
            buildBottomOfSign(),
            buildBunny()
           ].join(LINE_DELIMITER);
}

module.exports = buildSign;
