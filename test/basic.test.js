/* eslint-disable no-unused-expressions */
/* eslint-env node, mocha */

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ESLint } from 'eslint';
import { expect } from 'chai';
import config from '../eslint.config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

describe('Basic ESLint config tests', () => {
	/** @type ESLint */
	let linter;

	beforeEach(() => {
		linter = new ESLint({ useEslintrc: false, baseConfig: config[0] });
	});

	it('should warn about tabs over spaces', async () => {
		const code = `
    console.log('This is bad');
`;
		let results = await linter.lintText(code);
		expect(results).not.to.be.null;
		expect(results.length).to.be.greaterThan(0);
		let firstRecord = results[0];
		expect(firstRecord.warningCount).to.be.greaterThan(0);
		expect(firstRecord.fixableWarningCount).to.be.greaterThan(0);
	});
});
