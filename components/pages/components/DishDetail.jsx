import { NonVegIcon, VegIcon } from "@/components/common/AppIcons";
import Image from "next/image";
import OrderButton from "./OrderButton";

export default function DishDetail({ dish, cartDetail, setOrderQuantity }) {
  const CartButton = (props) => {
    return dish.dish_Availability ? (
      <OrderButton
        {...props}
        orderAmount={cartDetail?.qty ?? 0}
        decreaseCount={() => {
          if (cartDetail && cartDetail.qty > 0) {
            setOrderQuantity(cartDetail.qty - 1);
          }
        }}
        increaseCount={() => {
          setOrderQuantity(cartDetail?.qty ? cartDetail?.qty + 1 : 1);
        }}
      />
    ) : (
      <div className={"text-red-500 text-sm " + props.className}>
        Not available
      </div>
    );
  };
  return (
    <div className="w-full p-4 flex flex-row items-start gap-1">
      {dish.dish_Type === 1 ? (
        <VegIcon className="h-6" />
      ) : (
        <NonVegIcon className="h-6" />
      )}
      <div className="w-full sm:flex flex-row justify-between items-start gap-5">
        <Image
          src={dish.dish_image}
          width={100}
          height={100}
          alt=""
          className="sm:hidden mx-4 my-2 float-right rounded-md w-28 h-20 object-cover"
        />
        <div className="grow-0">
          <div className="-mt-1 flex flex-col">
            <span className="text-lg">{dish.dish_name}</span>

            <div className="mt-auto w-full flex flex-row items-center justify-between gap-3">
              <span className="text-sm">
                {dish.dish_currency}{" "}
                <span className="font-sans">{dish.dish_price}</span>
              </span>
              <span className="sm:hidden text-sm">
                <span className="font-sans">{dish.dish_calories}</span> Calories
              </span>
            </div>
            <div className="sn:hidden h-2" />
            <span className="hidden sm:block text-justify text-sm text-gray-400">
              {dish.dish_description}
            </span>
            <CartButton className="mt-3 hidden sm:flex" />
            {dish.addonCat?.length > 0 && (
              <span className="mt-3 hidden sm:block text-sm text-red-500">
                Customizations available
              </span>
            )}
          </div>
        </div>
        <span className="sm:hidden pt-4 text-sm text-gray-400">
          {dish.dish_description}
        </span>
        <CartButton className="mt-3 sm:hidden" />
        {dish.addonCat?.length > 0 && (
          <span className="mt-3 sm:hidden text-sm text-red-500">
            Customizations available
          </span>
        )}
        <div className="hidden sm:flex shrink-0 flex-row gap-5 items-center">
          <span className="hidden sm:block text-sm">
            <span className="font-sans">{dish.dish_calories}</span> Calories
          </span>
          <Image
            src={dish.dish_image}
            width={100}
            height={100}
            alt=""
            className="rounded-md w-28 h-20 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
