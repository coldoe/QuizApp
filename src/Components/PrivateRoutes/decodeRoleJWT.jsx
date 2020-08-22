export const decode = (jwt) => {
  try {
    const base = jwt.token.split(".")[1];
    const dec = base.replace("-", "+").replace("_", "/");
    const decoded = JSON.parse(atob(dec));
    console.log(decoded);
    let date = new Date();
    // && decoded.exp < date.getTime()
    if (decoded) return true;
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const decodeRole = (jwt) => {
  try {
    const base = jwt.token.split(".")[1];
    const dec = base.replace("-", "+").replace("_", "/");
    const decoded = JSON.parse(atob(dec));
    let date = new Date();
    if (decoded && decoded.role === "admin") {
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};
