import React from 'react'
import Home from './Home'
import Navbar from './Components/Navbar'
import ShopCards from './Components/UpdateShops'
import { Provider } from 'react-redux'
import store from './Store/Store'
import AddShop from './Components/AddShop'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import EditShop from "./Components/EditShop"

const App = () => {
  return (
   <Provider store={store}>
<Router>

<Navbar/>

<Switch>

  <Route exact path="/" component = {Home}/>
  <Route exact path="/addshop" component = {AddShop}/>
  <Route exact path="/editshop/:id" component = {EditShop}/>
</Switch>
</Router>

   </Provider>)
}

export default App
