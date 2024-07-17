
type Props = {
    children?: React.ReactNode;
}

export default function Card({children}: Props) {
    return (
        <div className="flex flex-col justify-between text-wrap my-4 items-center bg-[--card] xs:w-[300px] xs:h-[355px] sm:h-[200px] sm:w-[175px] md:h-[275px] md:w-[200px] lg:h-[355px] lg:w-[275px] shadow-md p-0 rounded-[10px]">
            {children}
        </div>
    )
}