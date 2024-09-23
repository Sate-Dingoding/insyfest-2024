import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="relative w-full">
      <Sidebar></Sidebar>
      <div className="ms-80 mt-6">
        <p className="text-4xl text-navy-blue font-medium">Have A nice day, <span className="font-bold">Agnella!</span></p>
        {/* <div> */}

        {/* </div> */}
      </div>
      {/* <div className="p-6 bg-gray-100 min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Upcoming tasks</h2>
            <ul>
              <li className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-pink-600">Welcoming party design MABA CUP</span>
                <span className="text-gray-600">18 Sep 2024 18:30</span>
              </li>
              <li className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-pink-600">Praktikum Dasar Pemrograman Modul 1</span>
                <span className="text-gray-600">20 Sep 2024 15:30-17:30</span>
              </li>
              <li className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-pink-600">Quiz 1 Aljabar Linear</span>
                <span className="text-gray-600">21 Sep 2024 08:00-11:00</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Calendar</h2>
              <button className="text-gray-400 hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="h-24 bg-gray-50 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Calendar content goes here</span>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Courses</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-yellow-200 p-4 rounded-lg flex items-center justify-center">
              <span className="font-semibold">Aljabar Linear (A)</span>
            </div>
            <div className="bg-purple-200 p-4 rounded-lg flex items-center justify-center">
              <span className="font-semibold">Dasar Pemrograman (C)</span>
            </div>
            <div className="bg-yellow-100 p-4 rounded-lg flex items-center justify-center">
              <span className="font-semibold">Sistem Basis Data (C)</span>
            </div>
            <div className="bg-green-200 p-4 rounded-lg flex items-center justify-center">
              <span className="font-semibold">Sistem</span>
            </div>
          </div>
        </div>
      </div> */}

    </div>
  );
}
