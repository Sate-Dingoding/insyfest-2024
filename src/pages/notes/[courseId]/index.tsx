import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Sidebar from "@/components/Sidebar";

interface Note {
  id: string;
  title: string;
  content: string;
  updatedAt: string;
}

export default function CourseNotes() {
  const router = useRouter();
  const { courseId } = router.query;
  const [courseName, setCourseName] = useState("");
  const [notes, setNotes] = useState<Note[]>([]);
  const handleNoteClick = (noteId: string) => {
    router.push(`/notes/${courseId}/${noteId}`);
  };

  useEffect(() => {
    if (!courseId) return;

    const fetchCourseNotes = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No token found");
          router.push("/login");
          return;
        }

        const response = await fetch(`/api/courses/${courseId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await response.json();
        if (result.success) {
          setCourseName(result.data.courseName);
          setNotes(result.data.notes);
        } else {
          console.error(result.message);
        }
      } catch (error) {
        console.error("Error fetching course notes:", error);
      }
    };

    fetchCourseNotes();
  }, [courseId]);

  
  return (
    <div className="relative w-full">
      <Sidebar />
      <div className="bg-white rounded-2xl p-4 relative col-span-2 ms-80 me-6">
        <p className="text-3xl font-bold text-navy-blue border-b-2 border-[#D3D3D3] pb-2 mb-4">
          {courseName || "Loading..."}
        </p>
        <div className="flex flex-wrap">
          {notes.map((note) => (
            <div key={note.id} className="w-[24%] mr-8 cursor-pointer" onClick={() => handleNoteClick(note.id)}>
              <div className="relative border-2 overflow-hidden w-full h-72 text-black rounded-2xl p-2">
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/70 to-transparent"></div>
                <p>{note.content}</p>
              </div>
              <p className="text-navy-blue text-2xl font-bold">{note.title}</p>
              <p className="text-[#D3D3D3] text-base">
                {new Date(note.updatedAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
