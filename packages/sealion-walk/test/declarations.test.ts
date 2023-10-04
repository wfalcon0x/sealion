import { simple } from '../src'

import pragmaDeclaration from './fixtures/declarations/pragmaDeclaration.json'

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

})
