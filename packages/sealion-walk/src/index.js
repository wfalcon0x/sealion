export const base = {}

const ignore = (_node, _st, _c) => {}
const leafNode = ignore

base.Program = base.CompositeMembers = base.InterfaceMembers = (node, st, c) => {
  if (node.Declarations)
    for (let stmt of node.Declarations)
      c(stmt, st)
}

// Declarations

base.ImportDeclaration = leafNode

base.TransactionDeclaration = (node, st, c) => {
  c(node.ParameterList, st, 'ParameterList')
  for (let stmt of node.Fields)
    c(stmt, st)
  c(node.Prepare, st, 'SpecialFunctionDeclaration')
  c(node.Execute, st, 'SpecialFunctionDeclaration')
}

base.ParameterList = (node, st, c) => {
  if (node.Parameters)
    for (let stmt of node.Parameters)
      c(stmt, st, 'Parameter')
}

base.SpecialFunctionDeclaration = (node, st, c) => {
  c(node.FunctionDeclaration, st)
}

base.InterfaceDeclaration = (node, st, c) => {
  c(node.Members, st, 'InterfaceMembers')
}

base.FieldDeclaration = base.Parameter = (node, st, c) => {
  c(node.TypeAnnotation, st, 'TypeAnnotation')
}

base.CompositeDeclaration = (node, st, c) => {
  c(node.Members, st, 'CompositeMembers')
}

base.EnumCaseDeclaration = leafNode

base.VariableDeclaration = (node, st, c) => {
  c(node.Value, st)
  if (node.SecondValue)
    c(node.SecondValue, st)
}

base.Value = (node, st, c) => {
  c(node.Left, st)
  c(node.Right, st)
}

base.FunctionDeclaration = (node, st, c) => {
  if (node.ParameterList)
    c(node.ParameterList, st, 'ParameterList')
  if (node.FunctionBlock)
    c(node.FunctionBlock, st, 'FunctionBlock')
  if (node.ReturnTypeAnnotation)
    c(node.ReturnTypeAnnotation, st, 'TypeAnnotation')
}

base.FunctionBlock = (node, st, c) => {
  c(node.Block, st)
  if (node.Preconditions)
    for (let stmt of node.Preconditions)
      c(stmt, st, 'Precondition')
}

base.Precondition = (node, st, c) => {
  c(node.Test, st)
  c(node.Message, st)
}

base.Block = (node, st, c) => {
  if (node.Statements)
    for (let stmt of node.Statements)
      c(stmt, st)
}

// Statements

base.AssignmentStatement = (node, st, c) => {
  c(node.Target, st)
  c(node.Value, st)
}

base.WhileStatement = (node, st, c) => {
  c(node.Test, st)
  c(node.Block, st)
}

base.IfStatement = (node, st, c) => {
  c(node.Test, st)
  c(node.Then, st)
  if (node.Else)
    c(node.Else, st)
}

base.SwitchStatement = (node, st, c) => {
  c(node.Expression, st)
}

base.ForStatement = (node, st, c) => {
  c(node.Value, st)
  c(node.Block, st)
}

base.ReturnStatement = (node, st, c) => {
  if (node.Expression)
    c(node.Expression, st)
}

base.EmitStatement = (node, st, c) => {
  c(node.InvocationExpression, st)
}

base.ContinueStatement = leafNode

base.BreakStatement = leafNode

base.ExpressionStatement = base.ForceExpression = (node, st, c) => {
  c(node.Expression, st)
}

// Expressions

base.FunctionExpression = (node, st, c) => {
  if (node.ParameterList)
    c(node.ParameterList, st, 'ParameterList')
  if (node.FunctionBlock)
    c(node.FunctionBlock, st)
  if (node.ReturnTypeAnnotation)
    c(node.ReturnTypeAnnotation, st, 'TypeAnnotation')
}

base.ArrayExpression = (node, st, c) => {
  if (node.Values)
    for (let stmt of node.Values)
      c(stmt, st)
}

base.MemberExpression = (node, st, c) => {
  c(node.Expression, st)
}

base.ConditionalExpression = (node, st, c) => {
  c(node.Test, st)
  c(node.Then, st)
  c(node.Else, st)
}

base.DestroyExpression = (node, st, c) => {
  c(node.Expression, st)
}

base.CreateExpression = (node, st, c) => {
  c(node.InvocationExpression, st)
}

base.UnaryExpression = (node, st, c) => {
  c(node.Expression, st)
}

base.DictionaryExpression = (node, st, c) => {
  if (node.Entries)
    for (let stmt of node.Entries) //
      c(stmt, st)
}

base.DictionaryEntry = (node, st, c) => {
  c(node.Key, st)
  c(node.Value, st)
}

base.FixedPointExpression = leafNode

base.BoolExpression = leafNode

base.NilExpression = leafNode

base.InvocationExpression = (node, st, c) => {
  c(node.InvokedExpression, st)
  if (node.TypeArguments)
    for (let stmt of node.TypeArguments)
      c(stmt, st, 'TypeAnnotation')
  if (node.Arguments)
    for (let stmt of node.Arguments)
      c(stmt, st, 'ExpressionStatement')
}

base.ReferenceExpression = (node, st, c) => {
  c(node.Expression, st)
}

base.BinaryExpression = (node, st, c) => {
  c(node.Left, st)
  c(node.Right, st)
}

base.IdentifierExpression = leafNode

base.PathExpression = leafNode

base.StringExpression = leafNode

base.IntegerExpression = leafNode

base.CastingExpression = (node, st, c) => {
  c(node.Expression, st)
  c(node.TypeAnnotation, st, 'TypeAnnotation')
}

base.IndexExpression = (node, st, c) => {
  c(node.TargetExpression, st)
  c(node.IndexingExpression, st)
}

// Types

base.TypeAnnotation = (node, st, c) => {
  c(node.AnnotatedType, st)
}

base.FunctionType = (node, st, c) => {
  if (node.ReturnTypeAnnotation)
    c(node.ReturnTypeAnnotation, st, 'TypeAnnotation')
  if (node.ParameterTypeAnnotations)
    for (let stmt of node.ParameterTypeAnnotations)
      c(stmt, st, 'TypeAnnotation')
}

base.OptionalType = (node, st, c) => {
  c(node.ElementType, st)
}

base.InstantiationType = (node, st, c) => {
  if (node.InstantiatedType) //
    c(node.InstantiatedType, st)
  if (node.TypeArguments)
    for (let stmt of node.TypeArguments)
      c(stmt, st, 'TypeAnnotation')
}

base.VariableSizedType = (node, st, c) => {
  c(node.ElementType, st)
}

base.NominalType = leafNode

base.ReferenceType = (node, st, c) => {
  c(node.ReferencedType, st)
}

base.RestrictedType = (node, st, c) => {
  if (node.RestrictedType)
    c(node.RestrictedType, st)
  for (let stmt of node.Restrictions)
    c(stmt, st)
}

base.ConstantSizedType = (node, st, c) => {
  c(node.ElementType, st)
  c(node.Size, st)
}

base.DictionaryType = (node, st, c) => {
  c(node.KeyType, st)
  c(node.ValueType, st)
}

export function simple(node, visitors, baseVisitor, state, override) {
  if (!baseVisitor) baseVisitor = base
  ;(function c(node, st, override) {
    let type = override || node.Type,
      found = visitors[type]
    baseVisitor[type](node, st, c)
    if (found) found(node, st)
  })(node, state, override)
}

