import React, { Component } from 'react';
import Joi from 'joi-browser'
class LoginForm extends Component {
    state = { data:{username:'',password:''},errors:{} } 
     schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };
  
    render() { 
        return ();
    }
}
 
export default LoginForm;