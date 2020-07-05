import { ComparisonFilter } from "../types";
import { and } from "./logical-filter";



/**
 * Creates a greater-than comparison filter object for use in filter serialization
 * @param field - The field (or value) to compare against, the left hand side of the operator
 * @param value - The value (or field) to compare against, the right hand side of the operator
 */
export function gt<T, K>(field: K, value: K extends keyof T ? T[K] : any): ComparisonFilter<T, K> {
  return { op: "gt", field, value };
}
/**
 * Creates a less-than comparison filter object for use in filter serialization
 * @param field - The field (or value) to compare against, the left hand side of the operator
 * @param value - The value (or field) to compare against, the right hand side of the operator
 */
export function lt<T, K>(field: K, value: K extends keyof T ? T[K] : any): ComparisonFilter<T, K> {
  return { op: "lt", field, value };
}


/**
 * Creates a greater-or-equal comparison filter object for use in filter serialization
 * @param field - The field (or value) to compare against, the left hand side of the operator
 * @param value - The value (or field) to compare against, the right hand side of the operator
 */
export function ge<T, K>(field: K, value: K extends keyof T ? T[K] : any): ComparisonFilter<T, K> {
  return { op: "ge", field, value };
}
/**
 * Creates a less-or-equal comparison filter object for use in filter serialization
 * @param field - The field (or value) to compare against, the left hand side of the operator
 * @param value - The value (or field) to compare against, the right hand side of the operator
 */
export function le<T, K>(field: K, value: K extends keyof T ? T[K] : any): ComparisonFilter<T, K> {
  return { op: "le", field, value };
}

/**
 * Creates an equal-to comparison filter object for use in filter serialization
 * @param field - The field (or value) to compare against, the left hand side of the operator
 * @param value - The value (or field) to compare against, the right hand side of the operator
 */
export function eq<T, K>(field: K, value: K extends keyof T ? T[K] : any): ComparisonFilter<T, K> {
  return { op: "eq", field, value };
}
/**
 * Creates an not-equal-to comparison filter object for use in filter serialization
 * @param field - The field (or value) to compare against, the left hand side of the operator
 * @param value - The value (or field) to compare against, the right hand side of the operator
 */
export function ne<T, K>(field: K, value: K extends keyof T ? T[K] : any): ComparisonFilter<T, K> {
  return { op: "ne", field, value };
}

/**
 * Creates a combination of a greater-or-equal and a less-than filter object for use in filter serialization
 * @param field - The field (or value) to compare against, the left hand side of the operator
 * @param lower - The value (or field) of the lower bounds the field has to conform to
 * @param upper - The value (or field) of the upper bounds the field has to conform to
 */
export function bt<T, K>(field: K, lower: K extends keyof T ? T[K] : any, upper: K extends keyof T ? T[K] : any) {
  return and(ge(field, lower), lt(field, upper));
}
