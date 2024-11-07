let userAge = 12;

const isLogin = (username) => {
  if (username === "amin" || username === "mohammad") {
    return true;
  } else {
    return false;
  }
};

const register = (username) => {
  if (username) {
    return true;
  } else {
    return false;
  }
};

const getMe = (user) => {
  if(user) {
    return user;
  } else {
    return false
  }
};

const addCourse = (course) => {
  return course;
}
 