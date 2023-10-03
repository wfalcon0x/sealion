import { simple } from '../src/'

import assigmentStatement from './fixtures/statements/assigmentStatement.json'

describe('simple walker', () => {
  it('should walk assignment statement', async () => {
    const visitor = {
      AssignmentStatement: function (node) {
        expect(node.Type).toBe('AssignmentStatement')
      },
    }
    simple(assigmentStatement, visitor)
  })
})
