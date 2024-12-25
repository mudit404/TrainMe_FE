// const ROOT_URL = "https://coursex.onrender.com/";
// const ROOT_URL = "http://127.0.0.1:8000/api/";
const ROOT_URL = "https://trainme-be.onrender.com/api/";

// Admin Routes

const ADMIN_SIGNUP_URL = ROOT_URL + "admin/signup";
const ADMIN_LOGIN_URL = ROOT_URL + "token/";
const ADMIN_COURSES_URL = ROOT_URL + "admin/courses";

// User Routes
// const USER_COURSE_URL = ROOT_URL + "users/courses";
const USER_COURSE_URL = ROOT_URL + "courses/";
const COURSE_BY_ID = ROOT_URL + "courses/";
const USER_PURCHASED_URL = ROOT_URL + "users/purchasedcourses";
// const USER_LOGIN_URL = ROOT_URL + "users/login/";
const USER_LOGIN_URL = ROOT_URL + "auth/login/";
// const USER_SIGNUP_URL = ROOT_URL + "users/signup/";
const USER_SIGNUP_URL = ROOT_URL + "auth/signup/";

const ALL_COURSES= ROOT_URL + "courses/"

export {
  ROOT_URL,
  USER_COURSE_URL,
  USER_PURCHASED_URL,
  USER_LOGIN_URL,
  USER_SIGNUP_URL,
  ADMIN_LOGIN_URL,
  ADMIN_SIGNUP_URL,
  ADMIN_COURSES_URL,
  ALL_COURSES,
  COURSE_BY_ID,
};

// Bearer Token for admin 
// {
//   "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczNDk3NjIwMCwiaWF0IjoxNzM0ODg5ODAwLCJqdGkiOiJkN2U0ODczNWM4YjU0MDMwODA3MDg5ZmQ2MDY1NzJjZiIsInVzZXJfaWQiOjF9.NWyYCjUunwHlecd9uKedzpPn8Em7JIAaDAQDdReWMYU",
//   "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM0ODkwNDAwLCJpYXQiOjE3MzQ4ODk4MDAsImp0aSI6IjBkZTczMDc2Mzc0YjQ4YThhMDM4ZDdjNzQyZDkwNjU0IiwidXNlcl9pZCI6MX0.T526C_1JvcBvwPeRx26CGQyS7IF6yO__5rHGoxcVjmc"
// }