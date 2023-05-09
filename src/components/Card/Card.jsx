import Logo from "../Logo/Logo";
import ask from '../../images/ask.png';
import defaultAvatar from '../../images/boy.png';
import { AvatarImgWrap, AvatarShadow, InfoWrap, Text, TweetCard, Button } from "./Card.styled";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { changeFollowersNumber } from "../../services/usersAPI";

export default function Card({ user, getUsers }) {
    const {tweets=0, followers=0, avatar = defaultAvatar } = user;
    const [isFollowing, setIsFollowing] = useState(false);
    
    useEffect(() => {
        const followingUsersId = JSON.parse(localStorage.getItem('followingUsersId'));
        console.log("🚀 ~ file: Card.jsx:15 ~ useEffect ~ followingUsersId:", followingUsersId)
        if (followingUsersId) setIsFollowing(followingUsersId.some(id => id === user.id))
    }, [setIsFollowing, user.id]);

    const onClick = async () => {
        const followingUsersId = JSON.parse(localStorage.getItem('followingUsersId')) ? JSON.parse(localStorage.getItem('followingUsersId')) : [];

        if (isFollowing) {
            await changeFollowersNumber(user.id, user.followers - 1);
            await getUsers();

            const updatedFollowingUsers = [...followingUsersId.filter(id => id !== user.id)];
            localStorage.setItem('followingUsersId', JSON.stringify(updatedFollowingUsers))

            setIsFollowing(false);
        } else {
            await changeFollowersNumber(user.id, user.followers + 1);
            await getUsers();

            const updatedFollowingUsers = [...followingUsersId, user.id];
            localStorage.setItem('followingUsersId', JSON.stringify(updatedFollowingUsers))
            setIsFollowing(true);            
        }
    }
    
    console.log('isfollowing', isFollowing)
    return <TweetCard>
        <Logo />
        <img src={ask} alt="Messages" />
        <div>
            <AvatarShadow>
                <AvatarImgWrap>
                    <img src={avatar} alt="Boy" width={62} height={62} />
                </AvatarImgWrap>
            </AvatarShadow>
        </div>
            <InfoWrap>
                <Text>{ tweets} tweets</Text>
                <Text>{ followers} followers</Text>
        </InfoWrap>
        <Button type="button" isfollowing={isFollowing ? 1 : 0} onClick={onClick}>{isFollowing ? 'Following' : 'Follow'}</Button>
    </TweetCard>
}

Card.propTypes = {
    user: PropTypes.shape({
    id: PropTypes.string,
    tweets: PropTypes.number,
    followers: PropTypes.number,
    avatar: PropTypes.string,
}), getUsers: PropTypes.func}
