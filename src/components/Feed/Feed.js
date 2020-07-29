import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import CupCard from "./CupCard";
import FollowCard from "./FollowCard";
import { client, makeFeed } from "../../utils/index";
import { UserContext } from "../../context/UserContext";
import DiscoverCard from "./DiscoverCard";
import CardLoader from "../Loaders/CardLoader";

const FeedWrapper = styled.div`
  position: relative;
  width: 100%;

  @media screen and (min-width: 830px) {
    margin-left: calc(33vw + 20px);
    padding-top: 20px;
  }

  @media screen and (min-width: 1060px) {
    margin-left: 370px;
  }

  a:hover {
    color: ${(props) => props.theme.blue};
  }
`;

const Feed = () => {
  const { user } = useContext(UserContext);
  const [feedList, setFeedList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { feed } = await client(`/users/feed`);
      const list = makeFeed(feed);
      setFeedList(list);
      setLoading(false);
    })();
  }, [setFeedList, setLoading, user]);

  if (user.following.length === 0) return <DiscoverCard />;
  if (loading) return <CardLoader />;
  return (
    <FeedWrapper>
      {feedList.map((details, i) => {
        if (details.cup) {
          return <CupCard key={i} details={details.cup} />;
        } else if (details.follow) {
          return <FollowCard key={i} details={details.follow} />;
        } else {
          return "";
        }
      })}
    </FeedWrapper>
  );
};

export default Feed;
