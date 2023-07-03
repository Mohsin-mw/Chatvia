import React from "react";
import ChatFeedLeft from "../components/ChatFeedLeft";
import MainMessageArea from "../components/MainMessageArea";

const Dashboard = () => {
  return (
    <main className="flex flex-1 overflow-hidden">
      <ChatFeedLeft />
      <MainMessageArea />
    </main>
  );
};

export default Dashboard;
