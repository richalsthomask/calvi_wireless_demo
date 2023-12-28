import { NegativeIcon, PlusIcon, TrashIcon } from "../../common/AppIcons";

export default function OrderButton({
  orderAmount = 0,
  increaseCount,
  decreaseCount,
  className,
}) {
  return (
    <div
      className={
        "w-min bg-green-600 rounded-full overflow-hidden flex flex-row items-center gap-1 text-white " +
        className
      }
    >
      <button
        onClick={decreaseCount}
        className="px-4 py-1.5 hover:bg-green-500"
      >
        <NegativeIcon className="w-2.5" />
      </button>
      <div className="px-3 font-sans">{orderAmount}</div>
      <button
        onClick={increaseCount}
        className={"px-4 py-1.5 hover:bg-green-500"}
      >
        <PlusIcon className="w-2.5" />
      </button>
    </div>
  );
}
