import SalesOverviewCard, { salesOverViewItems } from './SalesOverviewCard'
import SalesBarChart from './SalesBarChart'

const SalesOverview = () => {
    return (
        <div className="border rounded-[16px] overflow-hidden">
            <div className="border-b px-5.5 pt-4 pb-3 flex flex-col gap-3.5">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-3">
                        <p className="font-semibold text-xl">
                            Sales Overview
                        </p>
                        <p className="text-xs text-[#606060]">Showing overview Jan 2022 - Sep 2022</p>
                    </div>
                    <button type="button" className="py-[15.5px] px-9.25 rounded-full border text-xs font-medium cursor-pointer">View Transactions</button>
                </div>
                <div className='w-full flex gap-3 justify-end h-full'>
                    {["1 Week", "1 Month", "1 Year"].map((item) => {
                        const isActive = item === "1 Year"
                        return (
                            <div
                                className={`${isActive ? "font-semibold bg-[#F5F5F5] " : ""} cursor-pointer text-[#3D3D3D] rounded-[8px] flex gap-2 items-center px-5  py-2 text-sm`}
                                key={item}
                            >
                                <p>{item}</p>
                            </div>)
                    }
                    )}
                </div>
            </div>
            <div className="px-5.5 grid grid-cols-2 gap-2.75">
                <SalesBarChart />
                <div className="grid grid-cols-2 gap-x-4 gap-y-3.5 pt-4">
                    {salesOverViewItems.map((item) => <SalesOverviewCard key={item.title} overview={item} />)}
                </div>
            </div>
        </div>)
}

export default SalesOverview