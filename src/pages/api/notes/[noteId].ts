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
      const { noteId } = req.query;

      if (!noteId) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "Note ID is required");
      }

      const note = await prisma.notes.findUnique({
        where: { id: noteId as string },
      });

      if (!note) {
        throw new CustomError(StatusCodes.NOT_FOUND, "Notes not found");
      }

      const course = await prisma.course.findUnique({
        where: { id: note.courseId },
      });
      responseSuccess(res, StatusCodes.OK, true, "Notes retrieved successfully", {
        title: note.title,
        content: note.content,
        course: course?.name
      });
    } catch (error) {
      responseError(res, false, error);
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
