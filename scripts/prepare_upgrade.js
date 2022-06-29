// scripts/prepare_upgrade.js
async function main() {
    const proxyAddress = '0x01AD33Df902f6a246c37403f6eeBF7c851bd3a7A';

    const BoxV2 = await ethers.getContractFactory("BoxV2");
    console.log("Preparing upgrade...");
    const boxV2Address = await upgrades.prepareUpgrade(proxyAddress, BoxV2);
    console.log("BoxV2 at:", boxV2Address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
