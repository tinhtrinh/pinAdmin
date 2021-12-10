import User, { UserSchema } from "../models/User";
import Comment from "../models/Comment";

export default {
  getAllUser: async () => {
    return User.find().then(
      async (user) => {
        if (user.length === 0)
          return Promise.reject(new ServiceError(400, "user not existed!"));
        return Promise.resolve(user);
      },
      async (error) => {
        return Promise.reject(new ServiceError(500, error.message, error));
      }
    );
  },
  
  getAllComment: async () => {
    return Comment.find().then(
      async (comment) => {
        if (comment.length === 0)
          return Promise.reject(new ServiceError(400, "comment not existed!"));
        return Promise.resolve(comment);
      },
      async (error) => {
        return Promise.reject(new ServiceError(500, error.message, error));
      }
    );
  },
};