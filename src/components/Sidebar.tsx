import React from 'react';

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 bottom-0 w-[280px] bg-beige h-screen rounded-e-[21px] flex flex-col items-start pt-6 pl-6">
      <img src="/assets/logo-with-text.png" alt="Logo" className="w-[208px]" />
      <div className='font-mono text-2xl text-navy-blue font-medium flex items-center mt-20'>
        <img src="/assets/calendar_today.png" alt="icon" className='w-[50px] h-[50px]'/>
        <a href="/calendar" className='ms-2'>Calendar</a>
      </div>
      <div className='font-mono text-2xl text-navy-blue font-medium flex items-center mt-4'>
        <img src="/assets/check_circle.png" alt="icon" />
        <a href="/tracker" className='ms-2'>Tasks tracker</a>
      </div>
      <div className='font-mono text-2xl text-navy-blue font-medium flex items-center mt-4'>
        <img src="/assets/alarm.png" alt="icon" />
        <a href="/timer" className='ms-2'>Timer</a>
      </div>
      <div className='font-mono text-2xl text-navy-blue font-medium flex items-center mt-4'>
        <img src="/assets/folder.png" alt="icon" />
        <a href="/courses" className='ms-2'>Courses</a>
      </div>
      <div className='font-mono text-2xl text-navy-blue font-medium flex items-center mt-4'>
        <img src="/assets/Group.png" alt="icon" />
        <a href="/notes" className='ms-2'>Notes</a>
      </div>
      <div className='flex-grow'></div>
      <div className='font-mono text-2xl text-navy-blue font-medium flex items-center mt-8 justify-self-end mb-8'>
        <img src="/assets/profile.png" alt="icon" />
        <div>
          <p className='ms-2'>Agnella</p>
          <p className='ms-2 font-montserrat text-sm text-pink'>agnella99@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;