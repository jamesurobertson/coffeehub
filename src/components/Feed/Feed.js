import React, {useState, useEffect, useContext} from "react";
import styled from "styled-components";
import CupCard from './CupCard'
import {client, makeFeed} from '../../utils/index'
import {UserContext} from '../../context/UserContext'

const FeedWrapper = styled.div`
    position: relative;
    margin: 0 20px;
    width: 100%;
    padding-top: 20px;
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
    }, [setFeedList, setLoading])

    if (loading) {
        return <CupCard/>
    }
    return (

        <FeedWrapper>
            {feedList.map((details, i) => {
                if (details.cup) {
                    return <CupCard key={i} details={details.cup}/>
                } else {
                    return <div key={i}/>
                }
            })}
        </FeedWrapper>
    )
}


export default Feed
