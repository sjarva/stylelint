const { mkdir } = require('node:fs/promises');
const { beforeEach, afterEach } = require('@jest/globals'); // eslint-disable-line node/no-extraneous-require

/**
 * A safe `process.chdir()`.
 *
 * @param {string} dir - will be created if not exists
 * @returns {void}
 */
module.exports = function safeChdir(dir) {
	/** @type {string | undefined} */
	let actualCwd;

	beforeEach(async () => {
		actualCwd = process.cwd();
		await mkdir(dir, { recursive: true });
		process.chdir(dir);
	});

	afterEach(() => {
		if (actualCwd) process.chdir(actualCwd);
	});
};
