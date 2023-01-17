import React from "react";
import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button } from "semantic-ui-react" 
import Swal from "sweetalert2";

const SERVICE_ID = "service_nhya2xk";
const TEMPLATE_ID = "template_82itaza";
const USER_ID = "c5hdpgCA-e0dvKDZu";

const ContactForm = () =>{
  
  function handleOnSubmit(e) {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({ icon: "success",  title: "Message Sent Successfully" })
      }, (error) => {
        console.log(error.text);
        Swal.fire({ icon: "error", title: "Ooops, something went wrong", text: error.text, })
      });
    e.target.reset()
  };

return (
    <div className="contactMessage">
      <h2>Contact Us</h2>
      <Form onSubmit={handleOnSubmit}>
          
        <Form.Field id='form-input-control-email' control={Input} label='Email' name='user_email' placeholder='Email…' required icon='mail' iconPosition='left'/>
        <Form.Field id='form-input-control-last-name' control={Input} label='Full Name'name='user_name' placeholder='Full Name…'required icon='user circle' iconPosition='left'/>
        <Form.Field id='form-textarea-control-opinion' control={TextArea} label='Message' name='user_message' placeholder='Message…' required />
        
        <Button type='submit' >Submit</Button>
      </Form>
    </div>
  );

}
export default ContactForm