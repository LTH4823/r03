import React, {createContext, useEffect, useState} from 'react';
import PostInput from "./PostInput";
import PostList from "./PostList";
import {addPostAjax, getPostList, removePostAjax} from "../../api/postAPI";

export const PostContext = createContext()

const Posts = () => {

    const [postArr, setPostArr] = useState([])

    const getList = () => {
        getPostList().then(data => setPostArr(data))
    }

    const addPost = (post) => {

        addPostAjax(post).then(res => {
            getList()
            //    작성 끝났으면 다시 목록을 뿌려줘야지
        })
    }
    const removePost = (id) =>{
        removePostAjax(id).then(res => {
            getList()
        })
    }

    useEffect(() =>{

        getList()
        //    여기서 가져와서 display에서 다시 뽑아준다

    },[])


    return (
        <PostContext.Provider value={{postArr,addPost,removePost }}>
            <div>
                <PostInput></PostInput>
                <PostList></PostList>
            </div>
        </PostContext.Provider>
    );
};

export default Posts;