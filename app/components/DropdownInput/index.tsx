"use client";
import React, { useCallback, useState, useMemo } from "react";
import users from "@/app/constant/MOCK_JSON.json";
import Chip from "../Chip";

export type User = {
  id: number;
  name: string;
  email: string;
};

const DropdownInput: React.FC = () => {
  const customUsers: User[] = users.slice(-10);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
  const [lastBackspacedUser, setLastBackspacedUser] = useState<User | null>(
    null
  );

  const handleUserClick = (user: User) => {
    setSelectedUsers([...selectedUsers, user]);
    setIsOpen(false);
    setValue("");
  };

  const handleUserSelect = useCallback((selectedUser: User) => {
    setSelectedUsers((prevUsers) =>
      prevUsers.filter((user: User) => user.id !== selectedUser.id)
    );
  }, []);

  const filteredUsers = useMemo(() => {
    if (!isOpen) return [];

    return customUsers.filter(
      (user) =>
        !selectedUsers.includes(user) &&
        user.name.toLowerCase().includes(value.toLowerCase())
    );
  }, [isOpen, selectedUsers, value, customUsers]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace" && value === "") {
      if (selectedUsers.length > 0) {
        const lastSelectedUser = selectedUsers[selectedUsers.length - 1];
        if (lastSelectedUser === lastBackspacedUser) {
          handleUserSelect(lastSelectedUser);
          setLastBackspacedUser(null);
        } else {
          setLastBackspacedUser(lastSelectedUser);
        }
      }
    } else {
      setLastBackspacedUser(null);
    }
  };

  const renderDropdown = () => {
    if (!isOpen) return null;

    return (
      <ul className="absolute w-full max-h-80 overflow-y-auto no-scrollbar py-1 mt-2 bg-emerald-600 border-gray-300 rounded-md shadow-lg">
        {filteredUsers.map((user) => (
          <li
            key={user.id}
            onClick={() => handleUserClick(user)}
            className="px-3 py-2 cursor-pointer hover:bg-emerald-800 text-emerald-100 text-sm flex gap-2 items-center"
          >
            {user.name}
            <span className="text-xs font-light">{user.email}</span>
          </li>
        ))}
        {selectedUsers.length === customUsers.length && (
          <li
            key={"none-result"}
            className="px-3 py-2 cursor-pointer hover:bg-emerald-800 text-emerald-100 text-sm"
          >
            No Results to select!
          </li>
        )}
      </ul>
    );
  };

  return (
    <div className="relative min-w-64 max-w-[400px] my-2">
      <div className="flex flex-wrap items-center w-full p-1 outline-none bg-black outline-white rounded-md text-sm">
        {selectedUsers.map((user) => (
          <Chip
            key={`${user.id}$${user.name}`}
            user={user}
            lastBackspacedUser={lastBackspacedUser}
            handleUserSelect={handleUserSelect}
          />
        ))}
        <input
          type="text"
          value={value}
          placeholder="Type a name..."
          onKeyDown={handleKeyDown}
          onClick={() => setIsOpen(!isOpen)}
          onChange={(e) => setValue(e.target.value)}
          className="flex-grow outline-none bg-transparent placeholder:text-zinc-200 focus:ring-emerald-500 p-2"
        />
      </div>
      {renderDropdown()}
    </div>
  );
};

export default DropdownInput;
