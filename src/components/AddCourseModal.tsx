import React, { useState, useEffect, useRef } from "react";

interface AddCourseModalProps {
  onClose: () => void;
  isVisible: boolean;
}

const AddCourseModal: React.FC<AddCourseModalProps> = ({ onClose, isVisible }) => {
  const [courseTitle, setCourseTitle] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);

  const colors = [
    "#D79EB8",
    "#EEBC82",
    "#FFF4BB",
    "#CCEFC7",
    "#D7E8FE",
  ];

  const handleCreate = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log(selectedColor);
      const response = await fetch('/api/courses/add', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: courseTitle,
          color: selectedColor,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create course');
      }

      const result = await response.json();
      console.log('Course created:', result);
      onClose();
    } catch (error) {
      console.error('Error creating course:', error);
    }
  };

  // Close modal if clicked outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[100]">
      <div
        className="bg-white p-2 rounded-2xl shadow-lg ms-[280px] min-w-[45%]"
        ref={modalRef}
      >
        <div className="mb-2">
          <input
            type="text"
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
            placeholder="Course Title"
            className="rounded-md p-2 w-full focus:outline-none placeholder:text-navy-blue text-navy-blue text-3xl font-bold border-b-2 border-[#D3D3D3]"
          />
        </div>
        <div className="mb-2 ms-2">
          <label className="block text-lg font-bold text-navy-blue mb-1">
            Color
          </label>
          <div className="flex space-x-2">
            {colors.map((color) => (
              <button
                key={color}
                className={`w-8 h-8 rounded-full border ${
                  selectedColor === color
                    ? "border-blue-500"
                    : "border-gray-300"
                }`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </div>
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

export default AddCourseModal;
