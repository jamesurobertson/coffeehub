import React from 'react'

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
  return fetch(
    `${process.env.REACT_APP_BACKEND_URL}/api${endpoint}`,
    config
  ).then(async (res) => {
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
        user: {username: roastUsername},
        id: roastId
      } = roast;

      entry = {
        ...entry,
        ...{ name, description, beanOrigin, numLikes, createdAt, roastUsername, roastId },
      };
      entries.push({cup: entry});
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
        id
      } = user;
      entry = {
        ...entry,
        ...{ numRoasts, numFollowers, fullName, userFollowed, userFollowedImg, bio, id},
      };
      entries.push({follow:entry})
    });
  });
  return entries
};

export const ErrorMessage = ({ error }) => {
    console.log(error)
  if (error) {
    switch (error.type) {
      case "required":
        return <p>Required</p>;
      case "minLength":
        return <p>Must be at least 2 characters</p>;
      case "pattern":
        return <p>Can not have any spaces</p>;
      case "min":
        return <p>Minmium age is 18</p>;
      case "validate":
        return <p>Username is already used</p>;
      default:
        return null;
    }
  }

  return null;
}
