import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Navbar from "./Navbar";
import "./search";

import "./search.css"
const Search = () => {
    return (
        <div>
            <Navbar/>
            <div className="cont">
            <InputGroup className="mb-3" >
                <Form.Control
                    placeholder="Search Recipes"
                    aria-label="Meal seach"
                    aria-describedby="meal-search"
                />
                <Button variant="danger" id="Meal-seach-button">
                    Search
                </Button>
            </InputGroup>
        </div>
        </div>
        

    )
}

export default Search