import React, {
  ChangeEvent,
  Dispatch,
  KeyboardEvent,
  SetStateAction,
  useState,
} from "react";
import Greeting from "./Greeting";
import { UserType } from "./HW3";

type GreetingContainerPropsType = {
  users: UserType[]; // need to fix any
  addUserCallback: (name?: string) => void; // need to fix any
};

export const pureAddUser = (
  name: string,
  setError: Dispatch<React.SetStateAction<string | null>>,
  setName: Dispatch<React.SetStateAction<string>>,
  addUserCallback: (name: string) => void,
) => {
  if (!name.trim()) {
    setError("Name is required");
  } else {
    addUserCallback(name);
    setName(""); // Здесь используется setName для установки нового значения name
    setError(null);
  }
};

export const pureOnBlur = (
  name: string,
  setError: Dispatch<SetStateAction<string | null>>,
) => {
  if (!name.trim()) {
    setError("Name is required");
  }
};

export const pureOnEnter = (
  e: KeyboardEvent<HTMLInputElement>,
  addUserCallback: (name?: string) => void,
  name?: string,
) => {
  if (e.key === "Enter") {
    addUserCallback(name);
  }
};

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
  users,
  addUserCallback,
}) => {
  // деструктуризация пропсов
  const [name, setName] = useState<string>(""); // need to fix any
  const [error, setError] = useState<string | null>(null); // need to fix any

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    const trimmedName = e.currentTarget.value.trim();
    setName(trimmedName);
    error && setError(null); // Clear error if name is entered
  };

  const addUser = () => {
    pureAddUser(name, setError, setName, addUserCallback);
  };

  const onBlur = () => {
    pureOnBlur(name, setError);
  };

  const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    pureOnEnter(e, addUserCallback, name);
  };

  const totalUsers = users.length;
  const lastUserName = users.length > 0 ? users[users.length - 1].name : "";

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      onBlur={onBlur}
      onEnter={onEnter}
      error={error}
      totalUsers={totalUsers}
      lastUserName={lastUserName}
    />
  );
};

export default GreetingContainer;
