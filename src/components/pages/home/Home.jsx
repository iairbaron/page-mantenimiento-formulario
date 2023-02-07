import React from "react";
import Form from "../../commons/form/Form";
import Header from "../../commons/header/Header";
import Phrase from "../../commons/phrase/Phrase";

const Home = () => {

const apiKey = 'YOUR_API_KEY';
   const apiURL = 'https://emailvalidation.abstractapi.com/v1/?api_key=' + apiKey
const sendEmailValidationRequest = async (email) => {
       try {
           const response = await fetch(apiURL + '&email=' + email);
           const data = await response.json();
           const isValidSMTP = data.is_smtp_valid.value;
 
           if (isValidSMTP) {
               // use the email address in the mailto link
           } else {
               // show the user an error
           }
       } catch (error) {
           throw error;
       }
   }

  return (
    <>
      <Header />
      <Phrase />
      <Form/>
    </>
  );
};

export default Home;
