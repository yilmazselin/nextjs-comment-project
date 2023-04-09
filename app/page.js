import "@/styles/reset.scss";
import "@/styles/variables.scss";
import "@/styles/global.scss";
import { Conversation } from "@/src/components/conversation";

function HomePage() {
  return (
    <div className="container">
      <Conversation> Container </Conversation>
    </div>
  );
}

export default HomePage;
