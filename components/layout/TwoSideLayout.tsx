import EventPoster from "@/components/common/EventPoster";
import seagame from "@/assets/seagame.png";


export default function TwoSideLayout({
  right,
}: {
  left?: React.ReactNode;
  right: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] min-h-screen bg-background">
      <div className="hidden lg:flex items-start justify-end-safe px-6 lg:px-8 pt-10 lg:pt-20 pb-12 ">
        <EventPoster
          title="The 32nd SEA GAME"
          location="Olympic Stadium"
          city="Phnom Penh"
          country="Cambodia"
          startDate="09 November 2026"
          endDate="16 November 2026"
          deadline="09 October 2026"
          deadlineTime="23:59"
          posterImageUrl={seagame}
          registrationLink="/"
        />
      </div>

      {/* RIGHT*/}
      <div className="flex items-start justify-center bg-background pt-10 lg:pt-20">
        <div className="w-full max-w-4xl px-6 lg:px-8">
          {right}
        </div>
      </div>

      {/* MOBILE: Poster on top */}
      {/* <div className="lg:hidden px-6 pt-8 pb-6 bg-gray-50">
        <EventPoster />
      </div> */}
    </div>
  );
}
