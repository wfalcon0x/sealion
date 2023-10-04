import { simple } from '../src/'

import removeStatement from './fixtures/attachments/removeStatement.json'
import attachExpression from './fixtures/attachments/attachExpression.json'
import attachmentDeclaration from './fixtures/attachments/attachmentDeclaration.json'

describe('simple walker', () => {
  it('should walk remove statement', async () => {
    const visitor = {
      AssignmentStatement: function (node) {
        expect(node.Type).toBe('RemoveStatement')
      },
      IdentifierExpression: function (node) {
        expect(node.Identifier.Identifier).toBe('baz')
      },
      NominalType: function (node) {
        expect(node.Identifier.Identifier).toBe('E')
      },
    }
    simple(removeStatement, visitor)
  })

  it('should walk attach expression', async () => {
    const visitor = {
      AttachExpression: function (node) {
        expect(node.Type).toBe('AttachExpression')
      },
    }
    simple(attachExpression, visitor)
  })

  it('should walk attachment declaration', async () => {
    const visitor = {
      AttachmentDeclaration: function (node) {
        expect(node.Type).toBe('AttachmentDeclaration')
      },
    }
    simple(attachmentDeclaration, visitor)
  })
})
