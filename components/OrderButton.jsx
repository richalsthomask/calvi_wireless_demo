import { NegativeIcon, PlusIcon, TrashIcon } from "./common/AppIcons";
import "./orderButton.css";

export default function OrderButton({
  product,
  cart,
  setCart,
  minQty = 5,
  maxQty = 10,
}) {
  const productInCart = cart?.find((val) => val.product === product.label);

  return productInCart ? (
    <div className="flex flex-row gap-1">
      {productInCart.qty <= 5 || !productInCart.qty ? (
        <button
          onClick={() => {
            setCart((cart) =>
              cart.filter((val) => val.product !== product.label)
            );
          }}
          className="bg-red-500 hover:bg-red-600 rounded-l-full px-2.5 py-1.5"
        >
          <TrashIcon className="ml-.5 w-4 text-white" />
        </button>
      ) : (
        <button
          onClick={() =>
            setCart((cart) =>
              cart.map((val) =>
                val.product === product.label
                  ? {
                      ...val,
                      qty: val.qty - 1,
                    }
                  : val
              )
            )
          }
          className="bg-indigo-500 hover:bg-indigo-600 rounded-l-full px-2.5 py-1"
        >
          <NegativeIcon className="w-3 text-white" />
        </button>
      )}
      <input
        value={productInCart.qty}
        type="number"
        className="border border-gray-400 rounded px-2 py-1 text-center w-12"
        onChange={(e) => {
          let value = e.target.value;

          if (value !== "" && !Number.isInteger(Number(value))) return;

          if (value !== "") {
            if (value < minQty) value = minQty;
            if (value > maxQty) value = maxQty;
          }

          setCart((cart) =>
            cart.map((val) =>
              val.product === product.label
                ? {
                    ...val,
                    qty: value,
                  }
                : val
            )
          );
        }}
      />
      <button
        onClick={() =>
          setCart((cart) =>
            cart.map((val) =>
              val.product === product.label
                ? {
                    ...val,
                    qty: val.qty + 1,
                  }
                : val
            )
          )
        }
        className={
          "bg-indigo-500 rounded-r-full px-2.5 py-1 " +
          (productInCart.qty === 10 ? "opacity-80" : "hover:bg-indigo-600")
        }
        disabled={productInCart.qty === 10}
      >
        <PlusIcon className="w-3.5 text-white" />
      </button>
    </div>
  ) : (
    <button
      onClick={() =>
        setCart((cart) => [
          ...cart,
          {
            product: product.label,
            qty: 5,
          },
        ])
      }
      className="px-5 py-2 rounded-full bg-green-600 hover:bg-green-500 text-xs sm:text-sm shadow-xl text-white font-semibold"
    >
      PRE-ORDER
    </button>
  );
}
