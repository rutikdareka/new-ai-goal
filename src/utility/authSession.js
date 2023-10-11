const Setauthentication = () => {
  return localStorage.setItem("sharly-auth", "test");
};

Setauthentication();

const checkauth = () => {
  const auth_token = localStorage.getItem("sharly-auth");
  if (auth_token) {
    return auth_token;
  }
  return null;
};

export { checkauth };
