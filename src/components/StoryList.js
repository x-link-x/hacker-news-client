import React from "react";
import Story from "../components/Story";
import '../StoryList.css'

const StoryList = ({stories, getTime}) => {

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
                    time={getTime(story.data.time)}
                />
            
        )
    })
    
    return (
        <>  
            <h2 className="title">Hacker News Latest Stories</h2>
            {storyNodes}
        </>
    )  
}

export default StoryList;