import { AddATask } from "@/Components/AddATask";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="text-5xl font-bold text-zinc-500 mb-5">
        Add a task
      </div>
        <AddATask/>
    </div>
  );
}
