import React from "react";


const Post = (props) => {
    return(
                <div className="post">
                    <div className="img-thumb">
                        <img src="https://placeimg.com/200/150/tech" alt="" />
                    </div>
                    <div className="content">
                        <p className="title-dummy">{props.title}</p>
                        <p className="desc">{props.desc}</p>
                    </div>
                </div>
    )
}


export default Post;
