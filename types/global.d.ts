export interface Destination {
  [index: string]: number;
  id: number;
  city: string;
  country: string;
  economy_op: number;
  economy_p: number;
  p_economy_op: number;
  p_economy_p: number;
  business_op: number;
  business_p: number;
}

export type DebouncedFunction<T extends any[]> = (...args: T) => void;
