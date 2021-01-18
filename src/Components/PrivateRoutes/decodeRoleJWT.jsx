export const decode = (jwt) => {
  try {
    const base = jwt.token.split(".")[1];
    const dec = base.replace("-", "+").replace("_", "/");
    const decoded = JSON.parse(atob(dec));
    if (decoded) return true;
    return false;
  } catch (error) {
    return false;
  }
};

export const decodeRole = (jwt) => {
  try {
    const base = jwt.token.split(".")[1];
    const dec = base.replace("-", "+").replace("_", "/");
    const decoded = JSON.parse(atob(dec));
    if (decoded && decoded.role === "admin") {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};
