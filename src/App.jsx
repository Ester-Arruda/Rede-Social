import './App.css'

import logo from './logo.png'
import { useState, useEffect } from 'react'
import { CreatePostList } from './components/CreatePostList/CreatePostList'
import { Navbar } from './components/Navbar/Navbar'
import { FriendsList } from './components/FriendsList/FriendsList'
import { SuggestionList } from './components/SuggestionList/SuggestionList'
import usersJson from './users.json'
import friendsJson from './friends.json'
import suggestionJson from './suggestionFriends.json'

export default function App() {
  const [users, setUsers] = useState([]);
  const [friends, setFriends] = useState([]);
  const [suggestion, setSuggestion] = useState([]);

  useEffect(() => {
    setUsers(usersJson);
    setFriends(friendsJson);
    setSuggestion(suggestionJson);
  }, [usersJson, friendsJson, suggestionJson]);

  function getArrayIfValid(json, array) {
    if (!json || !json[array] || !Array.isArray(json[array])) {
      return [];
    }
    return json[array];
  }

  const suggestionArray = getArrayIfValid(suggestionJson, 'suggestion')
  const friendsArray = getArrayIfValid(friendsJson, 'friends')
  const urlLogo = "https://cdn.pixabay.com/photo/2016/01/20/13/05/cat-1151519_640.jpg"

  return (
    <>
      <Navbar img={urlLogo} />
      <CreatePostList users={users} />
      <div className="containerFriends">
        {friendsArray.map((friend) => (
          <div key={friend.id} className="containerCardFriends">
            <FriendsList {...friend} />
          </div>
        ))}
      </div>
      <CreatePostList users={users} />
      <div className="containerFriends">
        {suggestionArray.map((suggestion) => (
          <div key={suggestion.id} className="containerCardFriends">
            <SuggestionList {...suggestion} />
          </div>
        ))}
      </div>
    </>
  )
}
