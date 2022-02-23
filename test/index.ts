import { expect } from "chai"
import { ethers } from "hardhat"
import { Greeter__factory } from "../typechain-types"

describe("Greeter", function () {
    it("Should return the new greeting once it's changed", async function () {
        const deployer = (await ethers.getSigners())[0]
        const greeter = await new Greeter__factory(deployer).deploy("Hello, world!")
        await greeter.deployed()

        expect(await greeter.greet()).to.equal("Hello, world!")

        const setGreetingTx = await greeter.setGreeting("Hola, mundo!")

        // wait until the transaction is mined
        await setGreetingTx.wait()

        expect(await greeter.greet()).to.equal("Hola, mundo!")
    })
})
