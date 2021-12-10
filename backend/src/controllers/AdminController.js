import adminService from "../services/AdminService";
import Log from "../core/logging";

export default {
  getAllUser: async (req, res, next) => {
    adminService
      .getAllUser()
      .then((result) => {
        return res.status(200).json(result);
      })
      .catch((error) => {
        Log.error("AdminService", error.message, error);
        return res.status(error.code).json(error);
      });
  },

  deleteUserById: async (req, res, next) => {
    let { userId } = req.params;
    adminService.deleteUserById(userId)
    .then((result) => {
      return res.status(200).json();
    })
    .catch(error => {
      Log.error('AdminService', error.message, error);
      return res.status(error.code).json(error);
    })
  },

  getAllComment: async (req, res, next) => {
    adminService
      .getAllComment()
      .then((result) => {
        return res.status(200).json(result);
      })
      .catch((error) => {
        Log.error("AdminService", error.message, error);
        return res.status(error.code).json(error);
      });
  },

  deleteCommentById: async (req, res, next) => {
    let { commentId } = req.params;
    adminService.deleteCommentById(commentId)
    .then((result) => {
      return res.status(200).json();
    })
    .catch(error => {
      Log.error('AdminService', error.message, error);
      return res.status(error.code).json(error);
    })
  }
};