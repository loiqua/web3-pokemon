// src/app/components/layout.tsx
import { Button } from "@/ui/components";
import React from "react";

type Props = {
  children: React.ReactNode;
  nextList: () => void;
  prevList: () => void;
  page: number;
};

export function Layout({ children, nextList, prevList, page }: Props) {
  return (
    <div>
      <p className="text-xl font-bold text-center my-5">Page {page + 1}</p>
      <div className="flex items-center gap-5 justify-center">
        {page > 0 && (
          <Button label="Prev Page" color="green" onClick={prevList} />
        )}
        <Button label="Next Page" color="blue" onClick={nextList} />
      </div>
      {children}
    </div>
  );
}
