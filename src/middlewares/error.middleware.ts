import { Request, Response, NextFunction } from "express";

// export function SeverError(
//   err: any,
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) {
//   res.status(err.status || 500);
//   res.json({
//     error: {
//       message: err.message,
//     },
//   });
// }

// export function notFoundError(req: Request, res: Response, next: NextFunction) {
//   const err = new Error("Not Found") as any;
//   err.status = 404;
//   next(err);
// }
