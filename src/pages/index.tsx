import Sidebar from "@/components/Sidebar";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState({ username: "", email: "" });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          console.error("No token found");
          return;
        }

        const response = await fetch("/api/user/me", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await response.json();
        if (result.success) {
          setUser(result.data);
        } else {
          console.error(result.message);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);
  return (
    <div className="relative w-full">
      <Sidebar></Sidebar>
      <div className="ms-80 mt-6 me-6">
        <p className="text-4xl text-navy-blue font-medium">
          Have A nice day,{" "}
          <span className="font-bold">{user.username || "User"}!</span>
        </p>
        <div className="grid grid-cols-2 gap-2 p-4 bg-light-blue-100 rounded-2rem mt-6">
          {/* Upcoming Tasks Card */}
          <div className="bg-white border-2 border-blue-100 rounded-2xl p-4">
            <p className="text-xl font-bold text-navy-blue">Upcoming tasks</p>
            <div>
              <div className="flex justify-between border-t border-light-blue-100">
                <p className="text-pink font-bold">
                  Welcoming party design MABA CUP
                </p>
                {/* <div className="text-sm text-black font-montserrat items-end"></div> */}
                <p className="text-sm text-black font-montserrat text-right font-medium">
                  18 Sep 2024
                  <br />
                  18:30
                </p>
              </div>
              <div className="flex justify-between border-t border-light-blue-100">
                <p className="text-pink font-bold">
                  Praktikum Dasar Pemrograman Modul 1
                </p>
                <p className="text-sm text-black font-montserrat text-right font-medium">
                  20 Sep 2024
                  <br />
                  15:30-17:30
                </p>
              </div>
              <div className="flex justify-between border-t border-light-blue-100">
                <p className="text-pink font-bold">Quiz 1 Aljabar Linear</p>
                <p className="text-sm text-black font-montserrat text-right font-medium">
                  21 Sep 2024
                  <br />
                  08:00-11:00
                </p>
              </div>
            </div>
          </div>
          {/* Calendar Card */}
          <div className="bg-white border-2 border-blue-100 rounded-2xl p-4 relative">
            <p className="text-xl font-bold text-navy-blue border-b border-light-blue-100">
              Calendar
            </p>
            <button className="absolute top-4 right-4 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3.172 3.172a4 4 0 015.656 0l.83.83a4 4 0 010 5.656l-5.656 5.656a4 4 0 01-5.656-5.656l.83-.83a4 4 0 015.656 0z" />
                <path d="M6.586 6.586a2 2 0 10-2.828 2.828L4.586 10l-1.414 1.414a2 2 0 002.828 2.828L10 13.414l1.414 1.414a2 2 0 002.828-2.828L13.414 10l1.414-1.414a2 2 0 00-2.828-2.828L10 6.586 8.586 5.172z" />
              </svg>
            </button>
          </div>
          {/* Upcoming Courses Card */}
          <div className="bg-white border-2 border-blue-100 rounded-2xl p-4 relative col-span-2">
            <p className="text-xl font-bold text-navy-blue border-b border-light-blue-100 pb-2">
              Courses
            </p>
            <button className="absolute top-4 right-4 text-gray-500 text-xl">
              <img src="/assets/add.png" alt="+" />
            </button>
            <div className="w-full overflow-x-auto hide-scrollbar">
              <div className="flex space-x-8 mt-4">
                <div className="relative flex-shrink-0">
                  <img src="/assets/CCEFC7.png" alt="folder" />
                  <div className="absolute inset-0 flex items-end justify-center text-navy-blue font-bold text-xl">
                    <p className="bg-beige mb-4 min-w-[248px] text-center py-2 rounded-lg">
                      Aljabar Linear
                    </p>
                  </div>
                </div>
                <div className="relative flex-shrink-0">
                  <img src="/assets/CCEFC7.png" alt="folder" />
                  <div className="absolute inset-0 flex items-end justify-center text-navy-blue font-bold text-xl">
                    <p className="bg-beige mb-4 min-w-[248px] text-center py-2 rounded-lg">
                      Aljabar Linear
                    </p>
                  </div>
                </div>
                <div className="relative flex-shrink-0">
                  <img src="/assets/CCEFC7.png" alt="folder" />
                  <div className="absolute inset-0 flex items-end justify-center text-navy-blue font-bold text-xl">
                    <p className="bg-beige mb-4 min-w-[248px] text-center py-2 rounded-lg">
                      Aljabar Linear
                    </p>
                  </div>
                </div>
                <div className="relative flex-shrink-0">
                  <img src="/assets/CCEFC7.png" alt="folder" />
                  <div className="absolute inset-0 flex items-end justify-center text-navy-blue font-bold text-xl">
                    <p className="bg-beige mb-4 min-w-[248px] text-center py-2 rounded-lg">
                      Aljabar Linear
                    </p>
                  </div>
                </div>
                <div className="relative flex-shrink-0">
                  <img src="/assets/CCEFC7.png" alt="folder" />
                  <div className="absolute inset-0 flex items-end justify-center text-navy-blue font-bold text-xl">
                    <p className="bg-beige mb-4 min-w-[248px] text-center py-2 rounded-lg">
                      Aljabar Linear
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white border-2 border-blue-100 rounded-2xl p-4 relative col-span-2">
            <p className="text-xl font-bold text-navy-blue border-b border-light-blue-100 pb-2">
              Tasks progress
            </p>
            <button className="absolute top-4 right-4 text-gray-500 text-xl">
              <img src="/assets/add.png" alt="+" />
            </button>
            <div className="w-full mt-4 flex justify-between">
              <div className="w-[23%] rounded-2xl border-2 border-light-blue-100 min-h-96">
                <p className="text-2xl mt-2 font-bold mx-2 text-navy-blue border-b-2 border-light-blue-100 pb-2 text-center">
                  Not started
                </p>
              </div>
              <div className="w-[23%] rounded-2xl border-2 border-light-blue-100 min-h-96">
                <p className="text-2xl mt-2 font-bold mx-2 text-navy-blue border-b-2 border-yellow pb-2 text-center">
                  In progress
                </p>
              </div>
              <div className="w-[23%] rounded-2xl border-2 border-light-blue-100 min-h-96">
                <p className="text-2xl mt-2 font-bold mx-2 text-navy-blue border-b-2 border-green pb-2 text-center">
                  Completed
                </p>
              </div>
              <div className="w-[23%] rounded-2xl border-2 border-light-blue-100 min-h-96">
                <p className="text-2xl mt-2 font-bold mx-2 text-navy-blue border-b-2 border-pink pb-2 text-center">
                  Blocked
                </p>
                <div className="mx-2 my-1 border-2 border-light-blue-100 px-1 rounded-lg">
                  <p className="text-pink font-bold border-b border-pink">
                    Welcoming party design MABA CUP
                  </p>
                  <p className="text-xs text-black font-montserrat text-left font-medium">
                    18 Sep 2024 - 18:30
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
