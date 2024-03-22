import React from "react"
import { Button } from "./button"

type HomeLayoutPorps = {
  page: number,
  nextList: () => void,
  prevList: () => void,
  children: React.ReactNode
}

export function HomeLayout({ page, nextList, prevList, children }: HomeLayoutPorps) {
  return (
    <div>
      <p className="text-xl font-bold text-center my-5">Page {page + 1}</p>
      <div className="flex items-center gap-5 justify-center">
        {page > 0 && <Button label="Prev Page" color="green" onClick={prevList} />}
        <Button label="Next Page" color="blue" onClick={nextList} />
      </div>
      <div className="container flex items-center gap-5 flex-wrap w-full mx-auto">
        {children}
      </div>
    </div>
  )
}
