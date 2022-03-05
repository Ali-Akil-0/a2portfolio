import Sidebar from "./Components/Sidebar/Sidebar";
import Front from "./Components/Main/Front";
const APP = () => {
  return (
    <div className="flex">
      <div className="flex-[0.1]">
        <Sidebar />
      </div>
      <main className="flex-[0.9]">
        {/* Front */}
        <Front />
        {/* <FrontAnimation />  */}
      </main>
    </div>
  );
};

export default APP;
