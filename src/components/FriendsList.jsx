import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AuthContext from '../contexts/AuthContext';

export default function FriendsList(props) {
  const [friends, setFriends] = useState([]);

  const { authUserInfo } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get('https://nextgen-project.onrender.com/api/s11d2/friends', {
        headers: {
          Authorization: authUserInfo.token,
        },
      })
      .then((res) => {
        setFriends(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="friendListDiv">
      <h1>FRIENDS LIST</h1>
      {friends.map((friend, key) => (
        <div className="friendList" key={key}>
          -{friend.name}-{friend.email}
        </div>
      ))}
    </div>
  );
}
