import { DebouncedFunction } from "@/types/global";

export const debounce = <T extends any[]>(
  func: DebouncedFunction<T>,
  timeout = 300
) => {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: T) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};
