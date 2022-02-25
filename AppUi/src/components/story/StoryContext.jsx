import { createContext, useState } from "react";


export const DisplayStoryContext = createContext();

export const DisplayStoryContextProvider = ({children})=>{
    const [storyDiv, setStoryDiv] = useState(false);
    const [imageUrl, setImageUrl] = useState({});
    
    const togglestoryDiv = (storydetail)=>{
        
        console.log(storydetail);
        setImageUrl(storydetail);
    }
    
    const togglestoryDisplay = ()=>{
        setStoryDiv(!storyDiv);
    }

    return (
      <DisplayStoryContext.Provider
        value={{ storyDiv, togglestoryDiv, togglestoryDisplay, imageUrl }}
      >
        {children}
      </DisplayStoryContext.Provider>
    );
}
