import { TOKEN_PARAMS_END, TOKEN_PARAMS_SEPARATOR, TOKEN_PARAMS_START } from "./constants";
import { Filter, FilterOperator } from "../types";

export type FilterParserToken = typeof TOKEN_PARAMS_START | typeof TOKEN_PARAMS_END | typeof TOKEN_PARAMS_SEPARATOR;
export interface UnprocessedFilter {
  op: string;
  params: (string | UnprocessedFilter)[];
}

export interface FilterProcessor<T extends Filter = any> {
  operator: FilterOperator;
  alias: string;
  validateParams(...params: (string | UnprocessedFilter)[]): boolean;
  process(next: (raw: UnprocessedFilter) => Filter, ...params: (string | UnprocessedFilter)[]): T;
  serializeParams(next: (filter: Filter) => string, escape: (str: string) => string, filter: T): string[];
}
