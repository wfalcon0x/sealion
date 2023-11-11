export enum NodeType {
  AddressLocation = 'AddressLocation',
  ArrayExpression = 'ArrayExpression',
  AssignmentStatement = 'AssignmentStatement',
  AttachExpression = 'AttachExpression',
  AttachmentDeclaration = 'AttachmentDeclaration',
  BinaryExpression = 'BinaryExpression',
  Block = 'Block',
  BoolExpression = 'BoolExpression',
  BreakStatement = 'BreakStatement',
  CastingExpression = 'CastingExpression',
  CompositeDeclaration = 'CompositeDeclaration',
  ConditionalExpression = 'ConditionalExpression',
  ConstantSizedType = 'ConstantSizedType',
  ContinueStatement = 'ContinueStatement',
  CreateExpression = 'CreateExpression',
  DestroyExpression = 'DestroyExpression',
  DictionaryEntry = 'DictionaryEntry',
  DictionaryExpression = 'DictionaryExpression',
  DictionaryType = 'DictionaryType',
  EmitStatement = 'EmitStatement',
  EnumCaseDeclaration = 'EnumCaseDeclaration',
  ExpressionStatement = 'ExpressionStatement',
  FieldDeclaration = 'FieldDeclaration',
  FixedPointExpression = 'FixedPointExpression',
  ForStatement = 'ForStatement',
  ForceExpression = 'ForceExpression',
  FunctionBlock = 'FunctionBlock',
  FunctionDeclaration = 'FunctionDeclaration',
  FunctionExpression = 'FunctionExpression',
  FunctionType = 'FunctionType',
  IdentifierExpression = 'IdentifierExpression',
  IfStatement = 'IfStatement',
  ImportDeclaration = 'ImportDeclaration',
  IndexExpression = 'IndexExpression',
  InstantiationType = 'InstantiationType',
  IntegerExpression = 'IntegerExpression',
  InterfaceDeclaration = 'InterfaceDeclaration',
  InvocationExpression = 'InvocationExpression',
  MemberExpression = 'MemberExpression',
  NilExpression = 'NilExpression',
  NominalType = 'NominalType',
  OptionalType = 'OptionalType',
  PathExpression = 'PathExpression',
  PragmaDeclaration = 'PragmaDeclaration',
  ReferenceExpression = 'ReferenceExpression',
  ReferenceType = 'ReferenceType',
  RestrictedType = 'RestrictedType',
  ReturnStatement = 'ReturnStatement',
  SpecialFunctionDeclaration = 'SpecialFunctionDeclaration',
  StringExpression = 'StringExpression',
  SwapStatement = 'SwapStatement',
  SwitchCase = 'SwitchCase',
  SwitchStatement = 'SwitchStatement',
  TransactionDeclaration = 'TransactionDeclaration',
  Transfer = 'Transfer',
  UnaryExpression = 'UnaryExpression',
  VariableDeclaration = 'VariableDeclaration',
  VariableSizedType = 'VariableSizedType',
  VoidExpression = 'VoidExpression',
  WhileStatement = 'WhileStatement',
}

export enum Operation {
  OperationAnd = 'OperationAnd',
  OperationBitwiseAnd = 'OperationBitwiseAnd',
  OperationBitwiseLeftShift = 'OperationBitwiseLeftShift',
  OperationBitwiseOr = 'OperationBitwiseOr',
  OperationBitwiseRightShift = 'OperationBitwiseRightShift',
  OperationBitwiseXor = 'OperationBitwiseXor',
  OperationCast = 'OperationCast',
  OperationDiv = 'OperationDiv',
  OperationEqual = 'OperationEqual',
  OperationFailableCast = 'OperationFailableCast',
  OperationForceCast = 'OperationForceCast',
  OperationGreater = 'OperationGreater',
  OperationGreaterEqual = 'OperationGreaterEqual',
  OperationLess = 'OperationLess',
  OperationLessEqual = 'OperationLessEqual',
  OperationMinus = 'OperationMinus',
  OperationMod = 'OperationMod',
  OperationMove = 'OperationMove',
  OperationMul = 'OperationMul',
  OperationNegate = 'OperationNegate',
  OperationNilCoalesce = 'OperationNilCoalesce',
  OperationNotEqual = 'OperationNotEqual',
  OperationOr = 'OperationOr',
  OperationPlus = 'OperationPlus',
  OperationUnknown = 'OperationUnknown',
}

export enum TransferOperation {
  TransferOperationCopy = 'TransferOperationCopy',
  TransferOperationMove = 'TransferOperationMove',
  TransferOperationMoveForced = 'TransferOperationMoveForced',
  TransferOperationUnknown = 'TransferOperationUnknown',
}

export enum ConditionKind {
  ConditionKindUnknown = 'ConditionKindUnknown',
  ConditionKindPre = 'ConditionKindPre',
  ConditionKindPost = 'ConditionKindPost',
}

export enum CompositeKind {
  CompositeKindAttachment = 'CompositeKindAttachment',
  CompositeKindContract = 'CompositeKindContract',
  CompositeKindEnum = 'CompositeKindEnum',
  CompositeKindEvent = 'CompositeKindEvent',
  CompositeKindResource = 'CompositeKindResource',
  CompositeKindStructure = 'CompositeKindStructure',
}

export enum DeclarationKind {
  DeclarationKindDestructor = 'DeclarationKindDestructor',
  DeclarationKindInitializer = 'DeclarationKindInitializer',
}

export enum VariableKind {
  VariableKindNotSpecified = 'VariableKindNotSpecified',
  VariableKindConstant     = 'VariableKindConstant',
  VariableKindVariable     = 'VariableKindVariable',
}

export enum Access {
  AccessAccount = 'AccessAccount',
  AccessContract = 'AccessContract',
  AccessNotSpecified = 'AccessNotSpecified',
  AccessPublic = 'AccessPublic',
  AccessPublicSettable = 'AccessPublicSettable',
  AccessPrivate = 'AccessPrivate'
}

export interface Program extends Members {
  Type: 'Program',
}

export interface Members {
  Declarations: Declaration[];
}

export interface Node extends WithPosition {
  Type: NodeType;
}

export interface WithPosition {
  StartPos?: Position;
  EndPos?:   Position;
}

export interface Position {
  Offset: number;
  Line:   number;
  Column: number;
}

export interface ArrayExpression extends Node {
  Type:                  NodeType.ArrayExpression;
  Values?:               Expression[] | null;
}

export interface AttachExpression extends Node {
  Type:                  NodeType.AttachExpression;
  Base?:                 Expression;
  Attachment?:           InvocationExpression;
}

export interface BinaryExpression extends Node {
  Type:      NodeType.BinaryExpression;
  Left:      Expression;
  Right:     Expression;
  Operation: Operation;
}

export interface BoolExpression extends Node {
  Type:      NodeType.BoolExpression;
  Value:     boolean;
}

export interface CastingExpression extends Node {
  Type:                       NodeType.CastingExpression;
  Expression:                 Expression;
  TypeAnnotation:             TypeAnnotation;
  ParentVariableDeclaration?: VariableDeclaration;
  Operation:                  Operation;
}

export interface TypeAnnotation extends WithPosition {
  AnnotatedType: Type;
  IsResource:    boolean;
}

export interface ConditionalExpression extends Node {
  Type:     NodeType.ConditionalExpression;
  Test:     Statement;
  Then:     Expression;
  Else:     Expression | null;
}

export interface CreateExpression extends Node {
  Type:                  NodeType.CreateExpression;
  InvocationExpression:  InvocationExpression;
}

export interface DestroyExpression extends Node {
  Type:                  NodeType.DestroyExpression;
  Expression:            Expression;
}

export interface DictionaryExpression extends Node {
  Type:                  NodeType.DictionaryExpression;
  Entries:               DictionaryEntry[] | null;
}

export interface DictionaryEntry extends Node {
  Type:  NodeType.DictionaryEntry;
  Key:   Expression;
  Value: Expression;
}

export interface FixedPointExpression extends Node {
  Type:             NodeType.FixedPointExpression;
  Scale:            number;
  Negative:         boolean;
  PositiveLiteral?: string;
  UnsignedInteger?: string;
  Fractional?:      string;
}

export interface ForceExpression extends Node {
  Type:                 NodeType.ForceExpression;
  Expression:           Expression | null;
}

export interface FunctionExpression extends Node {
  Type:                 NodeType.FunctionExpression;
  ParameterList:        ParameterList;
  ReturnTypeAnnotation: TypeAnnotation;
  FunctionBlock:        FunctionBlock;
}

export interface FunctionBlock extends Node {
  Block:           Block | null;
  Type:            NodeType.FunctionBlock;
  PreConditions?:  Condition[] | null;
  PostConditions?: Condition[] | null;
}

export interface Condition {
  Test:    Expression;
  Message: Expression;
  Kind:    ConditionKind;
}

export interface Block extends Node {
  Type:       NodeType.Block;
  Statements: Statement[];
}

export interface ParameterList extends WithPosition {
  Parameters: Parameter[] | null;
}

export interface Parameter extends WithPosition {
  TypeAnnotation: TypeAnnotation;
  Label:          string;
  Identifier:     Identifier;
}

export interface IdentifierExpression extends Node {
  Type:                 NodeType.IdentifierExpression;
  Identifier:           Identifier;
}

export interface Identifier extends WithPosition {
  Identifier: string;
}

export interface IndexExpression extends Node {
  Type:               NodeType.IndexExpression;
  TargetExpression:   Expression;
  IndexingExpression: Expression;
}

export interface IntegerExpression extends Node {
  Type:             NodeType.IntegerExpression;
  Base:             number;
  PositiveLiteral:  string;
  Value:            string;
}

export interface InvocationExpression extends Node {
  Type:              NodeType.InvocationExpression;
  InvokedExpression: Expression;
  TypeArguments:     TypeAnnotation[] | null;
  Arguments:         Argument[] | null;
  ArgumentsStartPos: Position;
}

export interface Argument extends WithPosition {
  Expression:           Expression;
  LabelStartPos?:       Position;
  LabelEndPos?:         Position;
  Label?:               string;
  TrailingSeparatorPos: Position;
}

export interface MemberExpression extends Node {
  Type:       NodeType.MemberExpression;
  Expression: Expression;
  Identifier: Identifier;
  AccessPos:  Position;
  Optional:   boolean;
}

export interface NilExpression extends Node {
  Type:                  NodeType.NilExpression;
}

export interface PathExpression extends Node {
  Type:                  NodeType.PathExpression;
  Domain:                Identifier;
  Identifier:            Identifier;
}

export interface ReferenceExpression extends Node {
  Type:       NodeType.ReferenceExpression;
  Expression: Expression;
  TargetType: Type;
}

export interface StringExpression extends Node {
  Type:      NodeType.StringExpression;
  Value:     string;
}

export interface UnaryExpression extends Node {
  Type:                  NodeType.UnaryExpression;
  Expression:            Expression | null;
  Operation:             Operation;
}

export interface VoidExpression extends Node {
  Type:                  NodeType.VoidExpression;
}

export interface AssignmentStatement extends Node {
  Type:     NodeType.AssignmentStatement;
  Target:   Expression;
  Transfer: Transfer;
  Value:    Expression;
}

export interface Transfer extends Node {
  Type:      NodeType.Transfer;
  Operation: TransferOperation;
}

export interface BreakStatement extends Node {
  Type:      NodeType.BreakStatement;
}

export interface ContinueStatement extends Node {
  Type:      NodeType.ContinueStatement;
}

export interface EmitStatement extends Node {
  Type:                  NodeType.EmitStatement;
  InvocationExpression:  InvocationExpression;
}

export interface ExpressionStatement extends Node {
  Type:                  NodeType.ExpressionStatement;
  Expression:            Expression;
}

export interface ForStatement extends Node {
  Type:       NodeType.ForStatement;
  Value:      Expression;
  Index:      Identifier | null;
  Block:      Block;
  Identifier: Identifier;
}

export interface IfStatement extends Node {
  Type:     NodeType.IfStatement;
  Test:     Expression | VariableDeclaration;
  Then:     Block;
  Else:     Block | null;
}

export interface ReturnStatement extends Node {
  Type:                  NodeType.ReturnStatement;
  Expression:            Expression | null;
}

export interface SwapStatement extends Node {
  Type:     NodeType.SwapStatement;
  Left:     Expression;
  Right:    Expression;
}

export interface SwitchStatement extends Node {
  Type:                  NodeType.SwitchStatement;
  Expression:            Expression;
  TrailingSeparatorPos:  Position;
  Cases:                 SwitchCase[];
}

export interface SwitchCase {
  Type:        NodeType.SwitchCase;
  Expression?: Expression;
  Statements?: Statement[];
}

export interface WhileStatement extends Node {
  Type:     NodeType.WhileStatement;
  Test:     Expression;
  Block:    Block;
}

export interface AttachmentDeclaration extends Node {
  Type:          NodeType.AttachmentDeclaration;
  Access:        Access;
  Identifier:    Identifier;
  Conformances:  NominalType[];
  BaseType:      NominalType;
  Members:       Members;
  DocString:     string;
}

export interface CompositeDeclaration extends Node {
  Type:          NodeType.CompositeDeclaration;
  Members:       Members;
  DocString:     string;
  Conformances:  NominalType[] | null;
  Identifier:    Identifier;
  Access:        Access;
  CompositeKind: CompositeKind;
}

export interface EnumCaseDeclaration extends Node {
  Type:           NodeType.EnumCaseDeclaration;
  DocString:      string;
  Identifier:     Identifier;
  Access:         Access;
}

export interface FieldDeclaration extends Node {
  Type:           NodeType.FieldDeclaration;
  TypeAnnotation: TypeAnnotation;
  DocString:      string;
  Identifier:     Identifier;
  Access:         Access;
  VariableKind:   VariableKind;
  IsStatic:       boolean;
  IsNative:       boolean;
}

export interface FunctionDeclaration extends Node {
  Type:                 NodeType.FunctionDeclaration;
  TypeParameterList:    TypeParameterList | null;
  ParameterList:        ParameterList | null;
  ReturnTypeAnnotation: TypeAnnotation | null;
  FunctionBlock:        FunctionBlock | null;
  DocString:            string;
  Identifier:           Identifier;
  Access:               Access;
  IsStatic:             boolean;
  IsNative:             boolean;
}

export interface TypeParameterList {
  TypeParameters: TypeParameter[]
}

export interface TypeParameter {
  Identifier:     Identifier;
  TypeBound:      TypeAnnotation | null;
}

export interface ImportDeclaration extends Node {
  Type:        NodeType.ImportDeclaration;
  Location:    Location;
  Identifiers: Identifier[];
  LocationPos: Position;
}

export interface Location {
  Type:    'AddressLocation';
  Address: string;
  Name:    string;
}

export interface InterfaceDeclaration extends Node {
  Type:          NodeType.InterfaceDeclaration;
  Members:       Members;
  DocString:     string;
  Identifier:    Identifier;
  Access:        Access;
  CompositeKind: CompositeKind;
}

export interface PragmaDeclaration extends Node {
  Type:          NodeType.PragmaDeclaration;
  Expression:    Expression;
}

export interface SpecialFunctionDeclaration extends Node {
  Type:                NodeType.SpecialFunctionDeclaration;
  FunctionDeclaration: FunctionDeclaration;
  Kind:                DeclarationKind;
}

export interface TransactionDeclaration extends Node {
  Type:                NodeType.TransactionDeclaration;
  ParameterList:       ParameterList,
  Fields:              FieldDeclaration[],
  Prepare:             SpecialFunctionDeclaration | null,
  PreConditions?:      Condition[] | null;
  PostConditions?:     Condition[] | null;
  Execute:             SpecialFunctionDeclaration | null,
  DocString:           string,
}

export interface VariableDeclaration extends Node {
  Type:               NodeType.VariableDeclaration;
  Value:              Expression;
  SecondValue:        Expression | null;
  TypeAnnotation:     TypeAnnotation | null;
  Transfer:           Transfer;
  SecondTransfer:     Transfer | null;
  DocString:          string;
  Identifier:         Identifier;
  Access:             Access;
  ParentIfStatement?: IfStatement | null;
  IsConstant:         boolean;
}

export interface ConstantSizedType {
  Type:            NodeType.ConstantSizedType;
  ElementType:     Type;
  Size:            number;
}

export interface DictionaryType {
  Type:      NodeType.DictionaryType;
  KeyType:   Type;
  ValueType: Type;
}

export interface FunctionType {
  Type:                     NodeType.FunctionType;
  ReturnTypeAnnotation:     TypeAnnotation;
  ParameterTypeAnnotations: TypeAnnotation[];
}

export interface InstantiationType {
  Type:                  NodeType.InstantiationType;
  InstantiatedType:      Type;
  TypeArguments:         TypeAnnotation[];
  TypeArgumentsStartPos: Position;
}

export interface NominalType {
  Type:                  NodeType.NominalType;
  Identifier:            Identifier;
  NestedIdentifiers?:    Identifier[];
}

export interface OptionalType {
  Type:                  NodeType.OptionalType;
  ElementType:           Type;
}

export interface ReferenceType {
  Type:                  NodeType.ReferenceType;
  ReferencedType:        Type;
  Authorized:            boolean;
}

export interface RestrictedType {
  Type:            NodeType.RestrictedType;
  RestrictedType?: Type| null;
  Restrictions?:   NominalType[];
}

export interface VariableSizedType {
  Type:                  NodeType.VariableSizedType;
  ElementType:           Type;
}

export type Declaration =
| AttachmentDeclaration
| CompositeDeclaration
| EnumCaseDeclaration
| FieldDeclaration
| FunctionDeclaration
| ImportDeclaration
| InterfaceDeclaration
| PragmaDeclaration
| SpecialFunctionDeclaration
| TransactionDeclaration
| VariableDeclaration

export type Statement =
  | AssignmentStatement
  | BreakStatement
  | ContinueStatement
  | EmitStatement
  | ExpressionStatement
  | ForStatement
  | IfStatement
  | ReturnStatement
  | SwapStatement
  | SwitchStatement
  | WhileStatement
  | Declaration // All declarations are statements

export type Expression =
  | ArrayExpression
  | AttachExpression
  | BinaryExpression
  | BoolExpression
  | CastingExpression
  | ConditionalExpression
  | CreateExpression
  | DestroyExpression
  | DictionaryExpression
  | FixedPointExpression
  | ForceExpression
  | FunctionExpression
  | IdentifierExpression
  | IndexExpression
  | IntegerExpression
  | InvocationExpression
  | MemberExpression
  | NilExpression
  | PathExpression
  | ReferenceExpression
  | StringExpression
  | UnaryExpression
  | VoidExpression

export type Type =
  | ConstantSizedType
  | DictionaryType
  | FunctionType
  | InstantiationType
  | NominalType
  | OptionalType
  | ReferenceType
  | RestrictedType
  | VariableSizedType

export type AnyNode = Expression | Statement | Declaration | Type | Program

export type SimpleVisitors<TState> = {
  [type in AnyNode['Type']]?: (node: Extract<AnyNode, { Type: type }>, state: TState) => void
}

export type RecursiveVisitors<TState> = {
  [type in AnyNode['Type']]?: (
    node: Extract<AnyNode, { Type: type }>,
    state: TState,
    callback: WalkerCallback<TState>,
  ) => void
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
