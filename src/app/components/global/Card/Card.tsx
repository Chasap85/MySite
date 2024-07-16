
type Props = {
    children?: React.ReactNode;
}

export default function Card({children}: Props) {
    return (
        <div className="bg-[--card] sm:h-[200px] sm:w-[175px] md:h-[275px] md:w-[200px] lg:h-[355px] lg:w-[300px] shadow-md p-4 rounded-md">
            {children}
        </div>
    )
}