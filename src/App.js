import Sidebar from "./Components/Sidebar/Sidebar";
import Main from "./Components/Main/Main";
const APP = () => {
  return (
    <div className="flex ">
      <div className="flex-[0.1]">
        <Sidebar />
      </div>
      <main className="flex-[0.9]">
        {/* Front */}
        <Main />
        {/* <FrontAnimation />  */}
      </main>
    </div>
  );
};

export default APP;
