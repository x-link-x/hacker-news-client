import React, {useState, useEffect} from "react";
import StoryList from "../components/StoryList";
// import TopStoryBox from "../components/TopStory"
import axios from "axios";


const StoryContainer = () => {

    
    const [stories, setStories] = useState([]);
    // const [topStory, setTopStory] = useState("");


    // const getTopTwentyStories = (stories) => {
    //     return storyIDs.splice(0, 20);
    // }

    // const getStoryIDs = () => {
    //     axios.get("https://hacker-news.firebaseio.com/v0/topstories.json")
    // }

    // const getStories = (storyID) => {
    //     axios.get(`https://hacker-news.firebaseio.com/v0/item/${storyID}.json`)
    // }

    useEffect(() => {           
        axios.get("https://hacker-news.firebaseio.com/v0/topstories.json")
            .then(res => res.data)
            .then(ids => ids.splice(0, 30))
            .then(storyIds => Promise.all(storyIds.map(storyID => axios.get(`https://hacker-news.firebaseio.com/v0/item/${storyID}.json`))))
            .then(stories => setStories(stories))
    }, [])

    
    // setTopStory(stories[0].data);
    
    // if (!topStory) {
        return (
            <>  
                <StoryList stories={stories}/>
                {/* <TopStoryBox/> */}
            </>
        )
    // } else {
    //     return (
    //         <>
                
    //             <StoryList/>
    //             {/* <TopStoryBox topStory={stories[0].data}/> */}
    //         </>
    //     )
    // }
}


export default StoryContainer;