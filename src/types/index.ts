import { RawFilter } from "./raw-filter";
import { TextFilter, TextOperator } from "./text-filter";
import { LogicalFilter, LogicalOperator } from "./logical-filter";
import { SetFilter, SetOperator, SetValueFilter, SetValueOperator } from "./set-filter";
import { ComparisonFilter, ComparisonOperator } from "./comparison-filter";
import { ProximityFilter, ProximityOperator } from "./proximity-filter";

export * from "./proximity-filter";
export * from "./logical-filter";
export * from "./comparison-filter";
export * from "./logical-filter";
export * from "./set-filter";
export * from "./text-filter";
export * from "./raw-filter";

export type FilterOperator = LogicalOperator | SetOperator | TextOperator | ComparisonOperator | ProximityOperator | SetValueOperator;
export type Filter<T = any, F extends keyof T = any> =
  | SetFilter<T, F>
  | LogicalFilter<T>
  | TextFilter<T, F>
  | ComparisonFilter<T, F>
  | ProximityFilter<T, F>
  | SetValueFilter<F>
  | RawFilter;
