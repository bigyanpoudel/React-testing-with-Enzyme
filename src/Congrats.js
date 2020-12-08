import React from 'react'

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

export default Congrats
