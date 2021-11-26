import React from 'react';
import { connect } from 'react-redux';
import { incrementLikes, decrementLikes } from '../../redux/actions';

function LikesComponent(props) {
    // console.log('render > ', props);
    return (
        <div className="button-controls">
            <button onClick={props.onIncrementLikes}>❤ {props.likes}</button>
            <button onClick={props.onDecrementLikes}>Dislike</button>
        </div>
    )
}

function mapStateToProps(state){
    const {likesReducer} = state;
    return{
       likes: likesReducer.likes
    }
} 

function mapDispatchToProps(dispatch){
    // return {
    //     onIncrementLikes: () => {
    //         //console.log('click increment');
    //         // const action = { type: 'INCREMENT'};
    //         return dispatch(incrementLikes);
    //     },
    //     onDecrementLikes: () => {
    //         //console.log('click decrement');
    //        // const action = { type: 'DECREMENT'};
    //        return  dispatch(decrementLikes);
    //     }
    // }
    return {
        onIncrementLikes: () => {
           return dispatch(incrementLikes());
        },
     
        onDecrementLikes: () => { 
            return dispatch(decrementLikes());
        }
       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LikesComponent);