import React, {useState, useEffect} from "react";
import StoryList from "../components/StoryList";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
// import TopStoryBox from "../components/TopStory"
import axios from "axios";



const StoryContainer = () => {
    
    const [stories, setStories] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    
    useEffect(() => {           
        axios.get("https://hacker-news.firebaseio.com/v0/topstories.json")
            .then(res => res.data)
            .then(ids => ids.splice(0, 30))
            .then(storyIds => Promise.all(storyIds.map(storyID => axios.get(`https://hacker-news.firebaseio.com/v0/item/${storyID}.json`))))
            .then(stories => setStories(stories))
    }, [])

    const onSearchButtonClick = () => {
        const {search} = window.location;
        const query = new URLSearchParams(search).get('query')
    
        const filterArticles = (stories, query) => {
            return stories.filter((story) => {
                const storyTitle = story.data.title.toLowerCase()
                if (storyTitle.includes(query)) {
                    return story
                }
                
            })
        }
        setStories(filterArticles(stories, query))  
    }
    
    
    return (
        <>  
            <SearchBar onSearch={onSearchButtonClick}/>
            <StoryList stories={stories}/>
            <SearchResults stories={stories}/>
        </>
    )
}


export default StoryContainer;