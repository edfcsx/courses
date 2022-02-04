/*
  Desafio do fizzBuzz

  Escreva uma lib que receba um número é :

  Se o número for divisivel por 3, no lugar do número escrava fizz
  Se o número for divisilvel por 5, no lugar do número escreva buzz
  Se o número for divisivel por 3 e por 5, escreva fizzBuzz
  Se não for multiplo de nada retorne o número.
*/

import { expect } from 'chai';
import { describe, it } from 'mocha';
import fizzBuzz from '../src/fizzBuzz';

describe('FizzBuzz', () => {
  it('should return `Fizz` when multiple of 3', () => {
    expect(fizzBuzz(9)).to.be.equal('Fizz');
  });

  it('should return `Buzz` when multiple of 5', () => {
    expect(fizzBuzz(25)).to.be.equal('Buzz');
  });

  it('should return `FizzBuzz` when multiple of 3 and 5', () => {
    expect(fizzBuzz(15)).to.be.equal('FizzBuzz');
  });

  it('should return `number value` when not multiple of 3 and 5', () => {
    expect(fizzBuzz(2)).to.be.equal(2);
  });

  it('should return 0 when 0', () => {
    expect(fizzBuzz(0)).to.be.equal(0);
  });
});
