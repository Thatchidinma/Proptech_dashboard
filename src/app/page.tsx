import OverviewCardSmall, { overviewList } from "@/components/Dashboard/OverviewCardSmall";
import SalesOverview from "@/components/Dashboard/SalesOverview";
import TrendingCard, { trendingList } from "@/components/Dashboard/TrendingCard";

export default function Home() {

  return (
    <div className="pt-3 pb-6.75 px-18.25">
      <div className="flex flex-col w-full gap-4">
        <p className="font-semibold text-xl">
          Welcome, Ahmed
        </p>
        <div className="flex flex-col w-full gap-5">
          <div className="grid w-full grid-cols-[2.106fr_1fr] gap-5">
            <SalesOverview />
            <div className="flex flex-col gap-5">
              {
                overviewList.map((item) => <OverviewCardSmall key={item.title} overview={item} />)
              }
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3.75">
            {trendingList.map((item) => <TrendingCard key={item.subTitle} cardDetails={item} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
