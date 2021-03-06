import { LogicalSetFilter, ProximityFilter } from "../types";
import { and } from "./logical-filter";

export function closeTo<T, F>(field: F, origin: F extends keyof T ? T[F] : any, distance = 0): ProximityFilter<T, F> {
  return { op: "close-to", field, origin, distance };
}

export function farFrom<T, F>(field: F, origin: F extends keyof T ? T[F] : any, distance = 0): ProximityFilter<T, F> {
  return { op: "far-from", field, origin, distance };
}

export function within<T, F>(field: F, origin: F extends keyof T ? T[F] : any, min = 0, max = 0): LogicalSetFilter {
  return and(farFrom(field, origin, min), closeTo(field, origin, max));
}
