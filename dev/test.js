const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

console.log(bitcoin);

// bitcoin.createNewBlock(2389, '9SDFSDF87SDFPH', '65SDFSD67h');

// bitcoin.createNewTransaction(100, 'NARENGF43F', 'SHUP76SDF');

// bitcoin.createNewBlock(2389, '65SDKFJH', '0CVFVJHGC');

// bitcoin.createNewTransaction(50, 'NARENGF43F', 'SHUP76SDF');
// bitcoin.createNewTransaction(200, 'NARENGF43F', 'SHUP76SDF');
// bitcoin.createNewTransaction(4000, 'NARENGF43F', 'SHUP76SDF');

// bitcoin.createNewBlock(769, '65SDKFJHEH2', '0HTFDT4CVFVJHGC');

// const previousBlockHash = 'SHDGFW345JHV32';
// const currentBlockData = [
//   {
//     amount: 10,
//     sender: 'UYSDG76SD65FSDF',
//     recipient: 'DHFGS5S54D4FS',
//   },
//   {
//     amount: 30,
//     sender: 'SHDGFJSHDGFSFSDN',
//     recipient: 'JDFHG8D7F6G8S',
//   },
//   {
//     amount: 800,
//     sender: 'WEWEUIUIJLVHFXG5',
//     recipient: 'LKJBVGSTY466VK',
//   },
// ];

// const nonce = 132803;

// console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));

// console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));

// console.log(bitcoin.chain[2]);
