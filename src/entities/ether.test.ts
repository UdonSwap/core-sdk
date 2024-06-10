import { Ether } from './ether'

describe('Ether', () => {
  it('static constructor uses cache', () => {
    expect(Ether.onChain(919) === Ether.onChain(919)).toEqual(true)
  })
  it('caches once per chain ID', () => {
    expect(Ether.onChain(919) !== Ether.onChain(2)).toEqual(true)
  })
  it('#equals returns false for diff chains', () => {
    expect(Ether.onChain(919).equals(Ether.onChain(2))).toEqual(false)
  })
  it('#equals returns true for same chains', () => {
    expect(Ether.onChain(919).equals(Ether.onChain(919))).toEqual(true)
  })
})
