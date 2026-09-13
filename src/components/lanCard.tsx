import { useState, type Dispatch, type SetStateAction } from "react";
import type { IData } from "../type";
import { toast } from "react-toastify";

interface LanCardProps {
  lan: IData;
  selectLan: IData[];
  setSelectLan: Dispatch<SetStateAction<IData[]>>;
}

const LanCard = ({ lan, selectLan, setSelectLan }: LanCardProps) => {
  const { name, category, icon, rating, difficulty, badge, description } = lan;
;
  const [clickBtn, setClickBtn] = useState(false);
  const handleSelectLan = () => {
    if (!clickBtn) {
      setClickBtn(true);
      setSelectLan( [...selectLan, lan]);
      toast(`${name} added to stack`)
    }
  };

  return (
    <>
      <div className="bg-white border border-gray-100/80 rounded-2xl p-6 flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-all h-full">
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="w-9 h-9 flex items-center justify-center">
              {icon && (
                <img
                  src={icon}
                  alt={name}
                  className="w-full h-full object-contain"
                />
              )}
            </div>
            {badge && (
              <span className="text-[11px] font-medium px-3 py-1 bg-[#E0F2FE]/60 text-[#0284C7] rounded-full">
                {badge}
              </span>
            )}
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-2">{name}</h3>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
            {description}
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium text-[11px]">
              {category}
            </span>
            <span className="text-[11px] text-slate-500">{difficulty}</span>
            {rating && (
              <span className="flex items-center gap-1 font-semibold text-slate-700 text-[11px]">
                <span className="text-amber-400">★</span> {rating}
              </span>
            )}
          </div>

          <button
            onClick={handleSelectLan}
            className={`w-full bg-[#0A0F1D] hover:bg-slate-800 text-white font-medium py-2.5 rounded-xl text-xs sm:text-sm transition-colors cursor-pointer ${clickBtn ? "bg-green-600" : ""}`}
          >
            {clickBtn ? "Added" : "Add to Stack"}
          </button>
        </div>
      </div>
    </>
  );
};

export default LanCard;