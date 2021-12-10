import { requestUrl } from "../config/request-url";
import { requestService } from "./request.service";

const getAllUser = () => requestService.get(requestUrl.getAllUser);
const getAllComment = () => requestService.get(requestUrl.getAllComment);
const deleteCommentById = (commentId) => requestService.getWithoutTrackLoading(`${requestUrl.deleteCommentById}/${commentId}`);
const deleteUserById = (userId) => requestService.getWithoutTrackLoading(`${requestUrl.deleteUserById}/${userId}`);

export const adminService = {
  getAllUser,
  getAllComment,
  deleteCommentById,
  deleteUserById
};
