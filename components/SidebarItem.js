import React from 'react';

const SidebarItem = (props) => {
  const { Icon, value } = props;
  return (
        <div className="flex justify-center space-x-2 py-2 pl-2 hover:bg-gray-200 rounded-l-xl cursor-pointer">
          <Icon size={20}/>
          <p className="hidden sm:inline-flex font-medium">
            { value }
          </p>
        </div>
  );
};

export default SidebarItem;
