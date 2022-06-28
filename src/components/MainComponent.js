import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './dishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import { connect } from 'react-redux';

class Main extends Component {
  

  constructor(props) {
    super(props);
    this.state = {

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
        <Home 
        dish={this.props.dishes.filter((dish) => dish)[0]}
        promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
        leader={this.props.leaders.filter((leader) => leader.featured)[0]}
    />
      );
    }
    
    const MenuPage = () => {
      return(
        <Menu dishes={this.props.dishes} />
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
          <DishDetail dish={this.props.dishes.filter((dish) => dish.id === 0)[0]} 
            comments={this.props.comments.filter((comment) => comment.dishId === 0)} />
      );
    };
    const ContactPage = () => {
      return(
        <Contact/>
      );
    }
    const AboutPage = () => {
      return(
        <About leaders={this.props.leaders.filter((leaders) => leaders)}/>
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
const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

//export default Main;
export default (connect(mapStateToProps)(Main));