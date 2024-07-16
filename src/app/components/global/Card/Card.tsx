
type Props = {
    children?: React.ReactNode;
}

export default function Card({children}: Props) {
    return (
        <div className="flex flex-col justify-between text-wrap items-center bg-[--card] sm:h-[200px] sm:w-[175px] md:h-[275px] md:w-[200px] lg:h-[355px] lg:w-[300px] shadow-md p-0 rounded-[10px]">
            {children}
        </div>
    )
}