'use strict';

const HAS_LESS_INTERPOLATION = /@\{.+?\}/;

/**
 * Check whether a string has less interpolation
 *
 * @param {string} string
 * @return {boolean} If `true`, a string has less interpolation
 */
module.exports = function hasLessInterpolation(string) {
	return HAS_LESS_INTERPOLATION.test(string);
};
