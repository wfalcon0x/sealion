export const base = {}

const ignore = (_node, _st, _c) => {}
const leafNode = ignore

base.Program = (node, st, c) => {
  if (node.Declarations)
    for (const decl of node.Declarations)
      c(decl, st)
}

// Declarations

base.ImportDeclaration = leafNode

base.TransactionDeclaration = (node, st, c) => {
  helper.ParameterList(node.ParameterList, st, c)
  for (const flds of node.Fields)
    c(flds, st)
  if (node.Prepare)
    c(node.Prepare, st, 'SpecialFunctionDeclaration')
  if (node.Execute)
    c(node.Execute, st, 'SpecialFunctionDeclaration')
}

base.SpecialFunctionDeclaration = (node, st, c) => {
  c(node.FunctionDeclaration, st)
}

base.InterfaceDeclaration = (node, st, c) => {
  helper.Members(node.Members, st, c)
}

base.FieldDeclaration = (node, st, c) => {
  helper.TypeAnnotation(node.TypeAnnotation, st, c)
}

base.CompositeDeclaration = (node, st, c) => {
  helper.Members(node.Members, st, c)
}

base.AttachmentDeclaration = (node, st, c) => {
  c(node.BaseType, st)
  if (node.Conformances)
    for (const conf of node.Conformances)
      c(conf, st)
  helper.Members(node.Members, st, c)
}

base.PragmaDeclaration = (node, st, c) => {
  c(node.Expression, st)
}

base.EnumCaseDeclaration = leafNode

base.VariableDeclaration = (node, st, c) => {
  c(node.Value, st)
  if (node.SecondValue)
    c(node.SecondValue, st)
}

base.FunctionDeclaration = (node, st, c) => {
  if (node.ParameterList)
    helper.ParameterList(node.ParameterList, st, c)
  if (node.FunctionBlock)
    c(node.FunctionBlock, st, 'FunctionBlock')
  if (node.ReturnTypeAnnotation)
    helper.TypeAnnotation(node.ReturnTypeAnnotation, st, c)
}

base.FunctionBlock = (node, st, c) => {
  if (node.Block)
    c(node.Block, st)
  if (node.PreConditions)
    for (const prcn of node.PreConditions)
      helper.Condition (prcn, st, c)
}

base.Block = (node, st, c) => {
  if (node.Statements)
    for (const stmt of node.Statements)
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

base.SwapStatement = (node, st, c) => {
  c(node.Left, st)
  c(node.Right, st)
}

base.ExpressionStatement = (node, st, c) => {
  c(node.Expression, st)
}

base.RemoveStatement = (node, st, c) => {
  c(node.Value, st)
  c(node.Attachment, st)
}

// Expressions

base.FunctionExpression = (node, st, c) => {
  if (node.ParameterList)
    helper.ParameterList(node.ParameterList, st, c)
  if (node.FunctionBlock)
    c(node.FunctionBlock, st)
  if (node.ReturnTypeAnnotation)
    helper.TypeAnnotation(node.ReturnTypeAnnotation, st, c)
}

base.ArrayExpression = (node, st, c) => {
  if (node.Values)
    for (const vals of node.Values)
      c(vals, st)
}

base.MemberExpression = (node, st, c) => {
  c(node.Expression, st)
}

base.ForceExpression = (node, st, c) => {
  if (node.Expression)
    c(node.Expression, st)
}

base.ConditionalExpression = (node, st, c) => {
  c(node.Test, st)
  c(node.Then, st)
  if (node.Else)
    c(node.Else, st)
}

base.DestroyExpression = (node, st, c) => {
  c(node.Expression, st)
}

base.CreateExpression = (node, st, c) => {
  c(node.InvocationExpression, st)
}

base.UnaryExpression = (node, st, c) => {
  if (node.Expression)
    c(node.Expression, st)
}

base.DictionaryExpression = (node, st, c) => {
  if (node.Entries)
    for (const entr of node.Entries)
      helper.DictionaryEntry(entr, st, c)
}

base.FixedPointExpression = leafNode

base.BoolExpression = leafNode

base.NilExpression = leafNode

base.VoidExpression = leafNode

base.InvocationExpression = (node, st, c) => {
  c(node.InvokedExpression, st)
  if (node.TypeArguments)
    for (const targ of node.TypeArguments)
      helper.TypeAnnotation(targ, st, c)
  if (node.Arguments)
    for (const arg of node.Arguments)
      helper.Argument(arg, st, c)
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
  helper.TypeAnnotation(node.TypeAnnotation, st, c)
}

base.IndexExpression = (node, st, c) => {
  c(node.TargetExpression, st)
  c(node.IndexingExpression, st)
}

base.AttachExpression = (node, st, c) => {
  c(node.Base, st)
  c(node.Attachment, st)
}

// Types

base.FunctionType = (node, st, c) => {
  if (node.ReturnTypeAnnotation)
    helper.TypeAnnotation(node.ReturnTypeAnnotation, st, c)
  if (node.ParameterTypeAnnotations)
    for (const ptan of node.ParameterTypeAnnotations)
      helper.TypeAnnotation(ptan, st, c)
}

base.OptionalType = (node, st, c) => {
  c(node.ElementType, st)
}

base.InstantiationType = (node, st, c) => {
  if (node.InstantiatedType)
    c(node.InstantiatedType, st)
  if (node.TypeArguments)
    for (const targ of node.TypeArguments)
      helper.TypeAnnotation(targ, st, c)
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
  if (node.Restrictions)
    for (const rest of node.Restrictions)
      c(rest, st)
}

base.ConstantSizedType = (node, st, c) => {
  c(node.ElementType, st)
}

base.DictionaryType = (node, st, c) => {
  c(node.KeyType, st)
  c(node.ValueType, st)
}

// Node Argument Helpers

const helper = {}

helper.Argument = (node, st, c) => {
  c(node.Expression, st)
}

helper.Condition = (node, st, c) => {
  c(node.Test, st)
  c(node.Message, st)
}

helper.DictionaryEntry = (node, st, c) => {
  c(node.Key, st)
  c(node.Value, st)
}

helper.Members = (node, st, c) => {
  if (node.Declarations)
    for (const decl of node.Declarations)
      c(decl, st)
}

helper.Parameter = (node, st, c) => {
  helper.TypeAnnotation(node.TypeAnnotation, st, c)
}

helper.ParameterList = (node, st, c) => {
  if (node.Parameters)
    for (const param of node.Parameters)
      helper.Parameter(param, st, c)
}

helper.TypeAnnotation = (node, st, c) => {
  c(node.AnnotatedType, st)
}

export function simple(node, visitors, baseVisitor, state, override) {
  if (!baseVisitor) baseVisitor = base
  ;(function c(node, st, override) {
    const type = override || node.Type,
      found = visitors[type]
    baseVisitor[type](node, st, c)
    if (found) found(node, st)
  })(node, state, override)
}

