const fs = require('fs');
const lastName = '林';
const list = [
  { "word": "映", "type": "火", "stoke": 9 },
  { "word": "妍", "type": "金", "stoke": 9 },
  { "word": "扬", "type": "火", "stoke": 6 },
  { "word": "如", "type": "金", "stoke": 6 },
  { "word": "彤", "type": "火", "stoke": 7 },
  { "word": "町", "type": "火", "stoke": 7 },
  { "word": "初", "type": "金", "stoke": 7 },
  { "word": "纾", "type": "金", "stoke": 7 },
  { "word": "缇", "type": "火", "stoke": 12 },
  { "word": "童", "type": "金", "stoke": 12 },
  { "word": "然", "type": "金", "stoke": 12 },
  { "word": "照", "type": "火", "stoke": 13 },
  { "word": "虞", "type": "火", "stoke": 13 },
  { "word": "遥", "type": "火", "stoke": 13 },
  { "word": "煜", "type": "火", "stoke": 13 },
  { "word": "睦", "type": "火", "stoke": 13 },
  { "word": "稚", "type": "土", "stoke": 13 },
  { "word": "瑞", "type": "金", "stoke": 13 },
  { "word": "锦", "type": "金", "stoke": 13 },
  { "word": "瑜", "type": "金", "stoke": 13 },
  { "word": "歆", "type": "金", "stoke": 13 },
  { "word": "煦", "type": "金", "stoke": 13 },
  { "word": "熙", "type": "金", "stoke": 13 },
  { "word": '辰', "type": '土', "stoke": 7 },
  { "word": '芍', "type": '木', "stoke": 6 },
  { "word": '汐', "type": '水', "stoke": 6 },
  { "word": '羽', "type": '土', "stoke": 6 },
  { "word": '芷', "type": '木', "stoke": 7 },
  { "word": '麦', "type": '水', "stoke": 7 },
  { "word": '奕', "type": '木', "stoke": 9 },
  { "word": '茗', "type": '木', "stoke": 9 },
  { "word": '棠', "type": '木', "stoke": 12 },
  { "word": '简', "type": '木', "stoke": 13 },
];

const nameCandidateList = [];

for (let m = 0; m < list.length; m++) {
  const firstName1 = list[m];

  for (let n = 0; n < list.length; n++) {
    const firstName2 = list[n];
    if (firstName1 !== firstName2) {
      const name = `${firstName1.word}${firstName2.word}`;

      if (!(firstName1.type + firstName2.type).includes('金')) {
        continue;
      }

      const item = `${lastName}${name} 属性：${firstName1.type + firstName2.type}；笔画：${firstName1.stoke} ${firstName2.stoke}`;
      const stoke = `${firstName1.stoke}${firstName2.stoke}`;

      if (stoke !== '96' && stoke !== '97' && stoke !== '1312') {
        continue;
      }

      nameCandidateList.push(item);
      console.log(item);
    }

  }

}

fs.writeFileSync(
  './nameCandidateList.md',
  `总数: ${nameCandidateList.length}
${nameCandidateList.map(name => `- [ ] ${name}`).join('\n')}
`
);
