import React from "react";
import Story from "../components/Story"


const TopStoryBox = ({topStory}) => {


    if (!topStory) {
        return ""
    } else { 
        return (
            <>  
                <p>{topStory.title}</p>
                <p>{topStory.by}</p>
                <p>{topStory.url}</p>
                
                
            </>
        )
    }
    


    
}

export default TopStoryBox;