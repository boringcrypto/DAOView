//SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

interface IWethMaker {
    event SetTrusted(address indexed user, bool isTrusted);

    function bridges(address) external view returns (address);

    function owner() external view returns (address);

    function withdraw(
        address token,
        address to,
        uint256 _value
    ) external;

    function burnPairs(
        address[] calldata lpTokens,
        uint256[] calldata amounts,
        uint256[] calldata minimumOut0,
        uint256[] calldata minimumOut1
    ) external;
}
