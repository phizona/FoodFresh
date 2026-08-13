import clsx from "clsx";
import type { InputHTMLAttributes, ReactNode } from "react";
import { useId } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

function Input({
  label,
  helperText,
  error,
  leftIcon,
  rightIcon,
  id,
  className,
  required,
  disabled,
  ...props
}: InputProps) {
  const generatedId = useId();
  const inputId =
  id ??
  (label
    ? `input-${label.toLowerCase().replace(/\s+/g, "-")}`
    : generatedId
  );

  const helperId = `${inputId}-helper`;
  const errorId = `${inputId}-error`;

  return (
    <div className="flex w-full flex-col gap-2">
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-[var(--color-text-primary)]"
        >
          {label}

          {required && (
            <span className="ml-1 text-red-500">*</span>
          )}
        </label>
      )}

      <div className="relative">
        {leftIcon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)]">
            {leftIcon}
          </span>
        )}

        <input
          id={inputId}
          required={required}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={
            error ? errorId : helperText ? helperId : undefined
          }
          className={clsx(
            "w-full rounded-xl border bg-white py-3 text-base outline-none transition-all duration-300",

            leftIcon ? "pl-10" : "pl-4",

            rightIcon ? "pr-10" : "pr-4",

            error
              ? "border-red-500 focus:border-red-500"
              : "border-[var(--color-border)] focus:border-[var(--color-primary)]",

            disabled &&
              "cursor-not-allowed bg-gray-100 opacity-60",

            className
          )}
          {...props}
        />

        {rightIcon && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)]">
            {rightIcon}
          </span>
        )}
      </div>

      {error ? (
        <p
          id={errorId}
          className="text-sm text-red-500"
        >
          {error}
        </p>
      ) : helperText ? (
        <p
          id={helperId}
          className="text-sm text-[var(--color-text-secondary)]"
        >
          {helperText}
        </p>
      ) : null}
    </div>
  );
}

export default Input;