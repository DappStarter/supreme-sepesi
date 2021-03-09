require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict process broken skull stone note snow puppy grace opera equal gate'; 
let testAccounts = [
"0x0a6f53ea33a8a45af110944ff59b2e262e0768d6656d3284d382adcd3bcdbc74",
"0x3a4d63a314248e5aac26942628d4708250148420b322ae3386bbb0109aaf8c44",
"0xce3097a0d5bee3518d79a391e9b1deb7536ac16202a50d2b34ad23cc9de2be52",
"0xf87042c055c3400ebb888cb282421e4739fd4b2831667deaa4fdeb18b658754c",
"0x64175ec0f0c382b51c05c39c86a7fa7901843a38aea488257d6840fe27901473",
"0xaae861c22b6cdd5c06c948cbaaaeaf2b65c2e71aaa3d7b2349ed6f6619e3daa0",
"0x6cbdea63d28d5721ca65d6990740f75d20d88b4adeea1b72afe5120328db650e",
"0x367e3660c853300e7c866475b67d9752c0179e6ba44619b245edd47a30b9b983",
"0x3368a3c65c36c8fa73fee3c6884bc816570c1143c0390a5907998112354c754c",
"0x0b0c920e69835effbc11ebdc291b8f5f04186a8704cc86468a0cfb0b2b2be65a"
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
            version: '^0.5.11'
        }
    }
};
