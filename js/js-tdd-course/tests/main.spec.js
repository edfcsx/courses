import { expect } from 'chai';
import { describe, it } from 'mocha';
import {
  sum,
  sub,
  mult,
  div,
} from '../src/main';

// eslint-disable-next-line no-undef
describe('Calc', () => {
  // smoke test
  describe('Smoke tests', () => {
    it('should exists the method `sum`', () => {
      // eslint-disable-next-line no-unused-expressions
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    });

    it('should exists the method `sub`', () => {
      // eslint-disable-next-line no-unused-expressions
      expect(sub).to.exist;
      expect(sub).to.be.a('function');
    });

    it('should exists the method `mult`', () => {
      // eslint-disable-next-line no-unused-expressions
      expect(mult).to.exist;
      expect(mult).to.be.a('function');
    });

    it('should exists the method `div`', () => {
      // eslint-disable-next-line no-unused-expressions
      expect(div).to.exist;
      expect(div).to.be.a('function');
    });
  });

  describe('sum', () => {
    it('should return 4 when `sum(2,2)`', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });

  describe('sub', () => {
    it('should return 2 when `sub(4,2)`', () => {
      expect(sub(4, 2)).to.be.equal(2);
    });

    it('should return -4 when `sub(6, 10)`', () => {
      expect(sub(6, 10)).to.be.equal(-4);
    });
  });

  describe('mult', () => {
    it('should return 4 when `mult(2, 2)`', () => {
      expect(mult(2, 2)).to.be.equal(4);
    });
  });

  describe('div', () => {
    it('should return 1 when `div(2, 2)`', () => {
      expect(div(2, 2)).to.be.equal(1);
    });
    it('should return `Não é possivel divisão por zero!` when divide by 0', () => {
      expect(div(2, 0)).to.be.equal('Não é possivel divisão por zero!');
    });
  });
});
