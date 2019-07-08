import React from 'react';

const Card = (props) => {
    return (

      <div className="card"> 
        <div className="innercard">

          <h2 className="cardnum">{props.arrayC[props.index].id}/{props.arrayC.length}</h2>

          <h2 className="first">{props.arrayC[props.index].name.first + " " + props.arrayC[props.index].name.last}</h2>

          <h3>From: {props.arrayC[props.index].city}, {props.arrayC[props.index].country}</h3>

          <h3>Job Title: {props.arrayC[props.index].title}</h3>

          <h3>Employer: {props.arrayC[props.index].employer}</h3>

          <br />

          <h3>Favorite Movies: </h3>
            <ol className="list1">
                {
                  props.arrayC[props.index].favoriteMovies.map(mlist => {
                    return <li key={mlist.key}>{mlist}</li> 
                  })
                }  
            </ol> 
        </div>
      </div>

    );
  };

  export default Card;

 