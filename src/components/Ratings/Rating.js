import React from "react";
import "./Rating.css";

const Rating = ({ score, index }) => {
    return (<>
        <fieldset className="rating">
            <input type="radio" id="star5" name={index} value="5" checked={score === 5} readOnly /><label className="full" htmlFor="star5" title="Awesome - 5 stars"></label>
            <input type="radio" id="star4half" name={index} value="4 and a half" checked={score === 4.5} readOnly /><label className="half" htmlFor="star4half" title="Pretty good - 4.5 stars"></label>
            <input type="radio" id="star4" name={index} value="4" checked={score === 4} readOnly /><label className="full" htmlFor="star4" title="Pretty good - 4 stars"></label>
            <input type="radio" id="star3half" name={index} value="3 and a half" checked={score === 3.5} readOnly /><label className="half" htmlFor="star3half" title="Meh - 3.5 stars"></label>
            <input type="radio" id="star3" name={index} value="3" checked={score === 3} readOnly /><label className="full" htmlFor="star3" title="Meh - 3 stars"></label>
            <input type="radio" id="star2half" name={index} value="2 and a half" checked={score === 2.5} readOnly /><label className="half" htmlFor="star2half" title="Kinda bad - 2.5 stars"></label>
            <input type="radio" id="star2" name={index} value="2" checked={score === 2} readOnly /><label className="full" htmlFor="star2" title="Kinda bad - 2 stars"></label>
            <input type="radio" id="star1half" name={index} value="1 and a half" checked={score === 1.5} readOnly /><label className="half" htmlFor="star1half" title="Meh - 1.5 stars"></label>
            <input type="radio" id="star1" name={index} value="1" checked={score === 1} readOnly /><label className="full" htmlFor="star1" title="Sucks big time - 1 star"></label>
            <input type="radio" id="starhalf" name={index} value="half" checked={score === 0.5} readOnly /><label className="half" htmlFor="starhalf" title="Sucks big time - 0.5 stars"></label>
        </fieldset>
    </>);
}

export default Rating;