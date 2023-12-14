import Image from "next/image";
import { CrossIcon, TrashIcon } from "./common/AppIcons";
import { products } from "@/data/products";
import { regionOfTesting } from "@/data/regionOfTesting";

export default function Cart({ closePopup, cart, setCart }) {
  return (
    <div
      style={{ minHeight: "500px" }}
      className="-mt-6 p-1.5 max-h-screen shadow-xl max-w-xl mx-auto w-full rounded-lg flex flex-col bg-white text-cyan-900 text-sm"
    >
      <div className="w-full flex justify-end">
        <button
          onClick={closePopup}
          className="text-indigo-500 hover:text-indigo-600"
        >
          <CrossIcon className="w-10" />
        </button>
      </div>
      <span className="-mt-3 px-4 font-semibold text-base">PRODUCT</span>
      <div className="mt-3 h-px w-full bg-gray-300" />
      <div className="max-h-full overflow-y-auto">
        {cart.map((cartVal, index) => (
          <CartRow
            key={index}
            index={index}
            product={cartVal}
            removeProduct={() =>
              setCart((cart) =>
                cart.filter((val) => val.product !== cartVal.product)
              )
            }
          />
        ))}
      </div>
      <div className="mt-auto w-full">
        <div className="mt-10 h-0.5 w-full bg-gray-300" />
        <div className="px-4 mt-3 flex flex-row items-center gap-x-4 justify-between flex-wrap">
          <div className="">
            <span className="font-semibold">Shipping cost : $ 0.1</span>
            <span style={{ fontSize: "10px" }} className="font-light">
              {" "}
              (based on testing country){" "}
            </span>
          </div>
          <span style={{ fontSize: "10px" }} className="font-light">
            *if cavli is handling the shipping
          </span>
        </div>
        <div className="px-4 mt-2 flex flex-row items-center gap-x-4 justify-between flex-wrap">
          <span className="font-semibold">Total :</span>

          <span className="text-lg font-semibold">
            $
            {cart
              .filter((val) => val.qty)
              .reduce(
                (accumulator, product) => accumulator + product.qty * 35,
                0.1
              )
              .toFixed(2)}
          </span>
        </div>
        <div className="mt-3 mb-5 px-4">
          <button className="bg-cyan-900 hover:bg-cyan-800 py-2.5 w-full rounded-full text-white">
            Checkout{" "}
            {cart
              .filter((val) => val.qty)
              .reduce(
                (accumulator, product) => accumulator + product.qty * 35,
                0.1
              )
              .toFixed(2)}
          </button>
        </div>
      </div>
    </div>
  );
}

const CartRow = ({ product, removeProduct, index }) => {
  const productDetails = products.find((val) => val.label === product.product);
  return (
    <div className="w-full flex flex-col">
      <div className="py-4 w-full flex flex-row items-center justify-between px-4">
        <div className="flex flex-row items-center gap-8">
          <Image src="C42GM.webp" alt="" height={40} width={40} />
          <span className="font-semibold text-gray-500">
            {productDetails.label}
          </span>
        </div>
        <button
          onClick={removeProduct}
          className="transform hover:scale-110 duration-300"
        >
          <TrashIcon className="h-4" />
        </button>
      </div>
      <div className="border-y py-1.5 px-4 w-full grid grid-cols-8 sm:grid-cols-11 gap-2">
        <span>#</span>
        <span className="col-span-3">Name</span>
        <span className="col-span-2">Region</span>
        <span className="hidden sm:block">Esim</span>
        <span className="col-span-2 hidden sm:block">Form Factor</span>
        <span className="">Price</span>
        <span className="text-center">Qty</span>
      </div>
      <div className="border-y py-1.5 px-4 w-full grid grid-cols-8 sm:grid-cols-11 gap-2 text-gray-500 font-light text-xs">
        <span>{index + 1}</span>
        <span className="col-span-3">{productDetails.label}</span>
        <span className="col-span-2 flex flex-col">
          {productDetails.testing.map((region) => (
            <span key={region}>
              {regionOfTesting.find((val) => val.value === region)?.label}
            </span>
          ))}
        </span>
        <span className="hidden sm:block">
          {productDetails.eSIM ? "Yes" : "No"}
        </span>
        <span className="col-span-2 hidden sm:flex flex-col">
          {productDetails.formFactors.map((val, index) => (
            <span key={index}>{val}</span>
          ))}
        </span>
        <span className="">$35</span>
        <span className="text-center">{product.qty}</span>
      </div>
    </div>
  );
};
