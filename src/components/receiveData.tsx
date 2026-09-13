import { use, useState } from "react";
import type { IData } from "../type";
import LanCard from "./lanCard";
import StackItem from "./stackItem";
import { toast } from "react-toastify";

interface ReceiveProps {
  userPromise: Promise<IData[]>;
}

const ReceiveData = ({ userPromise }: ReceiveProps) => {
  const data = use(userPromise);
  const [selectLan, setSelectLan] = useState<IData[]>([]);
 const handleRemoveAll = () => {
  setSelectLan([]);
  toast.error("All technologies removed from stack!");
};
  return (
    <>
      <div className="mb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6 ">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
          Explore the{" "}
          <span className="bg-[#D14DB2] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="text-gray-500 text-lg mt-3 ">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-star max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        {/* left side */}
        <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((lan) => (
            <LanCard
              key={lan.id}
              lan={lan}
              selectLan={selectLan}
              setSelectLan={setSelectLan}
            ></LanCard>
          ))}
        </div>
        {/* Right side */}

        <div className="data_holder lg:col-span-3">
          <div className="bg-white border border-gray-100/80 rounded-2xl p-5 shadow-sm sticky top-24">
            <h3 className="font-bold text-slate-900 text-lg">Your Stack</h3>

            <p className="text-xs text-gray-400 mt-0.5 mb-4">
              {selectLan.length} Technology Selected
            </p>

            {selectLan.length === 0 ? (
              <div className="border border-dashed border-gray-200 rounded-xl p-6 text-center text-xs text-gray-400">
                No items selected yet.
              </div>
            ) : (
              <div className="space-y-2">
                {selectLan.map((item) => (
                  <StackItem
                    key={item.id}
                    item={item}
                    selectLan={selectLan}
                    setSelectLan={setSelectLan}
                  />
                ))}
                <button
                  onClick={handleRemoveAll}
                  className="w-full mt-4 py-2.5 border border-red-200 text-red-500 hover:bg-red-50 font-medium rounded-xl text-sm transition-colors cursor-pointer"
                >
                  Remove All
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReceiveData;