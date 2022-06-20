import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './dishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        selectedDish: null,
        test : null,
        comments: COMMENTS,
        promotions: PROMOTIONS,
        leaders: LEADERS
    };
  }

  onDishSelect(dishId) {
   this.setState({ selectedDish: dishId});

  }
  

  render() {

    const HomePage = () => {
      return(
        <Home 
        dish={this.state.dishes.filter((dish) => dish)[0]}
        promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
        leader={this.state.leaders.filter((leader) => leader.featured)[0]}
    />
      );
    }
    const MenuPage = () => {
      return(
        <Menu dishes={this.state.dishes} />
      );
    }
    const DishDetailPage = () => {
      return(
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
      );
    }
    const ContactPage = () => {
      return(
        <Contact/>
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