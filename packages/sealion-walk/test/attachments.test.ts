import { simple } from '../src/'

import removeStatement from './fixtures/attachments/removeStatement.json'
import attachExpression from './fixtures/attachments/attachExpression.json'
import attachmentDeclaration from './fixtures/attachments/attachmentDeclaration.json'
import { AttachExpression, AttachmentDeclaration, IdentifierExpression, NominalType, RemoveStatement } from '../src/typings'

describe('simple walker', () => {
  it('should walk remove statement', async () => {
    const visitor = {
      AssignmentStatement: function (node: RemoveStatement) {
        expect(node.Type).toBe('RemoveStatement')
        expect(node.Value.Type).toBe('IdentifierExpression')
      },
      IdentifierExpression: function (node: IdentifierExpression) {
        expect(node.Identifier.Identifier).toBe('baz')
      },
      NominalType: function (node: NominalType) {
        expect(node.Identifier.Identifier).toBe('E')
      },
    }
    simple(removeStatement, visitor)
  })

  it('should walk attach expression', async () => {
    const visitor = {
      AttachExpression: function (node: AttachExpression) {
        expect(node.Type).toBe('AttachExpression')
      },
    }
    simple(attachExpression, visitor)
  })

  it('should walk attachment declaration', async () => {
    const visitor = {
      AttachmentDeclaration: function (node: AttachmentDeclaration) {
        expect(node.Type).toBe('AttachmentDeclaration')
      },
    }
    simple(attachmentDeclaration, visitor)
  })
})
