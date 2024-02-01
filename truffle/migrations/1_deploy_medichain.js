const MediChain = artifacts.require("MediChain");
const Migrations = artifacts.require("Migrations");

module.exports = function (deployer) {
  deployer.deploy(Migrations).then((instance) => {
    console.log(`Migrations deployed at address: ${instance.address}`);
  });
  deployer.deploy(MediChain).then((instance) => {
    console.log(`Medichain deployed at address: ${instance.address}`);
  });
};
