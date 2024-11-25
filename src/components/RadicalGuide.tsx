import { useState } from "react";

export const radicals = [
  { category: "哲理類", radical: "日", key: "A", description: "日" },
  { category: "哲理類", radical: "月", key: "B", description: "月" },
  { category: "哲理類", radical: "金", key: "C", description: "金" },
  { category: "哲理類", radical: "木", key: "D", description: "木" },
  { category: "哲理類", radical: "水", key: "E", description: "水" },
  { category: "哲理類", radical: "火", key: "F", description: "火" },
  { category: "哲理類", radical: "土", key: "G", description: "土" },
  { category: "筆畫類", radical: "竹", key: "H", description: "竹" },
  { category: "筆畫類", radical: "戈", key: "I", description: "戈" },
  { category: "筆畫類", radical: "十", key: "J", description: "十" },
  { category: "筆畫類", radical: "大", key: "K", description: "大" },
  { category: "筆畫類", radical: "中", key: "L", description: "中" },
  { category: "筆畫類", radical: "一", key: "M", description: "一" },
  { category: "筆畫類", radical: "弓", key: "N", description: "弓" },
  { category: "人體類", radical: "人", key: "O", description: "人" },
  { category: "人體類", radical: "心", key: "P", description: "心" },
  { category: "人體類", radical: "手", key: "Q", description: "手" },
  { category: "人體類", radical: "口", key: "R", description: "口" },
  { category: "人體類", radical: "尸", key: "S", description: "尸" },
  { category: "人體類", radical: "廿", key: "T", description: "廿" },
  { category: "人體類", radical: "山", key: "U", description: "山" },
  { category: "人體類", radical: "女", key: "V", description: "女" },
  { category: "人體類", radical: "田", key: "W", description: "田" },
  { category: "人體類", radical: "卜", key: "Y", description: "卜" },
  {
    category: "特殊鍵",
    radical: "難",
    key: "X",
    description: "用於特殊的「難字」，如：臼(竹難)、卍(弓難)等",
  },
  {
    category: "特殊鍵",
    radical: "重",
    key: "Z",
    description: "部份系統用作輸入標點符號，如句號。(Z難日木)",
  },
];

export const RadicalGuide: React.FC = () => {
  const [showRadicalGuide, setShowRadicalGuide] = useState<boolean>(false);

  const categoryOrder = ["哲理類", "筆畫類", "人體類", "特殊鍵"];
  const sortedRadicals = radicals.sort((a, b) => {
    const categoryComparison = categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category);
    if (categoryComparison !== 0) {
      return categoryComparison;
    }
    return a.key.localeCompare(b.key);
  });

  return (
    <div>
      <div
        className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg relative cursor-pointer"
        onClick={() => setShowRadicalGuide(!showRadicalGuide)}
      >
        <div className="font-bold dark:text-white">倉頡碼參考</div>
      </div>
      {showRadicalGuide && (
        <div className="mt-4 fixed top-full bg-gray-200 dark:bg-gray-900 p-2 rounded-lg shadow-lg transition-opacity duration-300 opacity-100 overflow-auto max-h-64">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 w-1/4 text-left">類別</th>
                <th className="px-4 py-2 w-1/4 text-left">部首(鍵)</th>
                <th className="px-4 py-2 w-1/2 text-left">描述</th>
              </tr>
            </thead>
            <tbody>
              {sortedRadicals.map((radical, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2">{radical.category}</td>
                  <td className="px-4 py-2">{`${radical.radical}(${radical.key})`}</td>
                  <td className="px-4 py-2">{radical.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
