import Express from "express"; // Importing Express framework
import Moralis from 'moralis'; // Importing Moralis SDK for interacting with the Ethereum blockchain

// Creating a router instance for Ethereum-related routes
export const ethRouter = Express.Router();

// Route to fetch live price of a token
ethRouter.get("/liveprice", async (req, res) => {
    try {
      // Fetching live price of a token using Moralis SDK
      const response = await Moralis.EvmApi.token.getTokenPrice({
        address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", // Example address of a token (Ether)
        chain: "0x1", // Ethereum mainnet chain ID
      });
  
      // Sending the response with live token price
      return res.status(200).json(response);
    } catch (error) {
      // Handling error if any
      console.log(`Error occurred while fetching live price ${error}`);
      return res.status(400).json();
    }
  });

// Route to fetch details of latest blocks
ethRouter.get("/getallblocks", async (req, res) => {
    try {
      // Fetching details of latest blocks using Moralis SDK
      const latestBlock = await Moralis.EvmApi.block.getDateToBlock({
        date: Date.now(), // Current date
        chain: "0x1", // Ethereum mainnet chain ID
      });
  
      let blockNrOrParentHash = latestBlock.toJSON().block;
      let previousBlockInfo = [];
  
      // Fetching details of previous blocks iteratively
      for (let i = 0; i < 5; i++) {
        const previousBlockNrs = await Moralis.EvmApi.block.getBlock({
          chain: "0x1", // Ethereum mainnet chain ID
          blockNumberOrHash: blockNrOrParentHash,
        });
  
        blockNrOrParentHash = previousBlockNrs.toJSON().parent_hash;
        if (i == 0) {
          // Extracting transaction details for the first block
          previousBlockInfo.push({
            transactions: previousBlockNrs.toJSON().transactions.map((tx) => {
              return {
                transactionHash: tx.hash,
                time: tx.block_timestamp,
                fromAddress: tx.from_address,
                toAddress: tx.to_address,
                value: tx.value,
              };
            }),
          });
        }
        // Extracting general block details for each block
        previousBlockInfo.push({
          blockNumber: previousBlockNrs.toJSON().number,
          totalTransactions: previousBlockNrs.toJSON().transaction_count,
          gasUsed: previousBlockNrs.toJSON().gas_used,
          miner: previousBlockNrs.toJSON().miner,
          time: previousBlockNrs.toJSON().timestamp,
        });
      }
  
      // Constructing response object with latest block and previous block details
      const response = {
        latestBlock: latestBlock.toJSON().block,
        previousBlockInfo,
      };
  
      // Sending the response with block details
      return res.status(200).json(response);
    } catch (error) {
      // Handling error if any
      console.log(`Error occurred while getting block details ${error}`);
      return res.status(400).json();
    }
  });

// Route to fetch address details
ethRouter.get("/address", async (req, res) => {
    try {
      const { query } = req;
      const chain = "0x1"; // Ethereum mainnet chain ID
  
      // Fetching address details using Moralis SDK
      const response = await Moralis.EvmApi.transaction.getWalletTransactionsVerbose({
        address: query.address, // Address passed in the request query
        chain,
      });
  
      // Sending the response with address details
      return res.status(200).json(response);
    } catch (error) {
      // Handling error if any
      console.log(`Error occurred while fetching address details ${error}`);
      return res.status(400).json();
    }
  });
