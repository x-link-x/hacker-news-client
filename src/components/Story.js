import React from "react";
import '../Story.css'

const Story = ({author, title, url, comments}) => {
    
    return (
        <ul> 
            <li className="story">
                <a href={url}><h4>{title}</h4></a>
                <p>{author}</p>
                <p>Comments: {comments}</p>
            </li>  
        </ul>  
        
    )
}

export default Story;