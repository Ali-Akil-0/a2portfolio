import Sidebar from "./Components/Sidebar/Sidebar";
import Main from "./Components/Main/Main";
import Header from "./Components/Header/Header";
const APP = () => {
  return (
    <div>
      <div className="flex ">
        <div className="flex-[0.1] ">
          <Sidebar />
        </div>
        <main className="flex-[0.9] The_main relative">
          {/* Front */}
          <Header />
          <Main />
          {/* <FrontAnimation />  */}
        </main>
      </div>
    </div>
  );
};

export default APP;
