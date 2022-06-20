import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './dishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import Home from './HomeComponent';
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        selectedDish: null,
        test : null
    };
  }

  onDishSelect(dishId) {
   this.setState({ selectedDish: dishId});

  }
  

  render() {

    const HomePage = () => {
      return(
          <Home/>
      );
    }
    const MenuPage = () => {
      return(
        <Menu dishes={this.state.dishes} />
      );
    }

    return (
    <div>   
    <Header />
    <Routes>
    <Route path="/home" element={ <HomePage />} />
    <Route exact path='/menu' element={<MenuPage/>} />
    </Routes>
    <Footer />
    </div>
      
    );
  }
}

export default Main;