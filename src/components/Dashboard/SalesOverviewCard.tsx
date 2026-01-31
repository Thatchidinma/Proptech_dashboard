import { ArrowCircleDown2 } from "iconsax-reactjs"

type OverViewType = {
    amount: string,
    title: string,
    color: string,
    percent: string
}

export const salesOverViewItems: OverViewType[] = [
    {
        amount: "₦120,000,000.00",
        title: "Total Inflow",
        color: "#4545FE",
        percent: "2.5%"
    },
    {
        amount: "₦50,000,000.00",
        title: "MRR",
        color: "#12B76A",
        percent: "2.5%"
    },
    {
        amount: "₦200,000,000.00",
        title: "Commission Revenue",
        color: "#14B8A6",
        percent: "2.5%"
    },
    {
        amount: "₦100,000,000.00",
        title: "GMV",
        color: "#F04438",
        percent: "2.5%"
    },
]

const SalesOverviewCard = ({ overview }: {
    overview: OverViewType
}) => {
    return (
        <div className="border rounded-[12px] p-3.25 flex flex-col gap-2">
            <p style={{ color: overview.color }} className={`text-[19px] leading-[24.7px] font-semibold`}>
                {overview.amount}
            </p>
            <div className="text-[10px] flex gap-[7px]">
                <p className="font-medium">{overview.title}</p>
                <div style={{ color: overview.color }} className={` flex gap-1 items-center`}>
                    <ArrowCircleDown2 variant="Bold" size={10} color="currentColor" />
                    <p className="">{overview.percent}</p>
                </div>
            </div>
        </div>
    )
}

export default SalesOverviewCard