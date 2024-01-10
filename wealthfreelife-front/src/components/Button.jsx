import { cva } from "class-variance-authority";
import clsx from "clsx";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 text-center rounded-full active:scale-105 transition duration-300 ease-in-out font-medium text-base text-white",
  {
    variants: {
      colors: {
        primary: "bg-primary hover:bg-primary/90 ",
        secondary: "bg-viking hover:bg-viking/90",
        transparent:
          "bg-transparent hover:bg-secondary border border-secondary",
      },
      size: {
        default: "py-3 px-6",
        full: "py-3 w-full",
        small: "py-2 px-4",
      },
    },
    defaultVariants: {
      colors: "primary",
      size: "default",
    },
  }
);

const Button = ({ onClick, colors, size, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(buttonVariants({ colors, size }), className)}
    >
      {children}
    </button>
  );
};

export default Button;
