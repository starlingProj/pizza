import React from "react";
import classNames from "classnames";
<<<<<<< HEAD
function Button({children,outline,className}){
    return(
        
         <button
         
=======
function Button({onClick,children,outline,className}){
    return(
        
         <button
         onClick={onClick}
>>>>>>> 94fba42 (Basic SPA without image)
         className = {classNames('button',className,{
             'button--outline':outline,
         })}>
             {children}
             </button>
    );
}

export default Button;