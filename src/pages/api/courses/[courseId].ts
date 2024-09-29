import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import {
  responseError,
  responseSuccess,
} from "@/utils/API-Response";
import { StatusCodes } from "http-status-codes";
import { CustomError } from "@/utils/ErrorHandling";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const { courseId } = req.query;

      if (!courseId) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "Course ID is required");
      }

      const course = await prisma.course.findUnique({
        where: { id: courseId as string },
        include: {
          notes: true,
        },
      });

      if (!course) {
        throw new CustomError(StatusCodes.NOT_FOUND, "Course not found");
      }

      responseSuccess(res, StatusCodes.OK, true, "Notes retrieved successfully", {
        courseName: course.name,
        notes: course.notes,
      });
    } catch (error) {
      responseError(res, false, error);
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
