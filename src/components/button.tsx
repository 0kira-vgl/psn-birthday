import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = ComponentProps<"button">;

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge(
        "flex items-center justify-center rounded-full bg-[#0070CC] px-4 py-2 text-sm font-bold text-zinc-50",
        className,
      )}
    >
      {children}
    </button>
  );
};
