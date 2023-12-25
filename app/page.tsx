"use client";

import React, { MouseEventHandler, useState } from "react";

interface Data {
  username: string;
  password: string;
}

type RequestState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: any }
  | { status: "error"; error: Error };

export default function Home() {
  const [data, setData] = useState<Data>({
    username: "",
    password: "",
  });

  const [requestState, setRequestState] = useState<RequestState>({
    status: "idle",
  });

  // function handleData(event: React.ChangeEvent<HTMLInputElement>) {
  function handleData(event: React.ChangeEvent<HTMLInputElement>) {
    setData({ ...data, [event.target.name]: event.target.value });
  }

  return (
    <div className=" h-screen w-1/3 bg-black flex flex-col justify-center items-center mx-auto">
      <input
        type="text"
        placeholder="User..."
        name="username"
        onChange={handleData}
        value={data.username}
      />

      <input
        type="text"
        placeholder="Password..."
        name="password"
        onChange={handleData}
        value={data.password}
      />

      <br />

      {data.username}
      <br />
      {data.password}
    </div>
  );
}
