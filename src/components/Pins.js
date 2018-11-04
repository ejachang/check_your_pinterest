import React, { Component } from 'react';

class Pins extends Component {
  render() {
    // let { substitutePins } = this.props;
    // console.log(substitutePins.data);
    return (
      <div>
        {/* {substitutePins.data.map((pin) => {
          return (
            <div className="pincontainer">
              <div key={pin.id}>
                <div className="notecontainer">
                  <h5>{pin.note}</h5>
                </div>
                <img src={pin.image.original.url}/>
              </div>
            </div>); */}
          {/* // return <Pin />; */}
        {/* }) } */}
      </div>
    );
  }
}

export default Pins;