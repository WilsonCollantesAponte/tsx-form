"use client";

import { useState } from "react";

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

  function handleData() {}

  return (
    <div className=" h-screen w-1/3 bg-black flex flex-col justify-center items-center mx-auto">
      <input type="text" placeholder="User..." />

      <input type="text" placeholder="Password..." />

      <br />

      {data.username}
      <br />
      {data.password}
    </div>
  );
}
