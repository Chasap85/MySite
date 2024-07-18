
type Props = {
    children?: React.ReactNode;
}

export default function Card({children}: Props) {
    return (
        <div className="flex flex-col overflow-hidden justify-between text-center text-[--egg] my-4 items-center bg-stone-900 xs:w-[300px] xs:h-[355px] sm:h-[200px] sm:w-[175px] md:h-[275px] md:w-[200px] lg:h-[355px] lg:w-[275px] shadow-md rounded-[10px]">
            {children}
        </div>
    )
}