import type { ComparisonFilter, ComparisonOperator, Filter } from "../types";
import type { FilterProcessor, UnprocessedFilter } from "../parser";
import { eq, ge, gt, le, lt, ne } from "../helper";

export function comparisonFilterProcessor(
  alias: string,
  operator: ComparisonOperator,
  builder: <T, K>(field: K, value: K extends keyof T ? T[K] : any) => ComparisonFilter<T, K>
): FilterProcessor<ComparisonFilter<any>> {
  return {
    operator,
    alias,
    process(next: (raw: UnprocessedFilter) => Filter, ...params: (string | UnprocessedFilter)[]): ComparisonFilter<any> {
      return builder(params[0], params[1]);
    },
    serializeParams(next: (filter: Filter) => string, filter: ComparisonFilter<any>): string[] {
      return [filter.field, filter.value];
    },
    validateParams(...params: (string | UnprocessedFilter)[]): boolean {
      return params.length === 2 && typeof params[0] === "string" && typeof params[1] === "string";
    }
  };
}

export const ltProcessor = comparisonFilterProcessor("lt", "lt", lt);
export const gtProcessor = comparisonFilterProcessor("gt", "gt", gt);
export const leProcessor = comparisonFilterProcessor("le", "le", le);
export const geProcessor = comparisonFilterProcessor("ge", "ge", ge);
export const eqProcessor = comparisonFilterProcessor("eq", "eq", eq);
export const neProcessor = comparisonFilterProcessor("ne", "ne", ne);
