import { simple } from '../src/'
import simpleAst from './fixtures/simple.json'

describe('walker', () => {
  it('Should be able to walk a simple AST', async () => {
    const visitor = {
      Program: function (node) {},
      FunctionDeclaration: function (node) {},
      FunctionBlock: function (node) {},
      ImportDeclaration: function (node) {},
      TransactionDeclaration: function (node) {},
    }
    simple(simpleAst.program, visitor)
  })
})
