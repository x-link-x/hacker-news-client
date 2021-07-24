import React from "react";
import '../Story.css'

const Story = ({author, title, url, comments, time}) => {
    
    return (
        <ul> 
            <li className="story">
                <a href={url}><h4>{title}</h4></a>
                <p>{author}</p>
                <p className="comments">Comments: {comments}</p>
                <h5 className="date">{time}</h5>
            </li>  
        </ul>  
        
    )
}

export default Story;