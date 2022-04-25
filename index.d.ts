declare namespace fullfact {
  interface Fixed<T, L extends number = number> extends Array<T> {
    0: T;
    length: L;
  }

  /**
   * Create a full-factorial matrix by specifying a levels array. Indicies contain
   * number of levels for each factor in your DoE (Design of Experiments).
   *
   * For array `levels` positive integers `n` at index `i`, will output an array of every
   * permutation of original array. Each combination will have `0...n`, at index `i`.
   *
   * ---
   * ```js
   *
   * const { fullfact } = require("fullfact");
   *
   * const DoE = fullfact([2, 3]);
   *
   * console.log(DoE);
   *
   * // [ [ 0, 0 ], [ 1, 0 ], [ 0, 1 ], [ 1, 1 ], [ 0, 2 ], [ 1, 2 ] ]
   * ```
   */
  export function fullfact<T extends Fixed<number>>(levels: T): T[];

  type ArrayType<T> = T extends readonly (infer U)[] ? U : never;
  type Matrix = { [key: string]: any[] };
  type Factorial<T extends Matrix> = {
    [K in keyof T]: ArrayType<T[K]>;
  }[];

  /**
   * Create a full-factorial matrix with keyed values.
   *
   * **Note:** If using typescript, you must cast your matrix `as const` if you want exact values in output.
   * Otherwise will collapse to implicit types such as `string` or `number`.
   *
   * ```ts
   * const { hydratedFullfact } = require("fullfact");
   *
   * const matrix = {
   *   "color": ["blue", "red", "green"],
   *   "shape": ["square", "circle"]
   * } as const;
   *
   * hydratedFullfact(matrix) === [
   *   { color: 'blue', shape: 'square' },
   *   { color: 'red', shape: 'square' },
   *   { color: 'green', shape: 'square' },
   *   { color: 'blue', shape: 'circle' },
   *   { color: 'red', shape: 'circle' },
   *   { color: 'green', shape: 'circle' }
   * ]
   *
   * ```
   *
   */
  export function hydratedFullfact<T extends Matrix>(matrix: T): Factorial<T>;
}

export = fullfact;
