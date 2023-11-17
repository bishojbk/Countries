"use client";
import React, { useState, useEffect } from "react";
import fetchData from "@/app/utils/index";

interface Country {
  name: {
    common: string;
    official: string;
    nativeName: string;
  };
}

export default function MyClientComponent() {
  const [data, setData] = useState<Country[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDataAndHandleErrors = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (err: string | any) {
        console.error("Error fetching data:", err);
        setError(err.message || "An error occurred while fetching data.");
      }
    };

    fetchDataAndHandleErrors();
  }, []);

  // Sort the countries alphabetically by their common names
  const sortedData = data?.slice().sort((a, b) => {
    const nameA = a.name.common.toUpperCase();
    const nameB = b.name.common.toUpperCase();
    return nameA.localeCompare(nameB);
  });

  return (
    <div>
      {sortedData ? (
        <>
          <p className="text-center mt-4">
            Total number of countries: {sortedData.length}
          </p>

          <ul className="grid grid-cols-6 gap-6 my-12 place-items-center">
            {sortedData.map((country, index) => (
              <li className="w-52 h-52 bg-slate-200 text-center px-4 flex items-center justify-center rounded-md shadow-lg text-lg cursor-pointer">
                {country.name.common}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>Loading...</p>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}
