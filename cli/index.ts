#!/usr/bin/env node

import { ceasarEncrypt } from '../src/features/ciphers/ceasar/utils/ceasar.js';
import { substitutionEncrypt } from '../src/features/ciphers/substitution/utils/substitution.js';
import { tableEncrypt } from '../src/features/ciphers/table/utils/table.js';
import { vignereEncrypt } from '../src/features/ciphers/vignere/utils/vignere.js';
import { cleanText } from '../src/utils/cleanText.js';
import { appendFile, readFileSync, writeFile, writeFileSync } from 'fs';
import { load } from 'js-yaml';
import { resolve } from 'path';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { ProblemLanguages, ProblemTypes } from '../src/data/types/index.js';

interface Schema {
  challenges: {
    name: string;
    text: string;
    cipher: string;
    key: string;
  }[];
}

const languageToProblemLanguage = (l: string) => {
  switch (l.toLowerCase()) {
    case 'en':
    case 'english':
    case 'englisch':
      return ProblemLanguages.EN;
    case 'de':
    case 'german':
    case 'deutsch':
      return ProblemLanguages.DE;
    default:
      console.log(`Language ${l} is not supportet`);
      process.exit(1);
  }
};

const cipherToProblemTypes = (c: string) => {
  switch (c.toLowerCase()) {
    case 'ceasar':
      return ProblemTypes.CEASAR;
    case 'substitution':
      return ProblemTypes.SUBSTITUTION;
    case 'table':
      return ProblemTypes.TABLE;
    case 'vignere':
      return ProblemTypes.VIGNERE;
    default:
      console.log(`Cipher ${c} is not supportet`);
      process.exit(1);
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
yargs(hideBin(process.argv))
  .command(
    'generate [file] [language]',
    'generate problems for the file and cipher given',
    (yargs) => {
      return yargs
        .positional('name', {
          type: 'string',
          demandOption: true,
        })
        .positional('language', {
          type: 'string',
          demandOption: true,
        });
    },
    (argv) => {
      const { file, language } = argv;
      const _language = languageToProblemLanguage(language);

      let _file;
      let yaml;

      try {
        console.log('reading file');
        _file = readFileSync(resolve(file as string), 'utf8');
        console.log('file read');
      } catch (e) {
        console.log("Couldn't open file: " + e);
        process.exit(1);
      }

      try {
        console.log('parsing file');
        yaml = load(_file) as Schema;
        console.log('file parsed');
      } catch (error) {
        console.log("Couldn't parse " + error);
      }

      console.log(yaml);

      if (!yaml) {
        console.log('yaml undefined');
        process.exit(1);
      }

      const challenges = yaml.challenges;
      const challengesGenerated = Array(challenges.length).fill('');

      for (let i = 0; i < challenges.length; i++) {
        const challenge = challenges[i];
        const problemType = cipherToProblemTypes(challenge.cipher);
        const clearedPlainText = cleanText(challenge.text);
        let cipherText: string;

        try {
          switch (problemType) {
            case ProblemTypes.CEASAR:
              cipherText = ceasarEncrypt(clearedPlainText, ~~challenge.key);
              break;
            case ProblemTypes.SUBSTITUTION:
              cipherText = substitutionEncrypt(clearedPlainText, challenge.key);
              break;
            case ProblemTypes.TABLE:
              const keyValues = challenge.key.split(' ');
              cipherText = tableEncrypt(clearedPlainText, ~~keyValues[0], ~~keyValues[1]);
              break;
            case ProblemTypes.VIGNERE:
              cipherText = vignereEncrypt(clearedPlainText, challenge.key);
              break;
          }
        } catch (e) {
          console.log(`failed to encrypt challenge "${challenge.name}": ` + e);
          process.exit(1);
        }

        challengesGenerated[i] = `{\n
        type: '${problemType}',\n
        title: '${challenge.name}',\n
        language: '${_language}',\n
        plainText: '${clearedPlainText}',\n
        cipherText: '${cipherText}'\n
        // key: ${challenge.key}
      }`;
      }

      const fileContent = challengesGenerated.join(`,\n`);

      console.log(fileContent);

      const outFileName = new Date().getUTCMilliseconds() + '.txt';

      try {
        writeFileSync(outFileName, fileContent);
      } catch (e) {
        console.log(`failed to write output file ""${outFileName}": ` + e);
        process.exit(1);
      }

      console.log(`Generated problems can be found in ${outFileName}`);

      process.exit(0);
    }
  )
  .strict()
  .parse();
