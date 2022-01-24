import React from "react";
import './search-box.styles.css'

// functional components, different from class components
// dont have state because they dont have constructor
// since it is a class method. Lifecycle methods also not included
// it's a component to just receive some props, and render some html
export const SearchBox = ({ placeholder, handleChange }) => (
    <input 
        className="search"
        type='search' 
        placeholder={ placeholder } 
        onChange={handleChange} 
        // set state is an assinchronous function call
        //this.setState({searchField: e.target.value})}
        >

    </input>

);