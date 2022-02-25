import React from 'react';
import "./Story.css";
import { Avatar } from "@material-ui/core";
import { useContext } from 'react';
import { DisplayStoryContext } from './StoryContext';

const Story = ({ image, profileSrc, title }) => {

    const {storyDiv, togglestoryDiv,  togglestoryDisplay } = useContext(DisplayStoryContext);

    const handleClick = ()=>{
        const storydetail={img:image, profile:profileSrc,name:title}
        togglestoryDiv(storydetail);
        togglestoryDisplay();
    }

    return (
        <div className = "story" style = {{ backgroundImage : `url(${image})`, backgroundRepeat: "no-repeat"}} 
        onClick={handleClick}>
            <Avatar 
                className = "story__avatar"
                src = {profileSrc}
            />
            <h5>{title}</h5>
        </div>
    );
};

export default Story;