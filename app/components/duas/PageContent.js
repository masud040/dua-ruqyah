import DuaCard from "./DuaCard";

const PageContent = () => {
  return (
    <div className="flex-1 h-full w-full flex-column gap-2.5">
      <div className="flex-start border-[0.5px] border-quaternary rounded-[10px] font-medium px-[30px] py-[15px] gap-2.5 bg-white">
        <p className="text-primary">Section:</p>
        <p>The servant is dependent on his Lord</p>
      </div>
      <DuaCard />
    </div>
  );
};

export default PageContent;
