import React, {useState, useEffect} from "react";
import StoryList from "../components/StoryList";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import '../StoryContainer.css';
import Moment from 'react-moment';
import moment from 'moment';

const StoryContainer = () => {
    
    const [stories, setStories] = useState([]);
    const [query, setQuery] = useState('');
    const [comments, setComments] = useState([]);
    
    const fetchData = async () => {
        return await axios.get("https://hacker-news.firebaseio.com/v0/topstories.json")
            .then(res => res.data)
            .then(ids => ids.splice(0, 50))
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

    const getTime = (storyTime) => {
        let date = moment.unix(storyTime)
        return <Moment className="date" format="DD MMMM YYYY hh:mm:ss">{date}</Moment>
    }


    return (
        <div className="container">  
            <SearchBar query={query} updateQuery={updateQuery}/>
            <StoryList stories={stories} getTime={getTime}/>
        </div>
    )
}

export default StoryContainer;