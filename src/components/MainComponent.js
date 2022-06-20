import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './dishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { BrowserRouter as Router,Routes, Route, Link,useParams } from "react-router-dom";

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
    const DishWithId = ({match}) => {
     // const param = match.param.dishId;
      return(
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === 0)[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === 0)} />
      );
    };
    const ContactPage = () => {
      return(
        <Contact/>
      );
    }
    const AboutPage = () => {
      return(
        <About leaders={this.state.leaders.filter((leaders) => leaders)}/>
      );
    }
    return (
    <div>   
    <Header />
    <Routes>
    <Route path="/home" element={ <HomePage />} />
    <Route path="/menu" element={ <MenuPage />} />
    <Route path="/aboutus" element={ <AboutPage />} />
    <Route exact path='/contactus' element={<ContactPage/>} />
    <Route path='/menu/:dishId' element={<DishWithId/>} />
    
    </Routes>
    <Footer />
    </div>
      
    );
  }
}

export default Main;