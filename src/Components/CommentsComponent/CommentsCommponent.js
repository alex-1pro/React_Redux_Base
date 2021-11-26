import React, { useState, useEffect } from 'react';
import SingleCommentComponent from '../SingleCommentComponent/SingleCommentComponent';
import { commentCreate, commentsLoad } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid'

function CommentsCommponent(props) {
    const [textComment, setTextComment] = useState("");
    const comments = useSelector(state =>{
        // console.log("redux state >", state);
        const { commentsReducer} = state;
        return commentsReducer.comments;
    });
 
    const dispatch = useDispatch();

    const handleInutp = (e) => {
        // console.log("input >>> ", e.target.value);
        setTextComment(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("submit textComment" , textComment);
        const id = uniqid();
        dispatch(commentCreate(textComment,id));
    }

    useEffect(() =>{
        dispatch(commentsLoad());
    }, []);

    return (
        <div className="card-comments">
            <form onSubmit={handleSubmit} className="comments-item-create">
                <input type="text" value={textComment} onChange={handleInutp}/>
                <input type="submit" hidden />
            </form>
            {!!comments.length && comments.map(res => {
              return  <SingleCommentComponent key={res.id} data={res}/>
            })}
            
        </div>
    );
}

export default CommentsCommponent;