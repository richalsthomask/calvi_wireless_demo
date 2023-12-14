import React from "react";
import { Transition } from "@headlessui/react";

export default function Popup({
  show,
  setShow,
  wrapperClassName = "justify-end sm:justify-center",
  className = "",
  children,
}) {
  return (
    <Transition
      className={
        "z-50 fixed inset-0 transition-all bg-opacity-80 bg-gray-500 " +
        (show ? "" : "hidden")
      }
      enter="ease-out duration-300"
      enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      enterTo="opacity-100 translate-y-0 sm:scale-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100 translate-y-0 sm:scale-100"
      leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      show={show}
      onClick={(e) => {
        e.preventDefault();
        setShow && setShow(false);
      }}
    >
      <div
        className={
          "sm:py-6 absolute bg-opacity-100 z-50 transform transition-all inset-0 flex flex-col items-center " +
          wrapperClassName
        }
      >
        <div
          className={"sm:max-w-2xl w-full max-h-full " + className}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </Transition>
  );
}
