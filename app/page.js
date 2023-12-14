"use client";

import Cart from "@/components/Cart";
import OrderButton from "@/components/OrderButton";
import { CartIcon, LogoIcon } from "@/components/common/AppIcons";
import Popup from "@/components/common/Popup";
import { formFactors } from "@/data/formFactors";
import { products } from "@/data/products";
import { regionOfTesting } from "@/data/regionOfTesting";
import { useState } from "react";

const filterValus = [
  {
    label: "Region of Testing",
    value: "regionOfTesting",
    options: regionOfTesting,
  },
  {
    label: "eSIM",
    value: "eSIM",
    options: [
      {
        label: "YES",
        value: true,
      },
      {
        label: "NO",
        value: false,
      },
    ],
  },
  {
    label: "Form Factor",
    value: "formFactor",
    options: formFactors.map((val) => ({
      label: val,
      value: val,
    })),
  },
];

export default function Home() {
  const [cartPopup, setCartPopup] = useState(false);
  const [filters, setFilters] = useState({
    regionOfTesting: null,
    eSIM: null,
    formFactor: null,
  });
  const [cart, setCart] = useState([
    //   {
    //     product:'C10GS -A1',
    //     qty:5
    //   }
  ]);

  return (
    <main className="w-full min-h-screen bg-white p-4 sm:p-10">
      <div className="mx-auto max-w-4xl w-full flex flex-col">
        <div className="px-3 py-5 flex flex-row items-center justify-between gap-5">
          <LogoIcon className="h-20" />
          <button
            onClick={() => setCartPopup(true)}
            className="relativep-3 rounded-full hover:bg-gray-100 text-gray-600 hover:text-gray-900 cursor-pointer transform-all hover:scale-110 duration-300"
          >
            {cart.length ? (
              <div className="absolute z-10 transform translate-x-4 -translate-y-3 text-xs font-semibold text-white h-4 w-4 flex items-center justify-center rounded-full bg-indigo-500">
                {cart.length}
              </div>
            ) : null}
            <CartIcon className="h-7" />
          </button>
        </div>
        <div className="h-px w-full bg-gray-300" />
        <div className="w-full sm:px-3 flex flex-col gap-5">
          <div className="mt-5 p-5 border rounded-lg shadow-lg flex flex-col">
            <div className="w-full flex flex-col md:grid md:grid-cols-3 gap-4">
              {/* filter dropdowns */}
              {filterValus.map((filter, filterIndex) => (
                <div key={filterIndex} className="flex flex-col gap-2">
                  <span className="font-semibold text-gray-500">
                    {filter.label}
                  </span>
                  <select
                    value={
                      filters[filter.value]
                        ? filters[filter.value]
                        : "placeholder"
                    }
                    className={
                      "px-3 py-1.5 rounded border border-gray-300 shadow-inner " +
                      (filters[filter.value]
                        ? "text-gray-700"
                        : "text-gray-400")
                    }
                    onChange={(e) => {
                      setFilters((filters) => ({
                        ...filters,
                        [filter.value]: e.target.value,
                      }));
                    }}
                  >
                    <option value={"placeholder"} defaultValue hidden>
                      Select {filter.label}
                    </option>
                    {filter.options.map((option, optionIndex) => (
                      <option key={optionIndex} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
            <div className="mt-4 w-full flex flex-row justify-end">
              <button
                onClick={() => setFilters({})}
                className="px-4 py-1.5 shadow-lg rounded-md bg-red-500 hover:bg-red-600 text-white"
              >
                Reset
              </button>
            </div>
          </div>
          <div className="mt-3 w-full grid grid-cols-5 md:grid-cols-6 gap-5 font-semibold pb-2 text-gray-500 text-base sm:text-lg border-b-2 border-gray-300">
            {/* table headings */}
            <span className="col-span-2">Product Number</span>
            <span>Region</span>
            <span>eSIM</span>
            <span>Form Factor</span>
            <span className="mx-auto hidden md:block">Qty</span>
          </div>
          <div className="-mt-4 divide-y divide-gray-300">
            {/* table rows */}
            {products
              .filter((product) => {
                if (!filters.regionOfTesting) return true;
                else return product.testing.includes(filters.regionOfTesting);
              })
              .filter((product) => {
                if (!filters.eSIM) return true;
                else return "" + product.eSIM === filters.eSIM;
              })
              .filter((product) => {
                if (!filters.formFactor) return true;
                else return product.formFactors.includes(filters.formFactor);
              })
              .map((product, productIndex) => (
                <div
                  key={productIndex}
                  className="py-3 pl-3 w-full grid grid-cols-5 md:grid-cols-6 gap-5 text-sm sm:text-base text-gray-500"
                >
                  <span className="col-span-2">{product.label}</span>
                  <div className="flex flex-col gap-1">
                    {product.testing.map((region) => (
                      <span key={region}>
                        {
                          regionOfTesting.find((val) => val.value === region)
                            ?.label
                        }
                      </span>
                    ))}
                  </div>

                  <span>{product.eSIM ? "Yes" : "No"}</span>
                  <div className="flex flex-col gap-1">
                    {product.formFactors.map((val, index) => (
                      <span key={index}>{val}</span>
                    ))}
                  </div>
                  <span className="hidden md:block mx-auto">
                    <OrderButton {...{ product, cart, setCart }} />
                  </span>
                  <div className="md:hidden col-span-6 flex justify-end">
                    <OrderButton {...{ product, cart, setCart }} />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Popup show={cartPopup} setShow={setCartPopup}>
        <Cart
          closePopup={() => setCartPopup(false)}
          cart={cart}
          setCart={setCart}
        />
      </Popup>
    </main>
  );
}
