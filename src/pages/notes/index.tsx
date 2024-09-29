import React, { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import AddCourseModal from "@/components/AddCourseModal";

export default function Home() {
  return (
    <div className="relative w-full">
      <Sidebar />
      <div className="bg-white rounded-2xl p-4 relative col-span-2 ms-80 me-6">
        <p className="text-3xl font-bold text-navy-blue border-b-2 border-light-blue-100 pb-2">
          Notes
        </p>
      </div>
    </div>
  );
}
