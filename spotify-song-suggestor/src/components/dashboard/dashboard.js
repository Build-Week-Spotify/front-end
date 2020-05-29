import React, { useState, useEffect } from 'react';
import PrivateRoute from '../utils/privateRoute';
import axios from 'axios';
import SearchBar from './search/searchBar';
import SongsList from './search/songsList';
import SavedSongs from './saved-songs/savedSongs';

import { axiosWithAuth } from '../utils/axiosWithAuth';
import MyProfile from './profile/myProfile';
import { useParams } from 'react-router-dom';
<<<<<<< HEAD
import UpdateForm from './profile/updateProfile';
=======
import DashNav from './dashNav';
>>>>>>> 3c8a66eda1c358116cc50e4f5bd2e1bb7a987388

// const url = `https://spotify-3-ds.herokuapp.com/search/${search.artist}/${search.song}`;
const initialMessage = "Search among thousands of songs";

function Dashboard() {
  const [songs, setSongs] = useState([]);
  const [message, setMessage] = useState(initialMessage);

<<<<<<< HEAD
=======
  // useEffect(() => {
  //   setMessage("Loading...");
  //   axiosWithAuth()
  //     .get(`/api/songs`)
  //     .then(res => {
  //       document.querySelector(".preSearch")
  //         .classList.remove("preSearch");
  //       setSongs(res.data)
  //       setMessage("");
  //     })
  // }, [])

>>>>>>> 3c8a66eda1c358116cc50e4f5bd2e1bb7a987388
  return (
    <div className="dashboard">
      <DashNav />
      <PrivateRoute path="/dashboard/profile">
        <MyProfile />
      </PrivateRoute>
      <PrivateRoute path='/dashboard/update-profile/:id'>
        <UpdateForm />
      </PrivateRoute>

      <PrivateRoute path="/dashboard/search">
        <div className="preSearch">
          <SearchBar setSongs={setSongs} setMessage={setMessage} />
          <SongsList songs={songs} message={message} />
        </div>
      </PrivateRoute>
      
      <PrivateRoute path='/dashboard/save/'>
        <SavedSongs />
      </PrivateRoute>
    </div>
  )
}
export default Dashboard;