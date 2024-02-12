import Image from "next/image";
import { CalendarDemo } from "@/components/CalendarDemo";
import { CarouselDemo } from "@/components/CarouselDemo";
import { DrawerDemo } from "@/components/DrawerDemo";
import { SliderDemo } from "@/components/SliderDemo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <CalendarDemo />
      <CarouselDemo />
      <DrawerDemo />
      <SliderDemo />
    </main>
  );
}
