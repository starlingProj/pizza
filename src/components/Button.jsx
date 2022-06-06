import React from "react";
import classNames from "classnames";
function Button({children,outline,className}){
    return(
        
         <button
         
         className = {classNames('button',className,{
             'button--outline':outline,
         })}>
             {children}
             </button>
    );
}

export default Button;