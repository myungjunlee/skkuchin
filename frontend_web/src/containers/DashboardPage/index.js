import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { read, getIDCheck, getConversations, logoutPost, logoutChat } from '../../actions';

const DashboardPage = () => {

    const dispatch = useDispatch();
    const post = useSelector(state => state.post.data);   
    const user = useSelector(state => state.user);
    const auth = useSelector(state => state.auth);

    useEffect(() => {
        document.documentElement.scrollTop = 0;
        dispatch(read());
        dispatch(getIDCheck());
        dispatch(getConversations());
    }, [])

    // componentWillUnmount
    useEffect(() => {
        return () => {
            // cleanup
            dispatch(logoutPost());
            dispatch(logoutChat());
        }
    }, [])

    const openPosts = () => {
        let closed_lists = [];
        let duplicate = [];
        post.forEach(post => {
            user.conversations.forEach(con => {
                if (!duplicate.includes(post.id)) {
                    if (post.id == con.post_id) {
                        closed_lists.push(post);
                        duplicate.push(post.id);
                    }
                }
            });
        });
        return closed_lists.length;
    }

    const closedPosts = () => {
        let closed_lists = [];
        post.forEach(post => {
            if (!post.option) {
                closed_lists.push(post);
            }
        });
        return closed_lists.length;
    }

    const closedChats = () => {
        let closed_lists = [];
        let duplicate = [];
        post.forEach(post => {
            user.conversations.forEach(con => {
                if (!duplicate.includes(post.id)) {
                    if (!post.option && post.id == con.post_id) {
                        closed_lists.push(post);
                        duplicate.push(post.id);
                    }
                }
            });
        });
        return closed_lists.length;
    }

    const account = ['skkuchin', 'dlaudwns7', 'hazzisss5249', 'syj0396', 'dhdktltm117', 'pja9362', 'rina35'];

    if (auth.user && !account.includes(auth.user.username)) {
        <Redirect to='/' />
    }

    return (
        <div>
            <div>?????? ????????? ??????</div>
            <div>{post ? post.length : null}</div>
            <br/>
            <br/>
            <div>?????? ???</div>
            <div>{user.users.length > 0 ? user.users.length : null}</div>
            <br/>
            <br/>
            <div>????????? ??????</div>
            <div>{user.conversations.length > 0  ? user.conversations.length : null}</div>
            <br/>
            <br/>
            <div>????????? ????????? ?????? ????????? ??????</div>
            <div>{post && user.conversations.length > 0 ? openPosts() : null}</div>
            <br/>
            <br/>
            <div>????????? ?????? ????????? ??????</div>
            <div>{post && user.conversations.length > 0 ? closedPosts() : null}</div>
            <br/>
            <br/>
            <div>????????? ???????????? ????????? ?????? ????????? ??????</div>
            <div>{post && user.conversations.length > 0 ? closedChats() : null}</div>
        </div>
    );
}

export default DashboardPage;