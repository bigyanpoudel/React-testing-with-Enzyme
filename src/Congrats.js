import React from 'react'
import PropTypes from 'prop-types'
const Congrats = ({success}) => {
   if(success){
       return(
           <div data-test="congrats-component">
                <span data-test="congrats-component-message">
                    Congratulation ! Your guess match
                </span>
           </div>
       )}else{
          return  <div data-test="congrats-component"/>
       }
   
}

Congrats.protoTypes = {
    success : PropTypes.bool.isRequired
}
export default Congrats;
