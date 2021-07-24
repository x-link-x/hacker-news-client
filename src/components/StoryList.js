import React from "react";
import Story from "../components/Story"


const StoryList = ({stories}) => {

    if (!stories) {
        return <p>Loading</p>
    }
    
    
    let storyNodes = stories.map(story => {
        return (
            <Story 
                title={story.data.title} 
                author={story.data.by} 
                url={story.data.url} 
                key={story.data.id}
                comments={story.data.descendants}
            />
        )
    })
    


    return (

        <>  
            <h2>Top Stories</h2>
            {storyNodes}
        </>
    )
    
}

export default StoryList;