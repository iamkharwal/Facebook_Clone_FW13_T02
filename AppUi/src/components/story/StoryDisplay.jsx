import React from 'react';
import { useContext } from 'react';
import { Avatar } from "@material-ui/core";
import "./StoryReel.css";
import "./Story.css";
import { DisplayStoryContext } from './StoryContext';

const StoryDisplay = () => {
    const { storyDiv, togglestoryDiv, imageUrl, togglestoryDisplay } = useContext(DisplayStoryContext);
    console.log(imageUrl);

    return (
        <div>
            <div className='statusLoading'></div>
            
            <div className="storyBig">
                <img src={imageUrl.img} alt="status image" />
            </div>
            <div style={{ display: "flex" }} >
                <img className="story__avatar" height="50px" width="50px" style={{ borderRadius: "50%" }}
                    src={imageUrl.profile} />
                <h3 style={{ width:"250px",textAlign:"start" }}>{imageUrl.name}</h3>
                <div style={{textAlign : "right",marginLeft:"74%"}}>
                    <button className='storyCrossButton' onClick={() => {
                    togglestoryDisplay();
                    }}>X</button>
                </div>
            </div>
            <div style={{display:"flex",marginTop:"250px"}}>
                <button className='storySymbol' style={{textAlign:"left"}}>＜</button>
                <button className='storySymbol' style={{textAlign:"right",marginLeft:"94%"}}>＞</button>
            </div>

        </div>
    );
};

export default StoryDisplay;