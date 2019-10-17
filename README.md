# Optimizely Full Stack Form Testing Example
A node.js instance with Express, Handlebars, and Optimizely Full Stack middleware.

#To use
Clone this repo and run npm install. Replace the SDK key in index.js (top level directory) with your own SDK Key.

#Feature Variables
Feature variables are located in routes/index.js. They are as follows:

button_text: Controls the text for the submit button
email_on: Boolean that toggles visibility of email field
zip_code_on: Boolean that toggles visibility of zip code field
phone_on: Boolean that toggles visibility of phone number field
name_on: Boolean that toggles visibility of name field
address_on: Boolean that toggles visibility of address field
title: Form heading
email_required: Boolean that toggles whether or not the email field is required for form submission
zip_code_required: Boolean that toggles whether or not the zip code field is required for form submission
phone_required: Boolean that toggles whether or not the phone number field is required for form submission
name_required: Boolean that toggles whether or not the name field is required for form submission
address_required: Boolean that toggles whether or not the address field is required for form submission
