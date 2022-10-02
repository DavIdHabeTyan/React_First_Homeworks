import  {Component} from 'react';

class Index extends Component {
constructor(props) {
   super(props);
}


   render() {
   const {name, code, image} = this.props
      return (
         <div className={"photoCard"}>
            <img className={"image"} src={image} alt=""/>
            <div>{name}</div>
         </div>
      );
   }
}

export default Index;