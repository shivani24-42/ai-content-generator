"use client";
import React, { createContext, useContext, useState } from "react";

type UsageContextType = {
  usage: number;
  setUsage: (u: number) => void;
};

const UsageContext = createContext<UsageContextType | undefined>(undefined);

export function UsageProvider({
  initialUsage,
  children,
}: {
  initialUsage: number;
  children: React.ReactNode;
}) {
  const [usage, setUsage] = useState(initialUsage);
  return (
    <UsageContext.Provider value={{ usage, setUsage }}>
      {children}
    </UsageContext.Provider>
  );
}

export function useUsage() {
  const ctx = useContext(UsageContext);
  if (!ctx) throw new Error("useUsage must be used within UsageProvider");
  return ctx;
}
