import React, {ChangeEvent} from "react";
import style from "MyProFile.module.css"
import {stateType} from "../../../Redux/Redax";

type MyProFileType = {
    posts: stateType
}

export const MyProFile = ({posts}:MyProFileType) => {


    let postsElement = posts.map(m => <Post message={m.message} likesCount={m.likesCount}/>)

        let newPostElement = React.createRef();

    const addPost = (e: number) => {
        let text = newPostElement.current.value;
        alert(text);
    }

    return (

        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange = {newPostElement}/>
            </div>
            <div>
                <button onChange={addPost}>Add post</button>
            </div>
            <div className={style.posts}>
                {postsElement}
            </div>
        </div>

    )
}