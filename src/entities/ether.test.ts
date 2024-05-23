import { ETHER } from './ether'

describe('Ether', () => {
  it('static constructor uses cache', () => {
    expect(ETHER.onChain(1) === ETHER.onChain(1)).toEqual(true)
  })
  it('caches once per chain ID', () => {
    expect(ETHER.onChain(1) !== ETHER.onChain(2)).toEqual(true)
  })
  it('#equals returns false for diff chains', () => {
    expect(ETHER.onChain(1).equals(ETHER.onChain(2))).toEqual(false)
  })
  it('#equals returns true for same chains', () => {
    expect(ETHER.onChain(1).equals(ETHER.onChain(1))).toEqual(true)
  })
})
