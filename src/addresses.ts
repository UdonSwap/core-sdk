import { ChainId, SUPPORTED_CHAINS, SupportedChainsType } from './chains'

type AddressMap = { [chainId: number]: string }

type ChainAddresses = {
  v3CoreFactoryAddress: string
  multicallAddress: string
  quoterAddress: string
  v3MigratorAddress?: string
  nonfungiblePositionManagerAddress?: string
  tickLensAddress?: string
  swapRouter02Address?: string
  v1MixedRouteQuoterAddress?: string
}

// const DEFAULT_NETWORKS = [ChainId.MODE]

// function constructSameAddressMap(address: string, additionalNetworks: ChainId[] = []): AddressMap {
//   return DEFAULT_NETWORKS.concat(additionalNetworks).reduce<AddressMap>((memo, chainId) => {
//     memo[chainId] = address
//     return memo
//   }, {})
// }

export const UNISWAP_NFT_AIRDROP_CLAIM_ADDRESS = '0x8B799381ac40b838BBA4131ffB26197C432AFe78'

/**
 * @deprecated use V2_FACTORY_ADDRESSES instead
 */
export const V2_FACTORY_ADDRESS = '0x2eeFa13703Eb4483Aa588Fd5D6bfb034E1FB8d97'
export const V2_FACTORY_ADDRESSES: AddressMap = {
  [ChainId.MODE]: '0x2eeFa13703Eb4483Aa588Fd5D6bfb034E1FB8d97'
}
/**
 * @deprecated use V2_ROUTER_ADDRESSES instead
 */
export const V2_ROUTER_ADDRESS = '0x6AD9F54098EdA3A6577c379516EC934d6873851F'
export const V2_ROUTER_ADDRESSES: AddressMap = {
  [ChainId.MODE]: '0x6AD9F54098EdA3A6577c379516EC934d6873851F',
}

// Networks that share most of the same addresses i.e. Mainnet, Goerli, Optimism, Arbitrum, Polygon
const MODE_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x5091730383fE325040813281231D323049Eeaf8b',
  multicallAddress: '0xcd9845c3233Dbd3274Be6054f21CE26C79e5a65E',
  quoterAddress: '0xF300FEbb15a67D776CD2eC706b61C883e067763b',
  v3MigratorAddress: '0x2a8cC9911201FD188fDD641df81044C9a6F76B01',
  nonfungiblePositionManagerAddress: '0xEF3e32154B5Fb96D56D339e655A5edf5f5661Af8',
  tickLensAddress: '0xE5a7A29FF8D7F6EEc07377b791F4F9db7f3FFDBC',
  swapRouter02Address: '0x22dc8CA232debF877eFF0628FF9215519e8083f4'
}

export const CHAIN_TO_ADDRESSES_MAP: Record<SupportedChainsType, ChainAddresses> = {
  [ChainId.MODE]: MODE_ADDRESSES,
}

/* V3 Contract Addresses */
export const V3_CORE_FACTORY_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].v3CoreFactoryAddress
    return memo
  }, {})
}

export const V3_MIGRATOR_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const v3MigratorAddress = CHAIN_TO_ADDRESSES_MAP[chainId].v3MigratorAddress
    if (v3MigratorAddress) {
      memo[chainId] = v3MigratorAddress
    }
    return memo
  }, {})
}

export const MULTICALL_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].multicallAddress
    return memo
  }, {})
}

/**
 * The oldest V0 governance address
 */
// export const GOVERNANCE_ALPHA_V0_ADDRESSES: AddressMap = constructSameAddressMap(
//   '0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F'
// )
/**
 * The older V1 governance address
 */
// export const GOVERNANCE_ALPHA_V1_ADDRESSES: AddressMap = {
//   [ChainId.MAINNET]: '0xC4e172459f1E7939D522503B81AFAaC1014CE6F6'
// }
/**
 * The latest governor bravo that is currently admin of timelock
 */
// export const GOVERNANCE_BRAVO_ADDRESSES: AddressMap = {
//   [ChainId.MAINNET]: '0x408ED6354d4973f66138C91495F2f2FCbd8724C3'
// }

// export const TIMELOCK_ADDRESSES: AddressMap = constructSameAddressMap('0x1a9C8182C09F50C8318d769245beA52c32BE35BC')

// export const MERKLE_DISTRIBUTOR_ADDRESS: AddressMap = {
//   [ChainId.MAINNET]: '0x090D4613473dEE047c3f2706764f49E0821D256e'
// }

// export const ARGENT_WALLET_DETECTOR_ADDRESS: AddressMap = {
//   [ChainId.MAINNET]: '0xeca4B0bDBf7c55E9b7925919d03CbF8Dc82537E8'
// }

export const QUOTER_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].quoterAddress
    return memo
  }, {})
}

export const NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const nonfungiblePositionManagerAddress = CHAIN_TO_ADDRESSES_MAP[chainId].nonfungiblePositionManagerAddress
    if (nonfungiblePositionManagerAddress) {
      memo[chainId] = nonfungiblePositionManagerAddress
    }
    return memo
  }, {})
}

// export const ENS_REGISTRAR_ADDRESSES: AddressMap = {
//   ...constructSameAddressMap('0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e')
// }

// export const SOCKS_CONTROLLER_ADDRESSES: AddressMap = {
//   [ChainId.MAINNET]: '0x65770b5283117639760beA3F867b69b3697a91dd'
// }

export const TICK_LENS_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const tickLensAddress = CHAIN_TO_ADDRESSES_MAP[chainId].tickLensAddress
    if (tickLensAddress) {
      memo[chainId] = tickLensAddress
    }
    return memo
  }, {})
}

// export const MIXED_ROUTE_QUOTER_V1_ADDRESSES: AddressMap = SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
//   const v1MixedRouteQuoterAddress = CHAIN_TO_ADDRESSES_MAP[chainId].v1MixedRouteQuoterAddress
//   if (v1MixedRouteQuoterAddress) {
//     memo[chainId] = v1MixedRouteQuoterAddress
//   }
//   return memo
// }, {})

export const SWAP_ROUTER_02_ADDRESSES = (chainId: number) => {
  if (SUPPORTED_CHAINS.includes(chainId)) {
    const id = chainId as SupportedChainsType
    return CHAIN_TO_ADDRESSES_MAP[id].swapRouter02Address ?? '0x22dc8CA232debF877eFF0628FF9215519e8083f4'
  }
  return ''
}
