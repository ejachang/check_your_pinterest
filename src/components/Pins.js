import React, { Component } from 'react';
import Pin from './Pin';
// import substitutePins from '../fakeDataPins';

class Pins extends Component {
  render() {
    let { substitutePins } = this.props;
    // console.log(substitutePins.data);
    return (
      <div>
        {substitutePins.data.map((pin) => {
          return (
            <div key={pin.id}>
              <img src={pin.image.original.url}/>
            </div>);
          // return <Pin />;
        }) }
      </div>
    );
  }
}

export default Pins;