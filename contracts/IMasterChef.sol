pragma solidity 0.8.9;

import "./IERC20.sol";

interface IOwnable {
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    function owner() external view returns (address);

    function renounceOwnership() external;

    function transferOwnership(address newOwner) external;
}

interface IMasterChef is IOwnable {
    struct UserInfo {
        uint256 amount; // How many LP tokens the user has provided.
        uint256 rewardDebt; // Reward debt. See explanation below.
    }

    struct PoolInfo {
        IERC20 lpToken; // Address of LP token contract.
        uint256 allocPoint; // How many allocation points assigned to this pool. SUSHIs to distribute per block.
        uint256 lastRewardBlock; // Last block number that SUSHIs distribution occurs.
        uint256 accSushiPerShare; // Accumulated SUSHIs per share, times 1e12. See below.
    }

    function sushi() external view returns (IERC20);

    function devaddr() external view returns (address);

    function bonusEndBlock() external view returns (uint256);

    function sushiPerBlock() external view returns (uint256);

    function sushiPerSecond() external view returns (uint256); // for MiniChef

    function BONUS_MULTIPLIER() external view returns (uint256);

    function migrator() external view returns (address);

    function poolInfo(uint256 poolId) external view returns (PoolInfo memory);

    function userInfo(uint256 poolId, address user) external view returns (UserInfo memory);

    function totalAllocPoint() external view returns (uint256);

    function startBlock() external view returns (uint256);

    event Deposit(address indexed user, uint256 indexed pid, uint256 amount);
    event Withdraw(address indexed user, uint256 indexed pid, uint256 amount);
    event EmergencyWithdraw(address indexed user, uint256 indexed pid, uint256 amount);

    function poolLength() external view returns (uint256);

    function add(
        uint256 _allocPoint,
        IERC20 _lpToken,
        bool _withUpdate
    ) external;

    function set(
        uint256 _pid,
        uint256 _allocPoint,
        bool _withUpdate
    ) external;

    function setMigrator(address _migrator) external;

    function migrate(uint256 _pid) external;

    function getMultiplier(uint256 _from, uint256 _to) external view returns (uint256);

    function pendingSushi(uint256 _pid, address _user) external view returns (uint256);

    function massUpdatePools() external;

    function updatePool(uint256 _pid) external;

    function deposit(uint256 _pid, uint256 _amount) external;

    function withdraw(uint256 _pid, uint256 _amount) external;

    function emergencyWithdraw(uint256 _pid) external;

    function dev(address _devaddr) external;
}
