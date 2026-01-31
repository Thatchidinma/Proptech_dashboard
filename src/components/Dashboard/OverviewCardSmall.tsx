import { ArrowRight2, Home2, Profile } from "iconsax-reactjs";
import { ReactElement } from "react";

export const overviewList: OverviewCardType[] = [
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 22H2M2 11L10.126 4.5C10.6579 4.07449 11.3188 3.84267 12 3.84267C12.6812 3.84267 13.3421 4.07449 13.874 4.5L22 11M15.5 5.5V3.5C15.5 3.36739 15.5527 3.24021 15.6464 3.14645C15.7402 3.05268 15.8674 3 16 3H18.5C18.6326 3 18.7598 3.05268 18.8536 3.14645C18.9473 3.24021 19 3.36739 19 3.5V8.5M4 22V9.5M20 22V9.5" stroke="#4545FE" stroke-width="1.5" stroke-linecap="round" />
      <path d="M15 22V17C15 15.586 15 14.879 14.56 14.44C14.122 14 13.415 14 12 14C10.585 14 9.879 14 9.44 14.44C9 14.878 9 15.585 9 17V22M14 9.5C14 10.0304 13.7893 10.5391 13.4142 10.9142C13.0391 11.2893 12.5304 11.5 12 11.5C11.4696 11.5 10.9609 11.2893 10.5858 10.9142C10.2107 10.5391 10 10.0304 10 9.5C10 8.96957 10.2107 8.46086 10.5858 8.08579C10.9609 7.71071 11.4696 7.5 12 7.5C12.5304 7.5 13.0391 7.71071 13.4142 8.08579C13.7893 8.46086 14 8.96957 14 9.5Z" stroke="#4545FE" stroke-width="1.5" />
    </svg>
    ,
    title: "Listings Overview",
    overViewItems: [
      {
        title: "Total",
        amount: "1.8k"
      },
      {
        title: "Active",
        amount: "80"
      },
      {
        title: "Archived",
        amount: "1k"
      },
    ]
  },
  {
    icon: <Profile size={24} color="#4545FE" />,
    title: "Users Overview",
    overViewItems: [
      {
        title: "Total",
        amount: "20.7k"
      },
      {
        title: "Riders",
        amount: "8.5k"
      },
      {
        title: "Subscribers",
        amount: "7.5k"
      },
    ]
  }
]

type OverviewCardType = {
  icon: ReactElement,
  title: string,
  overViewItems:
  {
    title: string;
    amount: string
  }[]
}

const OverviewCardSmall = ({ overview }: {
  overview: OverviewCardType
}) => {
  return (
    <div className="border rounded-[16px] flex flex-col">
      <div className="font-medium border-b bg-[#F9FAFB] flex justify-between items-center py-3.25 px-4">
        <div className="flex gap-2.5">
          {overview.icon}
          <p className="text-sm">{overview.title}</p>
        </div>
        <button className="flex gap-2 text-[#4545FE]">
          <p className="text-xs">View all</p>
          <ArrowRight2 size={18} />
        </button>
      </div>
      <div className="p-4 pt-5 grid grid-cols-3 gap-[37.5px]">
        {overview.overViewItems.map((item) =>
          <div key={item.title} className="flex flex-col gap-2">
            <p className="text-sm font-medium text-[#525252]">{item.title}</p>
            <p className="text-2xl leading-9.5 font-semibold">
              {item.amount}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default OverviewCardSmall