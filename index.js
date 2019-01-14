const caesar = require('caesar-salad');
ROT18 = caesar.ROT18;

function Cryptor() {}

Cryptor.prototype.encode = function(price) {
    let toEncode = parseFloat(price).toFixed(2);
    let encoded = '#' + toEncode.split('.').join('&');
    encoded = ROT18.Cipher().crypt(encoded);
    return encoded;
};

Cryptor.prototype.decode = function(encoded) {
    let decoded = ROT18.Decipher().crypt(encoded);
    decoded = decoded.split('&').join('.');
    decoded = decoded.substring(1);
    return decoded;
};

module.exports = new Cryptor()