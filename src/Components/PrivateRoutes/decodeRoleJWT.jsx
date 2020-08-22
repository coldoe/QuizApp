export const decode = (jwt) => {
  try {
    const base = jwt.split(".")[1];
    const dec = base.replace("-", "+").replace("_", "/");
    const decoded = JSON.parse(atob(dec));
    let date = new Date();
    if (decoded && decoded.exp < date.getTime()) return true;
    return false;
  } catch (error) {
    return false;
  }
};

export const decodeRole = (jwt) => {
  try {
    const base = jwt.split(".")[1];
    const dec = base.replace("-", "+").replace("_", "/");
    const decoded = JSON.parse(atob(dec));
    let date = new Date();
    if (decoded && decoded.exp < date.getTime() && decoded.role === "admin") {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};
