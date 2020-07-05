import { FilterProcessor } from "../parser/types";
import { eqProcessor, geProcessor, gtProcessor, leProcessor, ltProcessor, neProcessor } from "./comparison-filter-processor";
import { andProcessor, notProcessor, orProcessor } from "./logical-filter-processor";
import { closeToProcessor, farFromProcessor } from "./proximity-filter-processor";
import { inProcessor, notInProcessor, notNullProcessor, nullProcessor } from "./set-filter-processor";
import {
  containsProcessor,
  endsWithProcessor,
  likeProcessor,
  matchProcessor,
  notContainsProcessor,
  notEndsWithProcessor,
  notLikeProcessor,
  notMatchProcessor,
  notStartsWithProcessor,
  startsWithProcessor
} from "./text-filter-processor";

export * from "./comparison-filter-processor";
export * from "./logical-filter-processor";
export * from "./proximity-filter-processor";
export * from "./set-filter-processor";
export * from "./text-filter-processor";

export const defaultProcessors: FilterProcessor[] = [
  eqProcessor,
  neProcessor,
  gtProcessor,
  ltProcessor,
  geProcessor,
  leProcessor,
  andProcessor,
  orProcessor,
  notProcessor,
  closeToProcessor,
  farFromProcessor,
  inProcessor,
  notInProcessor,
  nullProcessor,
  notNullProcessor,
  containsProcessor,
  notContainsProcessor,
  matchProcessor,
  notMatchProcessor,
  likeProcessor,
  notLikeProcessor,
  startsWithProcessor,
  notStartsWithProcessor,
  endsWithProcessor,
  notEndsWithProcessor
];

export const defaultProcessorMap: Record<string, FilterProcessor> = defaultProcessors
  .map(processor => [processor.operator, processor] as const)
  .reduce((all, [op, processor]) => ({...all, [op]: processor }), {});
