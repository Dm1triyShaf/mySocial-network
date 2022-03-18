import React from "react";
import users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC} from "../../redux/users-reducer";

let mapDispatchToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
let mapStateToProps =(dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
    },
        setUsers: (users => {
            dispatch(setUsersAC(users));
     }
    }
}





export default connect (mapStateToProps,mapDispatchToProps)(Users);