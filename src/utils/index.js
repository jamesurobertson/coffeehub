import React from "react";
import { backendURL } from "../config/index";

export const client = (endpoint, { body, ...customConfig } = {}) => {
  const token = localStorage.getItem("COFFEEHUB_ACCESS_TOKEN");
  const headers = { "Content-Type": "application/json" };
  if (token) {
    headers.Authorization = `${token}`;
  }

  const config = {
    method: body ? "POST" : "GET",
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }
  return fetch(`${backendURL}/api${endpoint}`, config).then(async (res) => {
    const data = await res.json();

    if (res.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
};

export const makeFeed = (feedData) => {
  const entries = [];
  feedData.forEach((user) => {
    const {
      cupped_roasts: cuppedRoasts,
      followed_users: followedUsers,
      username,
      profileImageUrl,
    } = user;

    cuppedRoasts.forEach((roast) => {
      let entry = { username, profileImageUrl };
      const {
        name,
        description,
        origin: { name: beanOrigin },
        numLikes,
        createdAt,
        user: { username: roastUsername },
        id: roastId,
        cupTime,
      } = roast;

      entry = {
        ...entry,
        ...{
          name,
          description,
          beanOrigin,
          numLikes,
          createdAt,
          roastUsername,
          roastId,
          time: cupTime,
        },
      };
      entries.push({ cup: entry });
    });

    followedUsers.forEach((user) => {
      let entry = { username, profileImageUrl };
      const {
        numRoasts,
        numFollowers,
        fullName,
        username: userFollowed,
        profileImageUrl: userFollowedImg,
        bio,
        id,
        followTime,
      } = user;
      entry = {
        ...entry,
        ...{
          numRoasts,
          time: followTime,
          numFollowers,
          fullName,
          userFollowed,
          userFollowedImg,
          bio,
          id,
        },
      };
      entries.push({ follow: entry });
    });
  });

  const sortedEntries = entries.sort((a, b) => {
    let timeA;
    let timeB;
    a.cup ? (timeA = a.cup.time) : (timeA = a.follow.time);
    b.cup ? (timeB = b.cup.time) : (timeB = b.follow.time);

    return new Date(timeA) > new Date(timeB) ? -1 : 1;
  });
  return sortedEntries;
};

export const ErrorMessage = ({ error }) => {
  if (error) {
    switch (error.type) {
      case "required":
        return <p>Required</p>;
      case "minLength":
        return <p>Must be at least 2 characters</p>;
      case "pattern":
        if (error.ref.name === 'email') {
            return (
                <p> Please enter a valid email.</p>
            )
        } else if (error.ref.name === 'password') {
            return (
                <p> Must be atleast 8 characters long and include atleast one number and one letter.</p>
            )
        }
        return (
          <p>
            No spaces or special characters except for dashes, underscores, and
            periods.
          </p>
        );
      case "validate":
        return <p>Already taken</p>;
      default:
        return null;
    }
  }

  return null;
};
