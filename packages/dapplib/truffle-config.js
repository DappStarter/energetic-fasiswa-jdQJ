require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace industry frame solution firm cruise million proud gesture opera fresh usage'; 
let testAccounts = [
"0xf50f8fd6342bed96943947f6af8b50513f9825856af7498e187127cfa7cc7f17",
"0x18f86926ca6de3b192a6a273fed0d92c4624ceccd317a1b76a3f0d0b6209f63c",
"0x8acc5536d1f08f7b034b15325ed2a981d6b9c5d360a5392d826e53745fbcf173",
"0x9a90ee8a7a73250cad69d521f8164a10c4585b7c08e4de8c703ff89ae66b2d9a",
"0x2d37a2ec74ce50620e14ba4e6ea4e3e51f043a02030e90a36d83c81dc2cecd63",
"0x78d432f4fb4c016d2ef56de70f5b11ba30d22440c66cbd64ebb703cd3d3af230",
"0xd39643e448cd08d20082f6c7e2ad4ecb1415418c5f0d84246c795d5f8f26af3a",
"0xe58cb47af9509566080f3a74e1a4ba974a0404a7a7750d759b454f65186c0765",
"0x0d935b5e1e3b351a2835ecc4d13b75e5298c230652f00eefeedf30bfc661b81a",
"0x2a8e248d3d16a23df60458d7bc28ae41679420c40f2de3b598a0f0a411d7d9c2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

