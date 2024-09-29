import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="relative w-full">
      <Sidebar></Sidebar>
      <div className="ms-80 mt-6 me-6">
        <p className="text-4xl text-navy-blue font-medium">Have A nice day, <span className="font-bold">Agnella!</span></p>
        <div className="grid grid-cols-2 gap-2 p-4 bg-light-blue-100 rounded-2rem mt-6">
          {/* Upcoming Tasks Card */}
          <div className="bg-white border border-blue-100 rounded-2xl p-4">
            <p className="text-xl font-bold text-navy-blue">Upcoming tasks</p>
            <div>
              <div className="flex justify-between border-t border-light-blue-100">
                <p className="text-pink font-bold">Welcoming party design MABA CUP</p>
                {/* <div className="text-sm text-black font-montserrat items-end"></div> */}
                <p className="text-sm text-black font-montserrat text-right font-medium">18 Sep 2024<br />18:30</p>
              </div>
              <div className="flex justify-between border-t border-light-blue-100">
                <p className="text-pink font-bold">Praktikum Dasar Pemrograman Modul 1</p>
                <p className="text-sm text-black font-montserrat text-right font-medium">20 Sep 2024<br />15:30-17:30</p>
              </div>
              <div className="flex justify-between border-t border-light-blue-100">
                <p className="text-pink font-bold">Quiz 1 Aljabar Linear</p>
                <p className="text-sm text-black font-montserrat text-right font-medium">21 Sep 2024<br />08:00-11:00</p>
              </div>
            </div>
          </div>
          {/* Calendar Card */}
          <div className="bg-white border border-blue-100 rounded-2xl p-4 relative">
            <p className="text-xl font-bold text-navy-blue border-b border-light-blue-100">Calendar</p>
            <button className="absolute top-4 right-4 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3.172 3.172a4 4 0 015.656 0l.83.83a4 4 0 010 5.656l-5.656 5.656a4 4 0 01-5.656-5.656l.83-.83a4 4 0 015.656 0z" />
                <path d="M6.586 6.586a2 2 0 10-2.828 2.828L4.586 10l-1.414 1.414a2 2 0 002.828 2.828L10 13.414l1.414 1.414a2 2 0 002.828-2.828L13.414 10l1.414-1.414a2 2 0 00-2.828-2.828L10 6.586 8.586 5.172z" />
              </svg>
            </button>
          </div>
          {/* Upcoming Courses Card */}
          <div className="bg-white border border-blue-100 rounded-2xl p-4 relative col-span-2">
            <p className="text-xl font-bold text-navy-blue">Courses</p>
            <button className="absolute top-4 right-4 text-gray-500 text-xl">
              +
            </button>
          </div>
          <div className="bg-white border border-blue-100 rounded-2xl p-4 relative col-span-2">
            <p className="text-xl font-bold text-navy-blue">Tasks progress</p>
            <button className="absolute top-4 right-4 text-gray-500 text-xl">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
