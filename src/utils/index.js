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
        numCups,
        numFollowers,
        fullName,
        username: userFollowed,
        profileImageUrl: userFollowedImg,
      } = user;
      entry = {
        ...entry,
        ...{ numCups, numFollowers, fullName, userFollowed, userFollowedImg },
      };
      entries.push({follow:entry})
    });
  });
  return entries
};
