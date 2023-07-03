import MessagesDashboard from "../components/MessagesDashboard";
import SideChatFeed from "../components/SideChatFeed";

const Dashboard = () => {
  return (
    <main className="flex flex-1 overflow-hidden">
      <MessagesDashboard />
      <SideChatFeed />
    </main>
  );
};

export default Dashboard;
