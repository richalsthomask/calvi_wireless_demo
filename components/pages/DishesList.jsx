import { getDishes } from "@/api/api";
import { CartIcon, LoadingCircleIcon } from "@/components/common/AppIcons";
import Headings from "@/components/common/Headings";
import { useEffect, useState } from "react";
import DishDetail from "./components/DishDetail";

export default function DishesList() {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);
  const [cart, setCart] = useState([
    //   {
    //     id:'name',
    //     qty:5
    //   }
  ]);

  useEffect(() => {
    fetchDishes();
  }, []);

  const fetchDishes = () => {
    setLoading(true);
    getDishes()
      .then((res) => {
        setDishes(res.data[0] ?? []);
        setSelectedTab(res.data[0]?.table_menu_list?.[0]?.menu_category);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  return (
    <main className="font-serif w-full min-h-screen bg-white">
      {loading ? (
        <div className="w-full h-screen py-20 flex items-center justify-center">
          <LoadingCircleIcon className="h-8" />
        </div>
      ) : (
        <div
          style={{ minWidth: "300px" }}
          className="p-4 sm:p-10 mx-auto max-w-7xl w-full flex flex-col relative"
        >
          <div className="sticky top-0 bg-white z-10">
            <div className="text-gray-500 flex flex-row items-center justify-between gap-5">
              <span className="text-xl">UNI Resto Cafe</span>
              <div className="flex flex-row items-center gap-4">
                My Orders
                <div className="relative rounded-full hover:bg-gray-100 cursor-pointer transform-all hover:scale-110 duration-300">
                  <div className="font-sans absolute z-10 transform translate-x-4 -translate-y-2 text-xs font-semibold text-white px-1 py-.5 flex items-center justify-center rounded-full bg-red-500">
                    {cart.reduce((sum, val) => sum + val.qty, 0)}
                  </div>
                  <CartIcon className="h-5" />
                </div>
              </div>
            </div>

            <Headings
              headings={dishes?.table_menu_list?.map((val) => {
                return { label: val.menu_category, value: val.menu_category };
              })}
              selected={selectedTab}
              onChange={(val) => {
                setSelectedTab(val);
              }}
              base_heading_width={200}
              gap={0}
              className="mt-5 md:mt-7 pb-2 overflow-x-auto"
            />
          </div>

          <div className="relative -mt-4 divide-y overflow-y-auto">
            {dishes.table_menu_list
              ?.find((val) => val.menu_category === selectedTab)
              ?.category_dishes?.map((dish, index) => (
                <DishDetail
                  key={index}
                  dish={dish}
                  cartDetail={cart.find((val) => val.id === dish.dish_id)}
                  setOrderQuantity={(changedValue) => {
                    cart.find((val) => val.id === dish.dish_id)
                      ? setCart((cart) =>
                          cart.map((val) =>
                            val.id === dish.dish_id
                              ? {
                                  ...val,
                                  qty: changedValue,
                                }
                              : val
                          )
                        )
                      : setCart((cart) => [
                          ...cart,
                          { id: dish.dish_id, qty: changedValue },
                        ]);
                  }}
                />
              ))}
          </div>
        </div>
      )}
    </main>
  );
}
