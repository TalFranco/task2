import React from 'react'

export default function FCRecipe(props) {

    const THISISMYID = () => {
        props.sendId2Father(props.id)
       
    }

    return (
        <div className="card">
          <img className="card-img" src={props.img} />
          <div className="card-body">
             <div className="card-title">
                 <h5>{props.name}</h5>
              </div>
              <p>{props.details}</p>
             <button onClick={THISISMYID} className="button">{props.button}</button>
          </div>
        </div>
    );
 
}
