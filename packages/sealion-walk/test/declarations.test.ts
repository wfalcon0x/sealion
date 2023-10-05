import { simple } from '../src'

import pragmaDeclaration from './fixtures/declarations/pragmaDeclaration.json'
import functionDeclaration from './fixtures/declarations/functionDeclaration.json'

describe('simple walker', () => {
  it('should walk pragma declaration', async () => {
    const visitor = {
      PragmaDeclaration: function (node) {
        expect(node.Type).toBe('PragmaDeclaration')
      },
      BoolExpression: function (node) {
        expect(node.Value).toBe(false)
      },
    }
    simple(pragmaDeclaration, visitor)
  })

  it('should walk function declaration', async () => {
    const visitor = {
      FunctionDeclaration: function (node) {
        expect(node.Type).toBe('FunctionDeclaration')
      },
    }
    simple(functionDeclaration, visitor)
  })

})
