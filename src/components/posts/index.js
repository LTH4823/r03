import React, {createContext, useEffect, useState} from 'react';
import PostInput from "./PostInput";
import PostList from "./PostList";
import {addPostAjax, getPostList} from "../../api/postAPI";

export const PostContext = createContext()

const Posts = () => {

    const [postArr, setPostArr] = useState([])

    const getList = () => {
        getPostList().then(data => setPostArr(data))
    }

    const addPost = (post) => {

        addPostAjax(post).then(res => {
            getList()
        })
    }

    useEffect(() =>{

        getList()

    },[])


    return (
        <PostContext.Provider value={{postArr,addPost }}>
            <div>
                <PostInput></PostInput>
                <PostList></PostList>
            </div>
        </PostContext.Provider>
    );
};

export default Posts;