//SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

interface IWethMaker {
    event SetTrusted(address indexed user, bool isTrusted);

    function bridges(address) external view returns (address);

    function owner() external view returns (address);
}
