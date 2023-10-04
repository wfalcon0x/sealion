import { simple } from '../src/'

import assigmentStatement from './fixtures/statements/assigmentStatement.json'

describe('simple walker', () => {
  it('should walk assignment statement', async () => {
    const visitor = {
      AssignmentStatement: function (node) {
        expect(node.Type).toBe('AssignmentStatement')
        expect(node.Transfer.Operation).toBe('TransferOperationCopy')
      },
      IdentifierExpression: function (node) {
        expect(node.Identifier.Identifier).toBe('foobar')
      },
      BoolExpression: function (node) {
        expect(node.Value).toBeFalsy()
      },
    }
    simple(assigmentStatement, visitor)
  })
})
