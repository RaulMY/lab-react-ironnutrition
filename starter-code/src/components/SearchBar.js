import React from 'react'
import MyInput from './MyInput';

const SearchBar = props => {

    const handleChange = (e) => {
        let { value } = e.target; 
        props.updateFoods(value);
    }

    return (
        <MyInput
            type="text" 
            placeholder="Type a food" 
            handleChange={handleChange}
        />
    )
}

export default SearchBar;