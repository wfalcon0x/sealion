export interface Node {
  StartPos?: Position
  EndPos?: Position
  LocationPos?: Position
  Type?: string
}

export interface Position {
  Offset: number
  Line: number
  Column: number
}

export type AnyNode = any // TODO

export type AggregateType = any // TODO

export type SimpleVisitors<TState> = {
  [type in AnyNode['type']]?: (node: Extract<AnyNode, { type: type }>, state: TState) => void
} & {
  [type in keyof AggregateType]?: (node: AggregateType[type], state: TState) => void
}

export type RecursiveVisitors<TState> = {
  [type in AnyNode['type']]?: (
    node: Extract<AnyNode, { type: type }>,
    state: TState,
    callback: WalkerCallback<TState>,
  ) => void
} & {
  [type in keyof AggregateType]?: (node: AggregateType[type], state: TState, callback: WalkerCallback<TState>) => void
}

export type WalkerCallback<TState> = (node: Node, state: TState) => void

/**
 * does a 'simple' walk over a tree
 * @param node the AST node to walk
 * @param visitors an object with properties whose names correspond to node types.
 * @param base a walker algorithm
 * @param state a start state. The default walker will simply visit all statements and expressions and not produce a meaningful state. (An example of a use of state is to track scope at each point in the tree.)
 */
export function simple<TState>(
  node: Node,
  visitors: SimpleVisitors<TState>,
  base?: RecursiveVisitors<TState>,
  state?: TState,
): void

export const base: RecursiveVisitors<any>
