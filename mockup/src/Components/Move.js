import React from 'react';

const Move = (props) => {
    return (
      <>
        <button onClick={() => props.decrement()}>Previous</button>
        <button onClick={() => props.delete()}>Delete</button>
        <button onClick={() => props.increment()}>Next</button>
      </>
    );
  };

  export default Move;




