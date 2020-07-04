import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/homepage';
import Header from './components/header/header.component';
import Desk from './components/desk/desk.component';
import LoginSignUp from './pages/loginsign-uppage/loginsignup';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
   constructor(props){
     super(props);

     this.state = {
       currentUser: null
     }
   }

   unsubcribeFromAuth = null;

   componentDidMount(){
    this.unsubcribeFromAuth = auth.onAuthStateChanged(user => {
       this.setState({currentUser: user});
       console.log(user)
     })
   }

   componentWillUnmount(){
     this.unsubcribeFromAuth();
   }

  render () {
    return (
      <div>
        <Header />
        <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/helppage' component={Desk} />
        <Route path='/loginsignup' component={LoginSignUp} />
        </Switch>
      </div>
    );
  }
 
}

export default App;
