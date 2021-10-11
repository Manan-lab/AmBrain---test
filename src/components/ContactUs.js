import React from "react";
import "../css/components/contactUs.css";
import { SendOutlined } from '@ant-design/icons';
import { Checkbox, Input } from "antd";
import TextArea from 'antd/lib/input/TextArea';

class ContactUs extends React.Component {
  
    state = {
      firstName: null,
      lastName: null,
      email: null,
      message: null,
      isAgree: false,
      valid: true,
      requiredValidation: null,
      fistNameValidation: null,
      lastNameValidation: null,
      emailValidation: null,
      messageValidation: null,
      checkBoxValidation: null
    }
  
    validationErrors = {
      requiredError: '* The field is required!',
      firstnameLengthError: '* The length of the First Name field should be more than 3 characters!',
      lastnameLengthError: '* The length of the Last Name field should be more than 5 characters!',
      emailError: '* Incorrect email',
      checkBoxError: '* You must agree to the terms and conditions!'
    };
  
    handleChange = (evt) => {
        this.setState({
          [evt.target.name]: evt.target.value
        });
      
        if (evt.target.name === 'firstname') {
          this.setState({
            firstName: evt.target.value
          })
        }else if (evt.target.name === 'lastname') {
          this.setState({
            lastName: evt.target.value
          })
        } else if (evt.target.name === 'email') {
          this.setState({
            email: evt.target.value
          })
        } else {
          this.setState({
            message: evt.target.value
          })
        }
    }
  
    onSendMessage = () => {
      let { firstName, lastName, email, message, isAgree } = this.state;
      
      if (firstName && firstName.length < 3){
        this.setState({
          valid: false,
          fistNameValidation: this.validationErrors.firstnameLengthError
        });
        
        // return;
      }else if(!firstName){
        this.setState({
          valid: false,
          fistNameValidation: this.validationErrors.requiredError
        });
      }else{
        this.setState({
          valid: true,
          fistNameValidation: null
        });
      }
      
      if (lastName && lastName.length < 5){
        this.setState({
          valid: false,
          lastNameValidation: this.validationErrors.lastnameLengthError
        });
  
        // return;
      }else if(!lastName){
        this.setState({
          valid: false,
          lastNameValidation: this.validationErrors.requiredError
        });
      }else{
        this.setState({
          valid: true,
          lastNameValidation: null
        });
      }
      function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      }
      
      if (email){
        let isValidEmail = validateEmail(email);
        
        if (isValidEmail === true){
          this.setState({
            valid: true,
            emailValidation: null
          });
        }else{
          this.setState({
            valid: false,
            emailValidation: this.validationErrors.emailError
          });
        }
        // return;
      }else if(!email){
        this.setState({
          valid: false,
          emailValidation: this.validationErrors.requiredError
        });
      }
      
      if (!message){
        this.setState({
          valid: false,
          messageValidation: this.validationErrors.requiredError
        });
      }else{
        this.setState({
          valid: true,
          messageValidation: null
        });
      }
  
      if (!isAgree){
        this.setState({
          valid: false,
          checkBoxValidation: this.validationErrors.checkBoxError
        });
      }else{
        this.setState({
          valid: true,
          checkBoxValidation: null
        });
      }
      
      
      
      console.log(this.state); //fixme
      
    }
  
    handleChecked = () => {
      
      this.setState({
        isAgree: !this.state.isAgree
      })
      
    }
    
    render() {
      const {
        valid,
        requiredValidation,
        fistNameValidation,
        lastNameValidation ,
        emailValidation,
        messageValidation,
        checkBoxValidation
      } = this.state;
      
      return (
              <div className="contactUs">
          
                <h4>Contact Us</h4>
                {/*<p>{errorMessage}</p>*/}
                <div className="firstnameInput">
                  {
                    fistNameValidation &&
                    <p className="errorMessage">
                      {fistNameValidation}
                    </p>
                  }
                  <Input
                          className={`${fistNameValidation ? "invalid" : null }`}
                          onChange={this.handleChange}
                          type="text"
                          name="firstname"
                          placeholder="* First Name"
                  />
                </div>
                <div className="lastnameInput">
                  {
                    lastNameValidation &&
                    <p className="errorMessage">
                      {lastNameValidation}
                    </p>
                  }
                  <Input
                          className={` ${lastNameValidation ? "invalid" : null }`}
                          onChange={this.handleChange}
                          type="text"
                          name="lastname"
                          placeholder="* Last Name"
                  />
                </div>
                <div className="emailInput">
                  {
                    emailValidation &&
                    <p className="errorMessage">
                      {emailValidation}
                    </p>
                  }
                  <Input
                          className={` ${emailValidation ? "invalid" : null }`}
                          onChange={this.handleChange}
                          type="email"
                          name="email"
                          placeholder="* Email adsres"
                  />
                </div>
                <div className="messageInput">
                  {
                    messageValidation &&
                    <p className="errorMessage">
                      {messageValidation}
                    </p>
                  }
                  <TextArea
                          className={` ${messageValidation ? "invalid" : null }`}
                          onChange={this.handleChange}
                          placeholder="* Message"
                  />
                </div>
                <div className="formAgree" onChange={this.handleChecked}>
                  {
                    checkBoxValidation &&
                    <span className="errorMessage">
                      {checkBoxValidation}
                    </span>
                  }
                  <label>
                    <Checkbox />
                    * I hereby agree that this data will be stored and processed for the purpose of establishing contact. I am aware that I can revoke my consent at any time.
                  </label>
                </div>
                <div className="sendContent" onClick={this.onSendMessage}>
                  <div>
                    <span className="sendText">Send</span>
                  </div>
                  <div className="sendIcon">
                    <SendOutlined/>
                  </div>
                </div>
              </div>
      )
    }
}

export default ContactUs;
