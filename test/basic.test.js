/* eslint-disable no-unused-expressions */
/* eslint-env node, mocha */

const expect = require('chai').expect;
const path = require('path');
const { ESLint } = require('eslint');

describe('Basic ESLint config tests', () => {
	let linter;

	beforeEach(() => {
		linter = new ESLint();
	});

	it('should warn about tabs over spaces', async () => {
		const code = `
    console.log('This is bad');
`;
		let results = await linter.lintText(code, { filePath: path.resolve(__dirname, '../index.js') });
		expect(results).not.to.be.null;
		expect(results.length).to.be.greaterThan(0);
		let firstRecord = results[0];
		expect(firstRecord.warningCount).to.be.greaterThan(0);
		expect(firstRecord.fixableWarningCount).to.be.greaterThan(0);
		const formatter = await linter.loadFormatter('stylish');
		const formattedResults = formatter.format(results);
		console.log(formattedResults);
	});
});
