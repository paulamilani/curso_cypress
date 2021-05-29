it('sem testes, ainda', () => {})

const getSomething = () => {
  setTimeout(() => {
    console.log('respondendo...');
    return 11;
  }, 1000)

}

const system = () => {
  console.log('init');
  const something = getSomething();
  console.log(`Something is ${something}`);
  console.log('end');
}

system();
