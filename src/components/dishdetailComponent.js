import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

    
class Dishdetail extends Component {

    constructor(props) {
        super(props);

    }

    render() {


        //alert(this.props.selectedDish);
        var dish = [];
        dish = [this.props.dish];
      //  alert(dish);
       
      //  alert(JSON.stringify(this.props.dish));
      if (dish != '')
      
    return (
        
<div>
   {dish.map(dish => 
        <div className='row'>    	
            <div className='col-lg-5'>     

      <Card className='container'>
      <CardImg top src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
        </CardBody>

  </Card>
      
      
         </div>

         <div className='col-lg-5'>     

<Card>
<CardTitle>Comments</CardTitle>

{dish.comments.map((sub)=>

<label><b>{sub.comment}</b><br/>
--{sub.author},
 {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).
 format(new Date(Date.parse(sub.date)))}</label>

)}

</Card>



   </div>

         </div>
    
    )}
</div>
    )
}

}

export default Dishdetail;