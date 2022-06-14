import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

    
class Dishdetail extends Component {

    constructor(props) {
        super(props);

    }

    render() {


        var singledish = [];
        singledish = [this.props.selectedDish];
       
        const dish = [this.props.selectedDish]
    return (
<div>
      {dish.map(dish => 
        <div className='row'>    	
            <div className='col-lg-5'>     

      <Card>
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
--{sub.author}, {sub.date}</label>

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