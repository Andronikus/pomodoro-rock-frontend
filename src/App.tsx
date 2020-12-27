import React from 'react'
// import { BrowserRouter, Route, Switch } from 'react-router-dom'

import FormInput from './components/form-input/form-input';

import './App.css'

function App() {
   return (
      <>
         <FormInput />
         {/*
         <BrowserRouter>
            <Switch>
               <Route path="/login" render={() => <h1>Login</h1>} />
               <Route path="/signIn" render={() => <h1>Sign In</h1>} />
               <Route exact path="/" render={() => <h1>Pomodoro page</h1>} />
            </Switch>
         </BrowserRouter>
         */}
      </>
   )
}

export default App
