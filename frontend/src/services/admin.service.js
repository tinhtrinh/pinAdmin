import { requestUrl } from "../config/request-url";
import { requestService } from "./request.service";

const getAllUser = () => requestService.get(requestUrl.getAllUser);
const getAllComment = () => requestService.get(requestUrl.getAllComment);
const deleteCommentById = (commentId) => requestService.getWithoutTrackLoading(`${requestUrl.deleteCommentById}/${commentId}`);

export const adminService = {
  getAllUser,
  getAllComment,
  deleteCommentById
};
