const conekta = require('conekta')

conekta.api_key = 'key_NGayn1pxWwMEPC3gz9sCHQ'
conekta.api_version = '2.0.0'

module.exports = router => {
  // Register payment
  router.post('/payments', async (req, res, next) => {
    try {
      console.log('unit_price',  100)
      console.log('quantity', req.body.monto)
      order = conekta.Order.create({
        "line_items": [{
            "name": "Donativo",
            "unit_price": 100,
            "quantity": req.body.monto
        }],
        "shipping_lines": [{
            "amount": 0,
            "carrier": "No aplica"
        }], 
        "currency": "MXN",
        "customer_info": {
          'name': req.body.name,
          'email': req.body.email,
          'phone': req.body.phone
        },
        "shipping_contact": {
         "address": {
           "street1": "Sin dato",
           "postal_code": "06100",
           "country": "MX"
         }
        }, 
        "charges":[{
          "payment_method": {
            'type': 'card',
            'token_id': req.body.card_token
          }  
        }]
      }, function(err, res) {
          if(err){
            console.log(err);
            return;
          }
          console.log(res.toObject());
      })






      /*
      console.log('Monto', req.body.monto)
      order = conekta.Order.create({
        "line_items": [{
            "name": "Donativo de " + req.body.name,
            "unit_price": req.body.monto,
            "quantity": req.body.monto
        }],
        "shipping_lines": [{
          "amount": req.body.monto,
          "carrier": "No aplica"
      }],
        "currency": "MXN",
        "customer_info": {
          "name": req.body.name,
          "email": req.body.email,
          "phone": req.body.phone
        },
        "shipping_contact":{
          "address": {
            "street1": "Sin numero",
            "postal_code": "06700",
            "country": "MX"
          }
        },
        "charges":[{
          "payment_method": {
            "type": "card",
            "payment_source_id": req.body.card_token
          } 
        }]
      }, function(err, res) {
          console.log('res', res.toObject())
          console.log('err', err)
      });
      */
    } catch (e) {
      next(e)
    }
    
  })

}