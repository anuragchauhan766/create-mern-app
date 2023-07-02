import { NextFunction, Response, Request } from "express";
import ErrorResponse from "../utils/ErrorResponse.js";

const errorHandler = (
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  res.status(500).json({
    success: false,
    error,
  });
};
export default errorHandler;
