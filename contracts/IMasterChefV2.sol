pragma solidity 0.8.9;

interface IMasterChefV2 {
    struct PoolInfo {
        uint128 accSushiPerShare; // Accumulated SUSHIs per share, times 1e12. See below.
        uint64 lastRewardBlock; // Last block number that SUSHIs distribution occurs.
        uint64 allocPoint; // How many allocation points assigned to this pool. SUSHIs to distribute per block.
    }

    function lpToken(uint256 poolId) external view returns (address);

    function poolInfo(uint256 poolId) external view returns (PoolInfo memory);
}
