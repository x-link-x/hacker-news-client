import React from "react";
import Story from "./Story"

const SearchResults = ({stories}) => {

    console.log(stories)
    // let storyNodes = stories.map(story => {
        
    //     return (
    //         <Story 
    //             title={story.data.title} 
    //             author={story.data.by} 
    //             url={story.data.url} 
    //             key={story.data.id}
    //             comments={story.data.descendants}
    //         />
    //     )
    // })

    return (
        <>  
            {/* {storyNodes} */}
            <p>Hello</p>
        </>
    )

}

export default SearchResults;