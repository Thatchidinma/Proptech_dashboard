import { StaticImageData } from "next/image"
import TrendingCardImageCarousel from "./TrendingCardImageCarousel"
import Image1 from '../../../public/trending1.jpg'
import Image2 from '../../../public/trending2.jpg'
import Image3 from '../../../public/trending3.jpg'

type item = string | StaticImageData

type CardDetailsType = {
    title: string,
    subTitle: string,
    images: item[]
}

export const trendingList: CardDetailsType[] = [
    {
        title: "Urban Prime Plaza Premiere",
        subTitle: "MOST CLICKED",
        images: [Image1, Image1]
    },
    {
        title: "Urban Prime Plaza Premiere",
        subTitle: "MOST WATCHLISTED",
        images: [Image2, Image2, Image2, Image2, Image2]
    },
    {
        title: "Urban Prime Plaza Premiere",
        subTitle: "HOTTEST LISTING",
        images: [Image3, Image3, Image3, Image3, Image3]
    }
]

const TrendingCard = ({ cardDetails }: {
    cardDetails: CardDetailsType
}) => {
    return (
        <div className="h-71.5 w-full overflow-hidden relative rounded-2xl border">
            <TrendingCardImageCarousel slides={cardDetails.images} />
            <div className="absolute bg-[linear-gradient(183.45deg,rgba(0,0,0,0.05)_41.18%,rgba(0,0,0,0.6)_100.3%)] top-0 px-4 py-[24.18px] h-full w-full flex items-end">
                <div className="text-white">
                    <p className="text-sm font-medium">{cardDetails.subTitle}</p>
                    <p className="text-lg font-semibold">{cardDetails.title}</p>
                </div>
            </div>
        </div>
    )
}

export default TrendingCard