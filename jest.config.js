module.exports = {
	coverageDirectory: 'coverage',
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.{js,jsx}'],
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$',
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    transform: {
		'^.+\\.jsx?$': 'babel-jest',
		'^.+\\.css$': 'jest-css-modules-transform',
	},
	moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
};