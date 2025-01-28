import React from 'react'
import { useParams,useLocation } from 'react-router-dom'


const Profile = () => {
    const {username} = useParams()
    // const locate = useLocation()
    // console.log(locate);
    
  return (
    <div>
      hi from profile {username}
    </div>
  )
}

export default Profile
