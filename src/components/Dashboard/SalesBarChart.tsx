"use client"
import {
    ChartContainer,
    type ChartConfig,
} from "@/components/ui/chart"
import { Bar, BarChart, XAxis, YAxis } from "recharts"

export const description = "A multiple bar chart"
const chartData = [
    { month: "January", desktop: 39, mobile: 28, hi: 10 },
    { month: "February", desktop: 5, mobile: 29, hi: 10 },
    { month: "March", desktop: 15, mobile: 8, hi: 4 },
    { month: "April", desktop: 15, mobile: 28, hi: 10 },
    { month: "May", desktop: 10, mobile: 2, hi: 8 },
    { month: "June", desktop: 39, mobile: 50, hi: 9 },
    { month: "July", desktop: 22, mobile: 39, hi: 19 },
    { month: "Aug", desktop: 22, mobile: 9, hi: 19 },
    { month: "Sept", desktop: 39, mobile: 38, hi: 9 },
]
const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#4545FE",
    },
    mobile: {
        label: "Mobile",
        color: "#12B76A",
    },
    hi: {
        label: "Hi",
        color: "#F04438"
    }
} satisfies ChartConfig

const SalesBarChart = () => {
    return (
        <ChartContainer className="h-40.75 w-full mt-[18px] " config={chartConfig}>
            <BarChart className="text-[#919191] text-[10px]" accessibilityLayer data={chartData}>
                <YAxis
                    type="number"
                    domain={[0, 50]}
                    ticks={[0, 10, 20, 30, 40, 50]}
                    tickFormatter={(value) => `${value}m`}
                    tickLine={false}
                />
                <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                />
                <Bar dataKey="desktop" fill="var(--color-desktop)" barSize={4} />
                <Bar dataKey="mobile" fill="var(--color-mobile)" barSize={4} />
                <Bar dataKey="hi" fill="var(--color-hi)" barSize={4} />
            </BarChart>
        </ChartContainer>
    )
}

export default SalesBarChart