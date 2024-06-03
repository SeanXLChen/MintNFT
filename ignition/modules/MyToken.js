const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("NFTModule", (m) => {
    const deployer = m.getAccount(0);
    const counter = m.contract("MyToken", [], { from: deployer });
    return { counter };
});