import type { Filter, ProximityFilter, ProximityOperator } from "../types";
import type { FilterProcessor, UnprocessedFilter } from "../parser";
import { closeTo, farFrom } from "../helper";

export function proximityFilterProcessor(
  alias: string,
  operator: ProximityOperator,
  helper: <T, F>(field: F, origin: F extends keyof T ? T[F] : any, distance: number) => ProximityFilter<T, F>
): FilterProcessor<ProximityFilter<any, any>> {
  return {
    alias,
    operator,
    validateParams(...params): boolean {
      return params.length >= 2 && params.length <= 3 && !!params.find((it) => typeof it !== "string");
    },
    process(next: (raw: UnprocessedFilter) => Filter, ...params): ProximityFilter<any, any> {
      return helper(params[0] as string, params[1] as string, +params[2] || 0);
    },
    serializeParams(next: (filter: Filter) => string, escape: (str: string) => string, filter: ProximityFilter<any, any>): string[] {
      return [filter.field, filter.origin, filter.distance.toString()].map(escape);
    },
  };
}

export const closeToProcessor = proximityFilterProcessor("closeTo", "close-to", closeTo);
export const farFromProcessor = proximityFilterProcessor("farFrom", "far-from", farFrom);
