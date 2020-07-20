import React, {useState, useEffect, useContext} from "react";
import styled from "styled-components";
import CupCard from './CupCard'
import FollowCard from './FollowCard'
import {client, makeFeed} from '../../utils/index'
import {UserContext} from '../../context/UserContext'

const FeedWrapper = styled.div`
    position: relative;
    margin: 0 20px;
    width: 100%;
    padding-top: 20px;

    a:hover {
        color: ${(props) => props.theme.blue};
    }
`

const Feed = () => {
    const {user} = useContext(UserContext)
    const [feedList, setFeedList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async() => {
            const {feed} = await client(`/users/${user.id}/feed`)
            const list = makeFeed(feed)
            setFeedList(list)
            setLoading(false)
        })()
    }, [setFeedList, setLoading, user])

    if (loading) {
        return <div> Loading...</div>
    }
    return (

        <FeedWrapper>
            {feedList.map((details, i) => {
                if (details.cup) {
                    return <CupCard key={i} details={details.cup}/>
                } else if (details.follow){
                    return <FollowCard key={i} details={details.follow}/>
                } else {
                    return ''
                }
            })}
        </FeedWrapper>
    )
}


export default Feed
