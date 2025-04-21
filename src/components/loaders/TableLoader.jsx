import React from "react";

const TableLoader = () => {
  return (
    <div className="animate-pulse p-4 rounded-lg border border-gray-200 shadow-sm w-full">
      <div className="h-6 bg-gray-300 rounded w-full mb-4"></div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              {[...Array(5)].map((_, index) => (
                <th key={index} className="px-4 py-3">
                  <div className="h-4 bg-gray-300 rounded w-24 mx-auto"></div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[...Array(5)].map((_, rowIndex) => (
              <tr key={rowIndex}>
                {[...Array(5)].map((_, colIndex) => (
                  <td key={colIndex} className="px-4 py-3">
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableLoader;
