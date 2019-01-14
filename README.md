# encode-price

To install simple run: 

```bash
$ npm i encode-price #or yarn add encode-price
```

To use is simple too

```javascript
var encodePrice = require('encode-price')

//to encode
var encoded = encodePrice.encode(99.99) //#44&44

//to decode
var decoded = encodePrice.decode(encoded) //99.99
```

This lib was created for a simple task that the product owner needed to mask the price in Woocommerce Variation description.
