import { Button } from "@/ui/components";

export default function Home() {
  return (
    <div className="w-full p-5 h-screen flex flex-col justify-center items-center gap-2">
      <h2 className="font-bold text-black text-[2rem]"> Welcome to pokemon </h2>
      <p className="text-black mb-5">
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
        cillum sint consectetur cupidatat.
      </p>
      <div className="flex justify-center gap-5">
        <Button href="/server" color="blue" label="Server list" />
        <Button href="/client" color="green" label="Client list" />
      </div>
    </div>
  );
}