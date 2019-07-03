import React from 'react';

const Move = (props) => {
    return (
      <>
        <button onClick={() => props.decrement()}>Previous</button>
        <button onClick={() => props.increment()}>Next</button>
      </>
    );
  };

  export default Move;




