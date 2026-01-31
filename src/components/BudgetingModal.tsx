import {
    Dialog,
    DialogContent,

} from "@/components/ui/dialog"
import { Dispatch, SetStateAction } from "react";
import { Button } from "./ui/button";
import { Setting4, TrendUp } from "iconsax-reactjs";

export function BudgetingModal({
    isDialogOpen,
    setIsDialogOpen,
}: {
    isDialogOpen: boolean;
    setIsDialogOpen: Dispatch<SetStateAction<boolean>>;
}) {
    const budgetInfoList = [
        {
            title: "Set up annual budgets by account category",
            text: "Allocate funds across income and expense lines with full visibility.",
            icon: <Setting4 size="24" color="#52525B" />
        },
        {
            title: "Track actuals vs budget in real time",
            text: "See how your community is performing against plan, month by month.",
            icon: <TrendUp size={24} color="#52525B" />
        },
        {
            title: "Adjust figures and forecast with ease",
            text: "Edit amounts, apply percentage changes, or roll forward last year’s data—all in one place.",
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.2598 18.9V7.1C19.2598 5.6 18.6198 5 17.0298 5H15.9898C14.3998 5 13.7598 5.6 13.7598 7.1V18.9" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.25977 18.9V12.1C5.25977 10.6 5.89977 10 7.48977 10H8.52977C10.1198 10 10.7598 10.6 10.7598 12.1V18.9" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2 19H22" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        },
    ]
    return (
        <Dialog open={isDialogOpen} onOpenChange={() => setIsDialogOpen(false)}>
            <DialogContent showCloseButton={false} className="w-109.5 p-0 overflow-hidden border-none">
                <div className="flex flex-col">
                    <svg width="438" height="213" viewBox="0 0 438 213" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_26_12924)">
                            <mask id="path-1-inside-1_26_12924" fill="white">
                                <path d="M0 0H438V213H0V0Z" />
                            </mask>
                            <path d="M0 0H438V213H0V0Z" fill="#0C2841" />
                            <g clip-path="url(#clip1_26_12924)">
                                <path d="M27 37.5907C27 31.3544 32.0555 26.2988 38.2919 26.2988H400.761C406.997 26.2988 412.053 31.3544 412.053 37.5907V284.911H27V37.5907Z" fill="#061520" />
                                <line x1="26.625" y1="54.6304" x2="410.935" y2="54.6304" stroke="white" stroke-opacity="0.08" stroke-width="0.915023" />
                                <circle cx="46.7558" cy="40.4472" r="5.49014" fill="white" fill-opacity="0.08" />
                                <circle cx="66.8866" cy="40.4472" r="5.49014" fill="white" fill-opacity="0.08" />
                                <circle cx="87.0165" cy="40.4472" r="5.49014" fill="white" fill-opacity="0.08" />
                                <rect x="60.1684" y="77.4672" width="319.663" height="38.384" rx="19.192" fill="#031B2E" />
                                <rect x="60.1684" y="77.4672" width="319.663" height="38.384" rx="19.192" stroke="#0C2841" stroke-width="0.336702" />
                                <rect x="187.102" y="84.0312" width="119.53" height="26.0944" rx="10.1011" fill="#031B2E" />
                                <rect x="187.438" y="84.368" width="118.856" height="25.421" rx="9.76437" stroke="white" stroke-opacity="0.08" stroke-width="0.673403" />
                                <path d="M82.5781 95.2255V94.0207C82.5781 92.6105 81.44 91.4668 80.0366 91.4668C78.6331 91.4606 77.4905 92.5987 77.4844 94.0095V94.0207V95.2255" stroke="#F1F1F1" stroke-width="0.841756" stroke-linecap="round" stroke-linejoin="round" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M82.1642 101.848H77.897C76.7276 101.848 75.7793 100.896 75.7793 99.7204V97.3135C75.7793 96.1379 76.7276 95.1855 77.897 95.1855H82.1642C83.3336 95.1855 84.2819 96.1379 84.2819 97.3135V99.7204C84.2819 100.896 83.3336 101.848 82.1642 101.848Z" stroke="#F1F1F1" stroke-width="0.841756" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M80.0312 97.8945V99.1409" stroke="#F1F1F1" stroke-width="0.841756" stroke-linecap="round" stroke-linejoin="round" />
                                <rect x="60.15" y="126.449" width="100.7" height="80.7" fill="#031B2E" />
                                <rect x="60.15" y="126.449" width="100.7" height="80.7" stroke="#0C2841" stroke-width="0.3" />
                                <g opacity="0.8">
                                    <rect x="64" y="181.299" width="64" height="5" rx="2.5" fill="#0A2336" />
                                    <rect x="64" y="189.299" width="57" height="5" rx="2.5" fill="#0A2336" />
                                    <rect x="64" y="197.299" width="43" height="5" rx="2.5" fill="#0A2336" />
                                </g>
                                <g opacity="0.6">
                                    <g clip-path="url(#clip2_26_12924)">
                                        <rect x="64" y="130.299" width="93" height="47" fill="#0A2336" />
                                        <line y1="-0.144441" x2="104.202" y2="-0.144441" transform="matrix(0.8925 0.451048 -0.592907 0.805271 64 130.299)" stroke="#0C2841" stroke-width="0.288881" />
                                        <line y1="-0.144441" x2="104.202" y2="-0.144441" transform="matrix(0.8925 -0.451048 0.592907 0.805271 64 177.299)" stroke="#0C2841" stroke-width="0.288881" />
                                    </g>
                                    <rect x="64.15" y="130.449" width="92.7" height="46.7" stroke="#0C2841" stroke-width="0.3" />
                                </g>
                                <rect x="169.15" y="126.449" width="100.7" height="80.7" fill="#031B2E" />
                                <rect x="169.15" y="126.449" width="100.7" height="80.7" stroke="#0C2841" stroke-width="0.3" />
                                <g opacity="0.8">
                                    <rect x="173" y="181.299" width="64" height="5" rx="2.5" fill="#0A2336" />
                                    <rect x="173" y="189.299" width="57" height="5" rx="2.5" fill="#0A2336" />
                                    <rect x="173" y="197.299" width="43" height="5" rx="2.5" fill="#0A2336" />
                                </g>
                                <g opacity="0.6">
                                    <g clip-path="url(#clip3_26_12924)">
                                        <rect x="173" y="130.299" width="93" height="47" fill="#0A2336" />
                                        <line y1="-0.144441" x2="104.202" y2="-0.144441" transform="matrix(0.8925 0.451048 -0.592907 0.805271 173 130.299)" stroke="#0C2841" stroke-width="0.288881" />
                                        <line y1="-0.144441" x2="104.202" y2="-0.144441" transform="matrix(0.8925 -0.451048 0.592907 0.805271 173 177.299)" stroke="#0C2841" stroke-width="0.288881" />
                                    </g>
                                    <rect x="173.15" y="130.449" width="92.7" height="46.7" stroke="#0C2841" stroke-width="0.3" />
                                </g>
                                <rect x="278.15" y="126.449" width="100.7" height="80.7" fill="#031B2E" />
                                <rect x="278.15" y="126.449" width="100.7" height="80.7" stroke="#0C2841" stroke-width="0.3" />
                                <g opacity="0.8">
                                    <rect x="282" y="181.299" width="64" height="5" rx="2.5" fill="#0A2336" />
                                    <rect x="282" y="189.299" width="57" height="5" rx="2.5" fill="#0A2336" />
                                    <rect x="282" y="197.299" width="43" height="5" rx="2.5" fill="#0A2336" />
                                </g>
                                <g opacity="0.6">
                                    <g clip-path="url(#clip4_26_12924)">
                                        <rect x="282" y="130.299" width="93" height="47" fill="#0A2336" />
                                        <line y1="-0.144441" x2="104.202" y2="-0.144441" transform="matrix(0.8925 0.451048 -0.592907 0.805271 282 130.299)" stroke="#0C2841" stroke-width="0.288881" />
                                        <line y1="-0.144441" x2="104.202" y2="-0.144441" transform="matrix(0.8925 -0.451048 0.592907 0.805271 282 177.299)" stroke="#0C2841" stroke-width="0.288881" />
                                    </g>
                                    <rect x="282.15" y="130.449" width="92.7" height="46.7" stroke="#0C2841" stroke-width="0.3" />
                                </g>
                                <rect width="386" height="264" transform="translate(26 14)" fill="#091620" fill-opacity="0.3" />
                                <path d="M213.333 157.333H226.667C243.333 157.333 250 150.666 250 133.999V113.999C250 97.3327 243.333 90.666 226.667 90.666H213.333C196.667 90.666 190 97.3327 190 113.999V133.999C190 150.666 196.667 157.333 213.333 157.333Z" stroke="white" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M235 109.268V112.601C235 115.334 232.767 117.601 230 117.601H210C207.267 117.601 205 115.368 205 112.601V109.268C205 106.534 207.233 104.268 210 104.268H230C232.767 104.268 235 106.501 235 109.268Z" stroke="white" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M207.12 130.667H207.159" stroke="white" stroke-width="4.66667" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M219.985 130.667H220.023" stroke="white" stroke-width="4.66667" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M232.846 130.667H232.884" stroke="white" stroke-width="4.66667" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M207.12 142.333H207.159" stroke="white" stroke-width="4.66667" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M219.985 142.333H220.023" stroke="white" stroke-width="4.66667" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M232.846 142.333H232.884" stroke="white" stroke-width="4.66667" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <path d="M38.292 26.7559H400.761C406.744 26.7559 411.595 31.6072 411.595 37.5908V284.453H27.457V37.5908C27.457 31.6072 32.3083 26.7559 38.292 26.7559Z" stroke="white" stroke-opacity="0.08" stroke-width="0.915023" />
                        </g>
                        <path d="M438 213V212.5H0V213V213.5H438V213Z" fill="#E4E4E7" mask="url(#path-1-inside-1_26_12924)" />
                        <defs>
                            <clipPath id="clip0_26_12924">
                                <path d="M0 0H438V213H0V0Z" fill="white" />
                            </clipPath>
                            <clipPath id="clip1_26_12924">
                                <path d="M27 37.5907C27 31.3544 32.0555 26.2988 38.2919 26.2988H400.761C406.997 26.2988 412.053 31.3544 412.053 37.5907V284.911H27V37.5907Z" fill="white" />
                            </clipPath>
                            <clipPath id="clip2_26_12924">
                                <rect x="64" y="130.299" width="93" height="47" fill="white" />
                            </clipPath>
                            <clipPath id="clip3_26_12924">
                                <rect x="173" y="130.299" width="93" height="47" fill="white" />
                            </clipPath>
                            <clipPath id="clip4_26_12924">
                                <rect x="282" y="130.299" width="93" height="47" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <div className="px-11.75 py-6 flex flex-col gap-6">
                        <div className="flex flex-col gap-5.75">
                            {
                                budgetInfoList.map((item) => 
                                <div key={item.title}  className="flex items-center gap-3">
                                    <div className="flex-1">{item.icon}</div>
                                    <div className="flex flex-col gap-2">
                                        <p className="text-[16px] font-semibold text-[#191919]">{item.title}</p>
                                        <p className="text-xs text-[#606060]">{item.text}</p>
                                    </div>
                                </div>)
                            }
                        </div>
                        <Button onClick={() => setIsDialogOpen(false)} className="bg-[#18181B] rounded-full py-3">Create Budget</Button>

                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

