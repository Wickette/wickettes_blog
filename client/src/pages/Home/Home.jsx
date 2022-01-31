import React, {useState, useEffect} from "react";
import axios from 'axios'
import Header from "../../components/Header/Header";
import Posts from "../../components/Posts/Posts";
import SideBar from "../../components/SideBar/SideBar";
import './home.css'
import { useLocation } from "react-router";

export default function Home() {
    const [posts, setPosts] = useState([])
    const {search} = useLocation()

    useEffect(() => {
        const fetchPosts = async () => {
           const response = await axios.get('/posts' + search)
           setPosts(response.data)
        }
        fetchPosts()
    }, [search]);
    return (
        <>
            <Header/>
            <div className="home">
                <Posts posts={posts}/>
                <SideBar/>
            </div>
        </>
    )
}