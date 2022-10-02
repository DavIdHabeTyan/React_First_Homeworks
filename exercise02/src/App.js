import React, {Component} from 'react';
import ShowCard from "./components/showCard";


class App extends Component {
   constructor() {
      super();
      this.state = {
         cards: [
            {id: 1, name: "Gym"},
            {id: 2, name: "Jump"},
            {id: 3, name: "Racing"}
         ]
      }
   }


   render() {
      const {cards} = this.state;
      return (
         <div className={"container"}>
            <div className="">
               <ShowCard cards={cards}/>
            </div>
         </div>
      );
   }
}

export default App;