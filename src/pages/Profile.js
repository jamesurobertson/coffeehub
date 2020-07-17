import React from 'react'
import styled from 'styled-components'
import ProfileHeader from '../components/Profile/ProfileHeader'
import ProfileUserDetails from '../components/Profile/ProfileUserDetails'
import ProfileMain from '../components/Profile/ProfileMain'

const ProfileWrapper = styled.div`
    display: flex;
    flex-flow: column;
    max-width: 1250px;
    margin: 0 auto;
    border: 1px solid black;

`

const Profile = () => {
    return (
        <ProfileWrapper>
            <ProfileHeader>Hi</ProfileHeader>
            <div style={{display: 'flex'}}>
            <ProfileUserDetails/>
            <ProfileMain/>
            </div>
        </ProfileWrapper>
    )
}

export default Profile
