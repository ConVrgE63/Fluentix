import MeetingTypeList from "@/components/MeetingTypeList";
import React from "react";

const Home = () => {
  const now = new Date();
  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en-us", { dateStyle: "full" }).format(
    now
  );
  return (
    <section className="flex size-full flex-col gap-4 text-white">
      <div className="h-[210px] w-full rounded-[23px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-1 max-md:py-6 lg:p-11">
          <h2 className="glassmorphism max-w-[235px] rounded py-0 text-center text-base font-normal">
            Upcoming Meeting at 12:30pm
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold lg:text-3xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-xl">{date}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default Home;
