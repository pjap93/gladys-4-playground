const AUTH_FILE = '/authentication.json';

const loadBlockstack = () =>
  new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = '/assets/blockstack/blockstack-bundle.js';
    document.body.appendChild(script);

    script.onload = () => {
      resolve();
    };
  });

const generateToken = () =>
  Math.random()
    .toString(36)
    .slice(-8) +
  Math.random()
    .toString(36)
    .slice(-8) +
  Math.random()
    .toString(36)
    .slice(-8) +
  Math.random()
    .toString(36)
    .slice(-8);

const getAuthInfos = async userSession => {
  const userData = userSession.loadUserData();
  // we check if the auth informations exists on Blockstack side.
  let authInfos = await userSession.getFile(AUTH_FILE);
  // if yes, we try to parse them
  if (authInfos) {
    try {
      const parsedInfos = JSON.parse(authInfos);
      // if they are parsed and have the right informations
      if (parsedInfos.email && parsedInfos.token) {
        // we return them
        return parsedInfos;
      }
    } catch (e) {}
  }

  authInfos = {
    email: `${userData.username}@blockstack.org`,
    token: generateToken()
  };

  await userSession.putFile(AUTH_FILE, JSON.stringify(authInfos));
  return authInfos;
};

export { loadBlockstack, getAuthInfos };
