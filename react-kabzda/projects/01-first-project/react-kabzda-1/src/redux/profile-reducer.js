import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS_ = 'SET_STATUS'

let initialState = {
        posts: [
            { id: 1, message: 'Hi, how are you ?', likesCount: 15 },
            { id: 1, message: 'It\'s my first post', likesCount: 18 },
        ],
        profile: null,
        status:""
    };

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0,
            };
            let stateCopy = {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile}
        }

        case SET_STATUS_: {
            return {
                ...state,
                status: action.status}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST,newPostText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({ type: SET_STATUS_, status})
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
        dispatch(setStatus(response.data));
    });
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
    });
}
export default profileReducer;