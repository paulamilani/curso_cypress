/// <reference types="cypress" />

it('Equality', () => {
  const a = 1;

  expect(a).equal(1);
  expect(a, 'Deveria ser 1').to.be.equal(1);
  expect(a).to.be.equal(1);
  expect('a').to.be.equal('b');
})

it('true and false', () => {
  const a = true
  const b = null;

  expect(a).to.be.true;
  expect(a).not.to.be.null;
  expect(b).to.be.null;
  expect(a).to.be.false;
})

it('Object Equality', () => {
  const obj = {
    a: 1,
    b: 2
  }

  expect(obj).equal(obj)
  expect(obj).to.be.deep.equal({a: 1, b: 2})
})

it('arrays', () => {
  const arr = [1, 2, 3]

  expect(arr).to.have.members([1, 2, 3])
  expect(arr).to.not.be.empty
})


it('types', () => {
  const num = 1
  const str = 'string'

  expect(num).to.be.a('number')
  expect(str).to.be.a('string')
})

it('strig', () => {

  const str = 'string'

  expect(num).to.be.equal('string')

})
