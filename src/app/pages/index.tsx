import React from "react";
import MyClientComponent from "@/app/components/index";

export default function Home() {
  return (
    <div className="pt-4">
      <h1 className="text-5xl text-center">Countries in the world</h1>
      <MyClientComponent />
    </div>
  );
}
