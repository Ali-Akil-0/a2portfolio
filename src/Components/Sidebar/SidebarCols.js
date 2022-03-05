const SidebarCols = ({ title, contact }) => {
  return (
    <>
      {contact ? (
        <>
          <div className=" border- w-[100%] border-b   border-[#363535] bg-transparent p-3 tracking-wider ">
            <h2 className="text-center text-[#46acd1]">{title}</h2>
          </div>
        </>
      ) : (
        <>
          <div className=" border- w-[100%] border-b   border-[#363535] bg-transparent p-3 tracking-wider ">
            <h2 className="text-center text-[#929292]">{title}</h2>
          </div>
        </>
      )}
    </>
  );
};

export default SidebarCols;
