it('nada agora', function () {

})
//arrow functin

// function soma(a, b) {
//   return a+b;
// }
//
// const soma =(a, b) => {
//   return a+ b
// }

const soma = (a, b) => a + b

console.log(soma(1,4))

it('a function test...', function () {
  console.log('Function', this);
})

it('an arrow test...', () => {
  console.log('arrow', this);
})
