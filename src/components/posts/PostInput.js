import React, {useContext} from 'react';
import {PostContext} from "./index";

const PostInput = () => {

    const {addPost} = useContext(PostContext)

    const clickAdd = () =>{
        const post = {title:"AAAA"+new Date(), author:"user1"}
        addPost(post)
    }

    return (
        <div>
            <h3>Post Input</h3>
            <button onClick={() => clickAdd()}>ADD</button>
        </div>
    );
};

export default PostInput;