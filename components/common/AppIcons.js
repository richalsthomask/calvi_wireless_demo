const defaultClassName = "inline-block h-8 w-8 ";

export const PlusIcon = ({ className }) => (
  <svg
    className={"w-5 h-5 fill-current " + className}
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    fill="currentColor"
    viewBox="0 -256 1792 1792"
  >
    <g transform="matrix(1,0,0,-1,205.01695,1368.9492)" id="g3015">
      <path
        d="M 1408,800 V 608 q 0,-40 -28,-68 -28,-28 -68,-28 H 896 V 96 Q 896,56 868,28 840,0 800,0 H 608 Q 568,0 540,28 512,56 512,96 V 512 H 96 Q 56,512 28,540 0,568 0,608 v 192 q 0,40 28,68 28,28 68,28 h 416 v 416 q 0,40 28,68 28,28 68,28 h 192 q 40,0 68,-28 28,-28 28,-68 V 896 h 416 q 40,0 68,-28 28,-28 28,-68 z"
        id="path3017"
      />
    </g>
  </svg>
);

export const NegativeIcon = ({ className }) => (
  <svg
    className={"w-5 h-5 fill-current " + className}
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    fill="currentColor"
    viewBox="0 0 49.859 49.859"
  >
    <g>
      <path
        d="M45.964,21.034H3.896C1.744,21.034,0,22.778,0,24.93s1.743,3.895,3.896,3.895h42.068
		c2.151,0,3.895-1.744,3.895-3.895S48.116,21.034,45.964,21.034z"
      />
    </g>
  </svg>
);

export const CrossIcon = ({ className, style }) => (
  <svg
    className={className ?? defaultClassName}
    style={style}
    stroke="currentColor"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path d="M10.939 12.0003L8.81796 9.87931C8.68134 9.73786 8.60574 9.54841 8.60745 9.35176C8.60916 9.15511 8.68804 8.967 8.82709 8.82795C8.96615 8.68889 9.15426 8.61001 9.3509 8.6083C9.54755 8.6066 9.737 8.68219 9.87846 8.81881L11.9995 10.9398L14.1205 8.81881C14.1896 8.74718 14.2724 8.69004 14.3639 8.65073C14.4554 8.61143 14.5538 8.59074 14.6534 8.58987C14.753 8.58901 14.8517 8.60798 14.9439 8.64569C15.0361 8.6834 15.1198 8.73909 15.1903 8.80951C15.2607 8.87993 15.3164 8.96367 15.3541 9.05584C15.3918 9.14802 15.4108 9.24678 15.4099 9.34636C15.409 9.44595 15.3883 9.54436 15.349 9.63586C15.3097 9.72737 15.2526 9.81012 15.181 9.87931L13.06 12.0003L15.181 14.1213C15.2526 14.1905 15.3097 14.2733 15.349 14.3648C15.3883 14.4563 15.409 14.5547 15.4099 14.6543C15.4108 14.7538 15.3918 14.8526 15.3541 14.9448C15.3164 15.0369 15.2607 15.1207 15.1903 15.1911C15.1198 15.2615 15.0361 15.3172 14.9439 15.3549C14.8517 15.3926 14.753 15.4116 14.6534 15.4107C14.5538 15.4099 14.4554 15.3892 14.3639 15.3499C14.2724 15.3106 14.1896 15.2534 14.1205 15.1818L11.9995 13.0608L9.87846 15.1818C9.737 15.3184 9.54755 15.394 9.3509 15.3923C9.15426 15.3906 8.96615 15.3117 8.82709 15.1727C8.68804 15.0336 8.60916 14.8455 8.60745 14.6489C8.60574 14.4522 8.68134 14.2628 8.81796 14.1213L10.939 12.0003Z" />
  </svg>
);

export const LoadingCircleIcon = ({ className, style }) => (
  <svg
    className={"animate-spin h-5 text-blue-400 " + className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-60"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="2"
    ></circle>
    <path
      className="opacity-50"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

export const CartIcon = ({ className }) => (
  <svg
    className={className ?? defaultClassName}
    stroke="none"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
  >
    <path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z" />
  </svg>
);

export const VegIcon = ({ className }) => (
  <svg
    className={className ?? defaultClassName}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 225 225"
  >
    <g fill="none" stroke-width="5">
      <rect width="150" height="150" x="25" y="25" stroke="#00a651" />
    </g>
    <circle cx="100" cy="100" r="50" fill="#00a651" />
  </svg>
);

export const NonVegIcon = ({ className }) => (
  <svg
    className={className ?? defaultClassName}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 225 225"
  >
    <g fill="none" stroke-width="5">
      <rect width="150" height="150" x="25" y="25" stroke="red" />
    </g>
    <circle cx="100" cy="100" r="50" fill="red" />
  </svg>
);
