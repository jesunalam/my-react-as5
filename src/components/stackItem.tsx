import type { Dispatch, SetStateAction } from "react";
import type { IData } from "../type";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

interface StackItemProps {
  item: IData;
  selectLan: IData[];
  setSelectLan: Dispatch<SetStateAction<IData[]>>;
}

const StackItem = ({ item, selectLan, setSelectLan }: StackItemProps) => {
  const handleLanRemove = () => {
    const updatedLan = selectLan.filter((lan) => lan.id !== item.id);
    setSelectLan(updatedLan);
    toast.error(`${item.name} removed from stack!`)
  };

  return (
    <div className="p-3.5 border border-gray-100 rounded-2xl flex items-center justify-between bg-white shadow-xs hover:border-gray-200 transition-all">
      <div className="flex items-center gap-3">
        <img
          src={item.icon}
          alt={item.name}
          className="w-7 h-7 object-contain"
        />
        <div>
          <h4 className="text-sm font-bold text-slate-800 leading-tight">
            {item.name}
          </h4>
          <p className="text-[11px] text-slate-400 font-medium mt-0.5">
            {item.category}
          </p>
        </div>
      </div>

      <button
        onClick={handleLanRemove}
        className="text-slate-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors cursor-pointer"
        title="Remove Item"
      >
        <FaTrash className="text-xs" />
      </button>
    </div>
  );
};

export default StackItem;