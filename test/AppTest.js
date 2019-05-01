const assert = require('chai').assert;
const app = require('../app');

// Results
sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5, 5);

describe('App', () => {
	describe('sayHello()', () => {
		it('sayHello should return hello', () => {
			// const result = app.sayHello();
			assert.equal(sayHelloResult, 'Hello');
		})

		it('sayHello should return type string', () => {
			// const result = app.sayHello();
			assert.typeOf(sayHelloResult, 'string');
		})
	})

	describe('addNumbers()', () => {
		it('addNumbers should be above 5', () => {
			// const result = app.addNumbers(5, 5);
			assert.isAbove(addNumbersResult, 5);
		})

		it('addNumbers should return type number', () => {
			// const result = app.addNumbers();
			assert.typeOf(addNumbersResult, 'number');
		})
	})
})