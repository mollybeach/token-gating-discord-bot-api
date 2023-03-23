import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
import { Contract, Signature, Signer } from "ethers";
import { BigNumber } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { MinEthersFactory } from "../typechain-types/common";
import { Hogwarts__factory } from "../typechain-types";




describe("Hogwarts", function() {
  let hogWartsContract: Contract;
  const genesisAddress = "0x0000000000000000000000000000000000000000";
  
  
  beforeEach(async function() {
    const hogwartsContractFactory  = await ethers.getContractFactory("Hogwarts");
    hogWartsContract = await hogwartsContractFactory.deploy();
    await hogWartsContract.deployed();
    
   
 });
 
   describe("Testing Functions", async function() {
      it ("Should mint a token and fire a minting event", async function() {
        const accounts = await ethers.getSigners();
       await expect(hogWartsContract.mint(accounts[1].address,0,100))
      .to.emit(hogWartsContract, "TransferSingle")
       .withArgs(accounts[0].address,genesisAddress,accounts[1].address,0,100);
     });

   it ("Should mint a batch of tokens", async function() {
    const accounts = await ethers.getSigners();
   await expect(hogWartsContract.mintBatch(accounts[1].address,[0],[10]))
  .to.emit(hogWartsContract, "TransferBatch")
   .withArgs(accounts[0].address,genesisAddress,accounts[1].address,[0],[10]);
   });

   it ("Should set URI", async function() {
    const accounts = await ethers.getSigners();
   await expect(hogWartsContract.setURI(0,"/ipfs/QmQhRLyDdhS5Uxfo7eRNJz642BAXwN3KHaEgxjLfi3WFAf/metadata.json"))
  .to.emit(hogWartsContract, "URI")
   .withArgs("/ipfs/QmQhRLyDdhS5Uxfo7eRNJz642BAXwN3KHaEgxjLfi3WFAf/metadata.json",0);
   });
 
   });
});