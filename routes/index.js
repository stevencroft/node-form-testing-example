'use strict'

const express = require('express'),
         uuid = require('uuid/v4'),
         path = require('path');

const router = express.Router();



router.get('/', (req, res, next) => {
  var userId = uuid();
  var enabled = req.optimizely.client.isFeatureEnabled('lead_form', userId);
  var button_text = req.optimizely.client.getFeatureVariableString('lead_form', 'button_text', userId);
  var email_on = req.optimizely.client.getFeatureVariableBoolean('lead_form', 'email_on', userId);
  var zip_code_on = req.optimizely.client.getFeatureVariableBoolean('lead_form', 'zip_code_on', userId);
  var phone_on = req.optimizely.client.getFeatureVariableBoolean('lead_form', 'phone_on', userId);
  var name_on = req.optimizely.client.getFeatureVariableBoolean('lead_form', 'name_on', userId);
  var address_on = req.optimizely.client.getFeatureVariableBoolean('lead_form', 'address_on', userId);
  var title = req.optimizely.client.getFeatureVariableString('lead_form', 'title', userId);
  var email_required = req.optimizely.client.getFeatureVariableBoolean('lead_form', 'email_required', userId);
  var zip_code_required = req.optimizely.client.getFeatureVariableBoolean('lead_form', 'zip_code_required', userId);
  var phone_required = req.optimizely.client.getFeatureVariableBoolean('lead_form', 'phone_required', userId);
  var name_required = req.optimizely.client.getFeatureVariableBoolean('lead_form', 'name_required', userId);
  var address_required = req.optimizely.client.getFeatureVariableBoolean('lead_form', 'address_required', userId);
  
  res.render('home', {
  	layout: 'default', 
    template: 'home-template',
    enabled: enabled,
    title: title,
    button_text: button_text,
    email_on: email_on,
    zip_code_on: zip_code_on,
    phone_on: phone_on,
    name_on: name_on,
    address_on: address_on,
    email_required: email_required,
    zip_code_required: zip_code_required,
    phone_required: phone_required,
    name_required: name_required,
    address_required: address_required
  });
});

router.post('/formSubmit', (req, res, next) => {

});


router.get('/test', (req, res, next) => {
	res.send('Hello World')
});

module.exports = router;