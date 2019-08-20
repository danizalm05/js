//github.com/techsithgit/react-class-vs-es6-components/blob/master/src/users/Users.js
//https://www.youtube.com/watch?v=uGgPINlKqBs&feature=youtu.be
//5:20
/*
class Component example
*/

import React, { Component } from 'react';
import User from './User'

class Users extends Component {
  render(){
    return(
     <div>
        <h1>{this.props.title}</h1>
        <User age="20">dsd   </User>
        <User></User>
        <User> asfassfd  </User>
     </div>

     )
   }
}

export default Users;
