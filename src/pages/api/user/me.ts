import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { responseError, responseSuccess } from "@/utils/API-Response";
import { verifyAccessToken } from "@/utils/JWT-Token"; // function to verify JWT
import { StatusCodes } from "http-status-codes";
import { CustomError } from "@/utils/ErrorHandling";
import { JwtPayload } from "jsonwebtoken";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      console.log(req.headers.authorization);
      
      const token = req.headers.authorization?.split(" ")[1];

      if (!token) {
        throw new CustomError(StatusCodes.UNAUTHORIZED, "Login first to access this route");
      }

      const decoded = verifyAccessToken(token);

      if (!decoded) {
        throw new CustomError(StatusCodes.UNAUTHORIZED, "Invalid token");
      }

      const userId = (decoded as JwtPayload).id as string;

      const user = await prisma.user.findUnique({
        where: {
          id: userId,
        },
      });

      if (!user) {
        throw new CustomError(StatusCodes.NOT_FOUND, "User not found");
      }

      responseSuccess(res, StatusCodes.OK, true, "User retrieved successfully", {
        id: user.id,
        username: user.username,
        email: user.email,
      });

    } catch (error) {
      responseError(res, false, error);
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
