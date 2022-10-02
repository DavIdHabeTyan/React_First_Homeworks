import React, {Component} from 'react';

class MinimumInput extends Component {
constructor(props) {
   super(props);
}



   render() {
      const {handelMinimumCount} = this.props;
      return (
         <div>
            <label htmlFor="minimum">Min</label>
            <input type="number"
                   id='minimum' placeholder='min...'
                   onChange={e => handelMinimumCount(e) }
            />
         </div>
      )
   }
}

export default MinimumInput;