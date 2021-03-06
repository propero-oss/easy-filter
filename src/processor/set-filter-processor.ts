import type { Filter, SetFilter, SetOperator, SetValueFilter, SetValueOperator } from "../types";
import type { FilterProcessor, UnprocessedFilter } from "../parser";
import { inValues, isNull, notInValues, notNull } from "../helper";

export function setFilterProcessor(
  alias: string,
  operator: SetOperator,
  helper: <T, F>(field: F, items: (F extends keyof T ? T[F] : any)[]) => SetFilter<T, F>
): FilterProcessor<SetFilter<any, any>> {
  return {
    alias,
    operator,
    validateParams(...params): boolean {
      return params.length > 1 && !params.find((it) => typeof it !== "string");
    },
    process(next: (raw: UnprocessedFilter) => Filter, ...params): SetFilter<any, any> {
      const [field, ...items] = params;
      return helper(field, items);
    },
    serializeParams(next: (filter: Filter) => string, escape: (str: string) => string, filter: SetFilter<any, any>): string[] {
      const { field, items } = filter;
      return [field, ...items].map(escape);
    },
  };
}

export function setValueFilterProcessor(
  alias: string,
  operator: SetValueOperator,
  helper: <F>(field: F) => SetValueFilter<F>
): FilterProcessor<SetValueFilter<any>> {
  return {
    alias,
    operator,
    validateParams(...params): boolean {
      return params.length === 1 && typeof params[0] === "string";
    },
    process(next: (raw: UnprocessedFilter) => Filter, ...params): SetValueFilter<any> {
      return helper(params[0] as string);
    },
    serializeParams(next: (filter: Filter) => string, escape: (str: string) => string, filter: SetValueFilter<any>): string[] {
      return [escape(filter.field)];
    },
  };
}

export const inProcessor = setFilterProcessor("in", "in", inValues);
export const notInProcessor = setFilterProcessor("notIn", "not-in", notInValues);
export const nullProcessor = setValueFilterProcessor("isNull", "null", isNull);
export const notNullProcessor = setValueFilterProcessor("notNull", "not-null", notNull);
