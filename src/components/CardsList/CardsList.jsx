import PropTypes from 'prop-types';
import Card from "../Card/Card";
import { TweetsList } from "./CardsList.styled";

export default function CardsList({ users, getUsers }) {
    return <TweetsList>{users.map(user => <Card user={user} key={user.id} getUsers={getUsers } />)}</TweetsList>
}

CardsList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tweets: PropTypes.number,
    followers: PropTypes.number,
    avatar: PropTypes.string,
})), getUsers: PropTypes.func}