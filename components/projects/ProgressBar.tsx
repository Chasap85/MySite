
interface Props {
    progress: number;
}

export default function ProgressBar({ progress }: Props) {
  return (
    <div className="mt-8 w-full h-6 bg-[--gray] rounded-full dark:bg-gray-700">
      <div
        className="h-6 bg-blue-500 dark:bg-[--green] rounded-full text-center text-white dark:text-[--black2]"
        style={{ width: `${progress}%` }}
      >{progress} %</div>
    </div>
  );
}
