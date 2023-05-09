import { useEffect, useState } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import CardsList from "components/CardsList/CardsList";
import Filter from "components/Filter/Filter";
import { fetchUsers } from "services/usersAPI";
import { TweetsWrap, LoadMoreBtn, Msg } from "./Tweets.styled";

const filterOptions = {
    all: 'all',
    follow: 'follow',
    followings: 'followings',
}

export default function Tweets() {
    const [users, setUsers] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedValue, setSelectedValue] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async ()=> {
            try {
                const data = await fetchUsers()
                setUsers(data);
            } catch (error) {
                setError('Oops something went wrong (');
            }
        }
        fetchData();        
    }, []);

    const getUsers = async () => {
        // setError(null);

        try {
            const users = await fetchUsers();
            setUsers(users);
            filterUsers();
        } catch (error) {
           Notify.failure('Oops something went wrong (')
        }
    }

    const onClick = () => {                                       
        setCurrentPage(state => state + 1);
    }

    const getCurrentPageUsers = () => {
        const endUserIndex = currentPage * 3 ;
        return filterUsers()?.slice(0, endUserIndex);
    }    

    const filterUsers = () => {        
        const followingUsersId = JSON.parse(localStorage.getItem('followingUsersId'));
        // setError(null);

        switch (selectedValue) {
            case filterOptions.follow:
                // const usersToFollow = users.filter(user => !followingUsersId.includes(user.id));
                // if (usersToFollow.length === 0) setError('It seems you already follow everyone!');
                return users.filter(user => !followingUsersId.includes(user.id));
            case filterOptions.followings:
                // const followingUsers = users.filter(user => followingUsersId.includes(user.id));
                // if (usersToFollow.length === 0) setError('No following users yet. Follow one!');
                return users.filter(user => followingUsersId.includes(user.id));
            default:
                return users;
        }
    }
    
    const handleFollowBtnClick = ({ target }) => {
        setSelectedValue(target.value);
        setCurrentPage(1);
    }

    const defineMsg = () => {
        switch (selectedValue) {
            case filterOptions.follow:
                return 'It seems you already follow everyone!';
            case filterOptions.followings:
                return 'No following users yet. Follow one!';
            default:
                return 'No users';
        }
    }

    const usersToRender = getCurrentPageUsers();
    const endOfTweets = filterUsers()?.length / 3 <= currentPage;

    if (!currentPage) setCurrentPage(1)
    return <TweetsWrap>
        {error && <Msg>{error}</Msg>}
        {usersToRender &&  <>
        <Msg>Don't miss out on the latest trends on Twittier, start following the top accounts!</Msg>
        <Filter handleFollowBtnClick={handleFollowBtnClick} filterOptions={filterOptions} selectedValue={ selectedValue} />
            { usersToRender.length !== 0 ? <><CardsList users={usersToRender} getUsers={getUsers} />
                {!endOfTweets && <LoadMoreBtn type="button" onClick={onClick}>Load More</LoadMoreBtn>}</> : <Msg>{ defineMsg()}</Msg>} </>}
    </TweetsWrap>
}
