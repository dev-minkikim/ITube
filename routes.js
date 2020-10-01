// Global routes

const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// User routes

const USER = "/user";
const PROFILE = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// Vidoes routes

const VIDEOS = "/viodes";
const VIDEO_DETAIL = "/:id";
const VIDEO_EDIT = "/:id/edit";
const VIDEO_DELETE = "/:id/delete";
const UPLOAD = "/upload";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  user: USER,
  profile: PROFILE,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  videos: VIDEOS,
  videoDetail: VIDEO_DETAIL,
  videoEdit: VIDEO_EDIT,
  videoDelete: VIDEO_DELETE,
  upload: UPLOAD,
};

export default routes;
