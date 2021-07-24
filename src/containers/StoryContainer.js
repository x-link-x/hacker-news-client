import React, {useState, useEffect} from "react";
import StoryList from "../components/StoryList";
import SearchBar from "../components/SearchBar";
import axios from "axios";

const StoryContainer = () => {
    
    const [stories, setStories] = useState([]);
    const [query, setQuery] = useState('');
    
    const fetchData = async () => {
        return await axios.get("https://hacker-news.firebaseio.com/v0/topstories.json")
            .then(res => res.data)
            .then(ids => ids.splice(0, 30))
            .then(storyIds => Promise.all(storyIds.map(storyID => axios.get(`https://hacker-news.firebaseio.com/v0/item/${storyID}.json`))))
            .then(stories => setStories(stories))
    }

    const updateQuery = async (query) => {
        const filtered = stories.filter(story => {
            return story.data.title.toLowerCase().includes(query.toLowerCase())
        })
        
        setQuery(query);
        setStories(filtered);
    }

    useEffect(() => {fetchData()}, [])

    return (
        <>  
            <SearchBar query={query} updateQuery={updateQuery}/>
            <StoryList stories={stories}/>
        </>
    )
}

export default StoryContainer;