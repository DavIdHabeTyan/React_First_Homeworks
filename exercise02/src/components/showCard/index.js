import React, {Component} from 'react';

class ShowCard extends Component {
   constructor(props) {
      super(props);

      this.state ={
         cards: [],
      }
   }

   componentDidUpdate(prevProps, prevState, snapshot) {

   }


   componentWillUnmount() {

   }


   handelDelete = (id) => {
      const {cards} = this.props;
      this.setState({
         cards: cards.filter((card) => card.id !== id)
      })
      console.log("hi")
   }

   render() {
      const {cards} = this.props;
      return (
         <div>{cards.map(elem => <div
            className="cardContainer" key={elem.id}>{elem.name}

            <button onClick={() => this.handelDelete(elem.id)} className={"buttonClose"}>X</button>

         </div>)}
         </div>
      );
   }
}

export default ShowCard;