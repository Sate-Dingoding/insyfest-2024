import React, { useState, useEffect, useRef } from "react";

interface AddTaskModalProps {
  onClose: () => void;
  isVisible: boolean;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({ onClose, isVisible }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [taskDetails, setTaskDetails] = useState("");
  const [taskStatus, setTaskStatus] = useState("not-started");
  const [taskCategory, setTaskCategory] = useState("study");
  const modalRef = useRef<HTMLDivElement>(null);

  const handleCreate = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Login first to access this route");
      }
      const startDateTime = new Date(`${taskDate}T${startTime}`);
      const endDateTime = new Date(`${taskDate}T${endTime}`);

      const startTimeInMs = startDateTime.getTime();
      const endTimeInMs = endDateTime.getTime();
      const response = await fetch("/api/tasks/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: taskTitle,
          startTime: startTimeInMs,
          endTime: endTimeInMs,
          details: taskDetails,
          status: taskStatus,
          category: taskCategory,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create task");
      }

      const result = await response.json();
      console.log("Task created:", result);
      onClose();
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        console.log(event.target);
        
        onClose();
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[100] text-navy-blue">
      <div
        className="bg-white p-4 rounded-2xl shadow-lg min-w-[45%]"
        ref={modalRef}
      >
        <div className="mb-2">
          <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="Event Title"
            className="rounded-md p-2 w-full focus:outline-none placeholder:text-navy-blue text-navy-blue text-3xl font-bold border-b-2 border-[#D3D3D3]"
          />
        </div>

        <div className="flex space-x-4 mb-4">
          <div className="flex flex-col w-1/2">
            <label className="text-lg font-bold text-navy-blue mb-1">Date</label>
            <input
              type="date"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="p-2 rounded-md border border-gray-300 w-full"
            />
          </div>

          <div className="flex flex-col w-1/4">
            <label className="text-lg font-bold text-navy-blue mb-1">
              Start Time
            </label>
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="p-2 rounded-md border border-gray-300 w-full"
            />
          </div>

          <div className="flex flex-col w-1/4">
            <label className="text-lg font-bold text-navy-blue mb-1">
              End Time
            </label>
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="p-2 rounded-md border border-gray-300 w-full"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="text-lg font-bold text-navy-blue mb-1">Add Note</label>
          <textarea
            value={taskDetails}
            onChange={(e) => setTaskDetails(e.target.value)}
            placeholder="Details about the task..."
            className="p-2 rounded-md border border-gray-300 w-full h-24 resize-none"
          />
        </div>

        <div className="mb-4">
          <label className="text-lg font-bold text-navy-blue mb-1">Status</label>
          <select
            value={taskStatus}
            onChange={(e) => setTaskStatus(e.target.value)}
            className="p-2 rounded-md border border-gray-300 w-full"
          >
            <option value="not-started">Not Started</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="blocked">Blocked</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="text-lg font-bold text-navy-blue mb-1">Category</label>
          <select
            value={taskCategory}
            onChange={(e) => setTaskCategory(e.target.value)}
            className="p-2 rounded-md border border-gray-300 w-full"
          >
            <option value="study">Study</option>
            <option value="personal">Personal</option>
            <option value="others">Others</option>
          </select>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleCreate}
            className="bg-navy-blue text-white px-4 py-2 rounded-md hover:bg-opacity-90"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
