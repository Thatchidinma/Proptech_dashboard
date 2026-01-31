"use client"
import Image from 'next/image'
import Logo from '../../public/logo.svg'
import CalendarSidebar from './CalendarSidebar'
import { useState } from 'react';
import { Calculator, Calendar, SearchStatus, Shop, TaskSquare, Wallet2 } from 'iconsax-reactjs';
import { Tooltip } from '@radix-ui/react-tooltip';
import { TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { BudgetingModal } from './BudgetingModal';


const NavBar = () => {
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [isBudgetOpen, setBudgetOpen] = useState(false)
    const pathname = usePathname()

    const NavBarItems = [
        {
            icon: <Calculator onClick={() => setBudgetOpen(true)} size="36" color="white" />,
            tooltip: "Budgeting",
        },
        {
            icon: <Calendar onClick={() => setIsCalendarOpen(true)} size="36" color="white" />,
            tooltip: "Calender",
        },
        {
            icon: <SearchStatus size="36" color="white" />,
            tooltip: "Search Activity",
        },
        {
            icon: <Wallet2 size="36" color="white" />,
            tooltip: "Payout Center",
        },
        {
            icon: <Shop size="36" color="white" />,
            tooltip: "Marketplace",
        },
    ]

    const tabItems = [
        {
            tab: "Dashboard",
            href: "/",
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.13478 20.7733V17.7156C9.13478 16.9351 9.77217 16.3023 10.5584 16.3023H13.4326C13.8102 16.3023 14.1723 16.4512 14.4393 16.7163C14.7063 16.9813 14.8563 17.3408 14.8563 17.7156V20.7733C14.8539 21.0978 14.9821 21.4099 15.2124 21.6402C15.4427 21.8705 15.7561 22 16.0829 22H18.0438C18.9596 22.0023 19.8388 21.6428 20.4872 21.0008C21.1356 20.3588 21.5 19.487 21.5 18.5778V9.86686C21.5 9.13246 21.1721 8.43584 20.6046 7.96467L13.934 2.67587C12.7737 1.74856 11.1111 1.7785 9.98539 2.74698L3.46701 7.96467C2.87274 8.42195 2.51755 9.12064 2.5 9.86686V18.5689C2.5 20.4639 4.04738 22 5.95617 22H7.87229C8.55123 22 9.103 21.4562 9.10792 20.7822L9.13478 20.7733Z" fill="currentColor" />
            </svg>,
        },
        {
            tab: "Listing",
            href: "#",
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 6H16.5V5.25C16.5 4.65326 16.2629 4.08097 15.841 3.65901C15.419 3.23705 14.8467 3 14.25 3H9.75C9.15326 3 8.58097 3.23705 8.15901 3.65901C7.73705 4.08097 7.5 4.65326 7.5 5.25V6H3C2.60218 6 2.22064 6.15804 1.93934 6.43934C1.65804 6.72064 1.5 7.10218 1.5 7.5V18C1.5 18.3978 1.65804 18.7794 1.93934 19.0607C2.22064 19.342 2.60218 19.5 3 19.5H21C21.3978 19.5 21.7794 19.342 22.0607 19.0607C22.342 18.7794 22.5 18.3978 22.5 18V7.5C22.5 7.10218 22.342 6.72064 22.0607 6.43934C21.7794 6.15804 21.3978 6 21 6ZM9 5.25C9 5.05109 9.07902 4.86032 9.21967 4.71967C9.36032 4.57902 9.55109 4.5 9.75 4.5H14.25C14.4489 4.5 14.6397 4.57902 14.7803 4.71967C14.921 4.86032 15 5.05109 15 5.25V6H9V5.25ZM21 7.5V10.5H18V9.75C18 9.55109 17.921 9.36032 17.7803 9.21967C17.6397 9.07902 17.4489 9 17.25 9C17.0511 9 16.8603 9.07902 16.7197 9.21967C16.579 9.36032 16.5 9.55109 16.5 9.75V10.5H7.5V9.75C7.5 9.55109 7.42098 9.36032 7.28033 9.21967C7.13968 9.07902 6.94891 9 6.75 9C6.55109 9 6.36032 9.07902 6.21967 9.21967C6.07902 9.36032 6 9.55109 6 9.75V10.5H3V7.5H21ZM21 18H3V12H6V12.75C6 12.9489 6.07902 13.1397 6.21967 13.2803C6.36032 13.421 6.55109 13.5 6.75 13.5C6.94891 13.5 7.13968 13.421 7.28033 13.2803C7.42098 13.1397 7.5 12.9489 7.5 12.75V12H16.5V12.75C16.5 12.9489 16.579 13.1397 16.7197 13.2803C16.8603 13.421 17.0511 13.5 17.25 13.5C17.4489 13.5 17.6397 13.421 17.7803 13.2803C17.921 13.1397 18 12.9489 18 12.75V12H21V18Z" fill="currentColor" />
            </svg>,
        },
        {
            tab: "Users",
            href: "#",
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5788 12.0561C14.2176 12.0561 16.3568 9.91686 16.3568 7.27803C16.3568 4.6392 14.2176 2.5 11.5788 2.5C8.93998 2.5 6.80078 4.6392 6.80078 7.27803C6.80078 9.91686 8.93998 12.0561 11.5788 12.0561Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.00002 18.7016C3.99873 18.3657 4.07385 18.0339 4.2197 17.7313C4.67736 16.816 5.96798 16.3309 7.03892 16.1112C7.81128 15.9464 8.59431 15.8362 9.38217 15.7817C10.8408 15.6535 12.3079 15.6535 13.7666 15.7817C14.5544 15.8369 15.3374 15.947 16.1099 16.1112C17.1808 16.3309 18.4714 16.7702 18.9291 17.7313C19.2224 18.3481 19.2224 19.0642 18.9291 19.681C18.4714 20.6421 17.1808 21.0814 16.1099 21.292C15.3384 21.4636 14.5551 21.5768 13.7666 21.6306C12.5794 21.7313 11.3866 21.7496 10.1968 21.6856C9.92221 21.6856 9.65677 21.6856 9.38217 21.6306C8.59663 21.5775 7.81632 21.4643 7.04807 21.292C5.96798 21.0814 4.68652 20.6421 4.2197 19.681C4.0746 19.3749 3.99955 19.0403 4.00002 18.7016Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>,
        },
        {
            tab: "Request",
            href: "#",
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.25 3.75H3.75C3.35218 3.75 2.97064 3.90804 2.68934 4.18934C2.40804 4.47064 2.25 4.85218 2.25 5.25V18.75C2.25 19.1478 2.40804 19.5294 2.68934 19.8107C2.97064 20.092 3.35218 20.25 3.75 20.25H20.25C20.6478 20.25 21.0294 20.092 21.3107 19.8107C21.592 19.5294 21.75 19.1478 21.75 18.75V5.25C21.75 4.85218 21.592 4.47064 21.3107 4.18934C21.0294 3.90804 20.6478 3.75 20.25 3.75ZM20.25 18.75H3.75V5.25H20.25V18.75ZM17.25 9C17.25 9.19891 17.171 9.38968 17.0303 9.53033C16.8897 9.67098 16.6989 9.75 16.5 9.75H7.5C7.30109 9.75 7.11032 9.67098 6.96967 9.53033C6.82902 9.38968 6.75 9.19891 6.75 9C6.75 8.80109 6.82902 8.61032 6.96967 8.46967C7.11032 8.32902 7.30109 8.25 7.5 8.25H16.5C16.6989 8.25 16.8897 8.32902 17.0303 8.46967C17.171 8.61032 17.25 8.80109 17.25 9ZM17.25 12C17.25 12.1989 17.171 12.3897 17.0303 12.5303C16.8897 12.671 16.6989 12.75 16.5 12.75H7.5C7.30109 12.75 7.11032 12.671 6.96967 12.5303C6.82902 12.3897 6.75 12.1989 6.75 12C6.75 11.8011 6.82902 11.6103 6.96967 11.4697C7.11032 11.329 7.30109 11.25 7.5 11.25H16.5C16.6989 11.25 16.8897 11.329 17.0303 11.4697C17.171 11.6103 17.25 11.8011 17.25 12ZM17.25 15C17.25 15.1989 17.171 15.3897 17.0303 15.5303C16.8897 15.671 16.6989 15.75 16.5 15.75H7.5C7.30109 15.75 7.11032 15.671 6.96967 15.5303C6.82902 15.3897 6.75 15.1989 6.75 15C6.75 14.8011 6.82902 14.6103 6.96967 14.4697C7.11032 14.329 7.30109 14.25 7.5 14.25H16.5C16.6989 14.25 16.8897 14.329 17.0303 14.4697C17.171 14.6103 17.25 14.8011 17.25 15Z" fill="currentColor" />
            </svg>,
        },
        {
            tab: "Applications",
            href: "#",
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_11005_638)">
                    <path d="M9 9.75C9 9.55109 9.07902 9.36032 9.21967 9.21967C9.36032 9.07902 9.55109 9 9.75 9H15.75C15.9489 9 16.1397 9.07902 16.2803 9.21967C16.421 9.36032 16.5 9.55109 16.5 9.75C16.5 9.94891 16.421 10.1397 16.2803 10.2803C16.1397 10.421 15.9489 10.5 15.75 10.5H9.75C9.55109 10.5 9.36032 10.421 9.21967 10.2803C9.07902 10.1397 9 9.94891 9 9.75ZM9.75 13.5H15.75C15.9489 13.5 16.1397 13.421 16.2803 13.2803C16.421 13.1397 16.5 12.9489 16.5 12.75C16.5 12.5511 16.421 12.3603 16.2803 12.2197C16.1397 12.079 15.9489 12 15.75 12H9.75C9.55109 12 9.36032 12.079 9.21967 12.2197C9.07902 12.3603 9 12.5511 9 12.75C9 12.9489 9.07902 13.1397 9.21967 13.2803C9.36032 13.421 9.55109 13.5 9.75 13.5ZM21.75 18C21.75 18.7956 21.4339 19.5587 20.8713 20.1213C20.3087 20.6839 19.5456 21 18.75 21H8.25C7.45435 21 6.69129 20.6839 6.12868 20.1213C5.56607 19.5587 5.25 18.7956 5.25 18V6C5.25 5.60218 5.09196 5.22064 4.81066 4.93934C4.52936 4.65804 4.14782 4.5 3.75 4.5C3.35218 4.5 2.97064 4.65804 2.68934 4.93934C2.40804 5.22064 2.25 5.60218 2.25 6C2.25 6.53813 2.70281 6.90188 2.7075 6.90563C2.83163 7.00115 2.92273 7.13313 2.96804 7.28306C3.01334 7.43299 3.01057 7.59335 2.96011 7.74162C2.90965 7.8899 2.81404 8.01866 2.68668 8.10983C2.55933 8.201 2.40663 8.25002 2.25 8.25C2.08781 8.25028 1.93003 8.19725 1.80094 8.09906C1.69219 8.01937 0.75 7.27594 0.75 6C0.75 5.20435 1.06607 4.44129 1.62868 3.87868C2.19129 3.31607 2.95435 3 3.75 3H16.5C17.2956 3 18.0587 3.31607 18.6213 3.87868C19.1839 4.44129 19.5 5.20435 19.5 6V15.75H20.25C20.4123 15.75 20.5702 15.8026 20.7 15.9C20.8125 15.9806 21.75 16.7241 21.75 18ZM9.02437 16.2638C9.07562 16.1125 9.17342 15.9813 9.30376 15.889C9.4341 15.7968 9.59031 15.7481 9.75 15.75H18V6C18 5.60218 17.842 5.22064 17.5607 4.93934C17.2794 4.65804 16.8978 4.5 16.5 4.5H6.34594C6.61119 4.95535 6.75064 5.47302 6.75 6V18C6.75 18.3978 6.90804 18.7794 7.18934 19.0607C7.47064 19.342 7.85218 19.5 8.25 19.5C8.64782 19.5 9.02936 19.342 9.31066 19.0607C9.59196 18.7794 9.75 18.3978 9.75 18C9.75 17.4619 9.29719 17.0981 9.2925 17.0944C9.16469 17.0029 9.06963 16.8729 9.02136 16.7233C8.97308 16.5738 8.97414 16.4127 9.02437 16.2638ZM20.25 18C20.2406 17.7221 20.1334 17.4565 19.9472 17.25H11.1347C11.2101 17.4929 11.2483 17.7457 11.2481 18C11.2488 18.5267 11.1101 19.0443 10.8459 19.5H18.75C19.1478 19.5 19.5294 19.342 19.8107 19.0607C20.092 18.7794 20.25 18.3978 20.25 18Z" fill="currentColor" />
                </g>
                <defs>
                    <clipPath id="clip0_11005_638">
                        <rect width="24" height="24" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        },
        {
            tab: "Task",
            href: "#",
            icon: <TaskSquare size="24" color="currentColor" />,
        },
    ]

    return (
        <header className='sticky top-0 w-full'>
            <nav className='bg-sec-green flex justify-between py-[27.99px] px-19.5'>
                <Image src={Logo} alt='logo' />
                <div className="flex gap-6.25  items-center ">
                    <TooltipProvider>
                        <div className="flex gap-6 items-center">
                            {
                                NavBarItems.map((item) => (
                                    <Tooltip key={item.tooltip}>
                                        <TooltipTrigger className='cursor-pointer' asChild>
                                            <button>
                                                {item.icon}
                                            </button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            {item.tooltip}
                                        </TooltipContent>
                                    </Tooltip>
                                ))
                            }
                        </div>
                    </TooltipProvider>
                    <div className="group relative">
                        <div className={` rounded-full size-10 bg-white flex`}>
                            <p className="text-sec-green font-medium text-[23px] text-center m-auto z-10">D</p>
                        </div>
                        <div className='absolute opacity-0 bg-white -top-1 -left-1 flex group-hover:opacity-100  size-12 transition-all duration-300 ease-in-out rounded-full' >.</div>
                            <div className=" absolute right-0 rounded-lg shadow-2xs flex-col gap-1 hidden group-hover:flex bg-white p-4 mt-2">
                                <p className="font-medium ">
                                    Dylan Frank
                                </p>
                                <p className="text-xs text-[#606060]">dylanfran96@gmail.com</p>
                            </div>
                    </div>
                </div>
            </nav>
            <div className='w-full px-19.5 flex gap-[52.8px] justify-between h-full bg-[#F4F4F5] border-b rounded-none py-3'>
                {tabItems.map((item) => {
                    const isActive =
                        pathname === item.href ||
                        (item.href === "/dashboard" && pathname === "/")
                    return (
                        <Link
                            href={item.href}
                            className={`${isActive ? "font-semibold bg-[#176D5826]  text-[#176D58]" : "text-[#111111]"} text-sm rounded-[8px] flex gap-2 items-center px-[32.5px]  py-1.75`}
                            key={item.tab}
                        >
                            {item.icon} <p>{item.tab}</p>
                        </Link>)
                }
                )}
            </div>
            <CalendarSidebar
                isOpen={isCalendarOpen}
                setIsSideBarOpen={() => setIsCalendarOpen(false)}
            />
            <BudgetingModal isDialogOpen={isBudgetOpen} setIsDialogOpen={setBudgetOpen} />
        </header>
    )
}

export default NavBar