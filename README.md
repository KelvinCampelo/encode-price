# encode-price

To install simple run: 

`npm i encode-price #or yarn add encode-price`

To user is simple too

```javascript
var encodePrice = require('encode-price')

//to encode
var encoded = encodePrice.encode(99.99)

//to decode
var decoded = encodePrice.decode(encoded)
```

This lib was created for a simple task that the product owner needed to mask the price in Woocommerce Variation description.
