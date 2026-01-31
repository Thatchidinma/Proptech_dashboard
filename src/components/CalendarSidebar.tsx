"use client";

import { Add, ArrowLeft } from "iconsax-reactjs";
import Calendar from "./Calendar/Calendar";
import {
  Drawer,
  DrawerContent,
} from "@/components/ui/drawer"
import { Dispatch, SetStateAction } from "react";


export default function CalendarSidebar({ isOpen, setIsSideBarOpen }: { isOpen: boolean; setIsSideBarOpen: Dispatch<SetStateAction<boolean>>;}) {
  return (
    <Drawer
      direction="right" 
      open={isOpen} onOpenChange={() => setIsSideBarOpen(false)}
      >
      <DrawerContent className=" bg-[#0D0D0D] text-white flex flex-col ">
        <div className="flex  items-center bg-[#171717] justify-between px-[22.75px] py-3.25">
          <div className="flex items-center gap-2">
            <button onClick={()=>setIsSideBarOpen(false)} >
              <ArrowLeft size={24} />
            </button>
            <h2 className="font-semibold">Calendar</h2>
          </div>
          <button onClick={()=>setIsSideBarOpen(false)} >
            <Add className="rotate-45" size="24" color="white" />
          </button>
        </div>

        <Calendar />
      </DrawerContent>
    </Drawer>
  );
}