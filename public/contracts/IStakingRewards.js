const IStakingRewards = {
  "contractName": "IStakingRewards",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newMinimumStakeTime",
          "type": "uint256"
        }
      ],
      "name": "MinimumStakeTimeUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "reward",
          "type": "uint256"
        }
      ],
      "name": "RewardAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "reward",
          "type": "uint256"
        }
      ],
      "name": "RewardPaid",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newDuration",
          "type": "uint256"
        }
      ],
      "name": "RewardsDurationUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Staked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Withdrawn",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "lastTimeRewardApplicable",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "rewardPerToken",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "earned",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getRewardForDuration",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "minimumStakeAmount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "minimumStakeTime",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getStakeRewardDistributionTimeLeft",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getStakeUnlockTimeLeft",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "rewardRate",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "rewardsDuration",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "stake",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getReward",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "exit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.6.5+commit.f956cc89\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMinimumStakeTime\",\"type\":\"uint256\"}],\"name\":\"MinimumStakeTimeUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"reward\",\"type\":\"uint256\"}],\"name\":\"RewardAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"reward\",\"type\":\"uint256\"}],\"name\":\"RewardPaid\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newDuration\",\"type\":\"uint256\"}],\"name\":\"RewardsDurationUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Staked\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Withdrawn\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"earned\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"exit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getReward\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getRewardForDuration\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getStakeRewardDistributionTimeLeft\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getStakeUnlockTimeLeft\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"lastTimeRewardApplicable\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"minimumStakeAmount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"minimumStakeTime\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"rewardPerToken\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"rewardRate\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"rewardsDuration\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"stake\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"withdraw\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/F/vscode/cblades/contracts/staking/interfaces/IStakingRewards.sol\":\"IStakingRewards\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/F/vscode/cblades/contracts/staking/interfaces/IStakingRewards.sol\":{\"keccak256\":\"0xc54fbe531c29f99d69e635bdf013e44243a18e8b657a8ddfa1a533a84471b106\",\"urls\":[\"bzz-raw://e18ee139136dce56205ce765e226ece0a7befff953179e4c5f7bf78729b45f18\",\"dweb:/ipfs/QmSV6chAkXUcrHeuBtocCDfMczqgN62Eafs2nW79Red5rU\"]}},\"version\":1}",
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "immutableReferences": {},
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity >=0.4.24;\r\n\r\n// https://docs.synthetix.io/contracts/source/interfaces/istakingrewards\r\ninterface IStakingRewards {\r\n    // Views\r\n    function lastTimeRewardApplicable() external view returns (uint256);\r\n\r\n    function rewardPerToken() external view returns (uint256);\r\n\r\n    function earned(address account) external view returns (uint256);\r\n\r\n    function getRewardForDuration() external view returns (uint256);\r\n\r\n    function totalSupply() external view returns (uint256);\r\n\r\n    function balanceOf(address account) external view returns (uint256);\r\n\r\n    function minimumStakeAmount() external view returns (uint256);\r\n\r\n    function minimumStakeTime() external view returns (uint256);\r\n\r\n    function getStakeRewardDistributionTimeLeft() external view returns (uint256);\r\n\r\n    function getStakeUnlockTimeLeft() external view returns (uint256);\r\n\r\n    function rewardRate() external view returns (uint256);\r\n\r\n    function rewardsDuration() external view returns (uint256);\r\n\r\n    // Mutative\r\n    function stake(uint256 amount) external;\r\n\r\n    function withdraw(uint256 amount) external;\r\n\r\n    function getReward() external;\r\n\r\n    function exit() external;\r\n\r\n    // Events\r\n    event RewardAdded(uint256 reward);\r\n\r\n    event Staked(address indexed user, uint256 amount);\r\n\r\n    event Withdrawn(address indexed user, uint256 amount);\r\n\r\n    event RewardPaid(address indexed user, uint256 reward);\r\n\r\n    event RewardsDurationUpdated(uint256 newDuration);\r\n\r\n    event MinimumStakeTimeUpdated(uint256 newMinimumStakeTime);\r\n}\r\n",
  "sourcePath": "F:\\vscode\\cblades\\contracts\\staking\\interfaces\\IStakingRewards.sol",
  "ast": {
    "absolutePath": "/F/vscode/cblades/contracts/staking/interfaces/IStakingRewards.sol",
    "exportedSymbols": {
      "IStakingRewards": [
        10725
      ]
    },
    "id": 10726,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 10614,
        "literals": [
          "solidity",
          ">=",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:25:34"
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 10725,
        "linearizedBaseContracts": [
          10725
        ],
        "name": "IStakingRewards",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "functionSelector": "80faa57d",
            "id": 10619,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "lastTimeRewardApplicable",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 10615,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "183:2:34"
            },
            "returnParameters": {
              "id": 10618,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10617,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 10619,
                  "src": "209:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10616,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "209:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "208:9:34"
            },
            "scope": 10725,
            "src": "150:68:34",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "functionSelector": "cd3daf9d",
            "id": 10624,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "rewardPerToken",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 10620,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "249:2:34"
            },
            "returnParameters": {
              "id": 10623,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10622,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 10624,
                  "src": "275:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10621,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "275:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "274:9:34"
            },
            "scope": 10725,
            "src": "226:58:34",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "functionSelector": "008cc262",
            "id": 10631,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "earned",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 10627,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10626,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 10631,
                  "src": "308:15:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10625,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "308:7:34",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "307:17:34"
            },
            "returnParameters": {
              "id": 10630,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10629,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 10631,
                  "src": "348:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10628,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "348:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "347:9:34"
            },
            "scope": 10725,
            "src": "292:65:34",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "functionSelector": "1c1f78eb",
            "id": 10636,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getRewardForDuration",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 10632,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "394:2:34"
            },
            "returnParameters": {
              "id": 10635,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10634,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 10636,
                  "src": "420:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10633,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "420:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "419:9:34"
            },
            "scope": 10725,
            "src": "365:64:34",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "functionSelector": "18160ddd",
            "id": 10641,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 10637,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "457:2:34"
            },
            "returnParameters": {
              "id": 10640,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10639,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 10641,
                  "src": "483:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10638,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "483:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "482:9:34"
            },
            "scope": 10725,
            "src": "437:55:34",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "functionSelector": "70a08231",
            "id": 10648,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 10644,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10643,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 10648,
                  "src": "519:15:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10642,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "519:7:34",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "518:17:34"
            },
            "returnParameters": {
              "id": 10647,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10646,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 10648,
                  "src": "559:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10645,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "559:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "558:9:34"
            },
            "scope": 10725,
            "src": "500:68:34",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "functionSelector": "6b036f45",
            "id": 10653,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "minimumStakeAmount",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 10649,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "603:2:34"
            },
            "returnParameters": {
              "id": 10652,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10651,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 10653,
                  "src": "629:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10650,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "629:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "628:9:34"
            },
            "scope": 10725,
            "src": "576:62:34",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "functionSelector": "242df9e1",
            "id": 10658,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "minimumStakeTime",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 10654,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "671:2:34"
            },
            "returnParameters": {
              "id": 10657,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10656,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 10658,
                  "src": "697:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10655,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "697:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "696:9:34"
            },
            "scope": 10725,
            "src": "646:60:34",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "functionSelector": "27ab1969",
            "id": 10663,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getStakeRewardDistributionTimeLeft",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 10659,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "757:2:34"
            },
            "returnParameters": {
              "id": 10662,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10661,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 10663,
                  "src": "783:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10660,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "783:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "782:9:34"
            },
            "scope": 10725,
            "src": "714:78:34",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "functionSelector": "f603944c",
            "id": 10668,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getStakeUnlockTimeLeft",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 10664,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "831:2:34"
            },
            "returnParameters": {
              "id": 10667,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10666,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 10668,
                  "src": "857:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10665,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "857:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "856:9:34"
            },
            "scope": 10725,
            "src": "800:66:34",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "functionSelector": "7b0a47ee",
            "id": 10673,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "rewardRate",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 10669,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "893:2:34"
            },
            "returnParameters": {
              "id": 10672,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10671,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 10673,
                  "src": "919:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10670,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "919:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "918:9:34"
            },
            "scope": 10725,
            "src": "874:54:34",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "functionSelector": "386a9525",
            "id": 10678,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "rewardsDuration",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 10674,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "960:2:34"
            },
            "returnParameters": {
              "id": 10677,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10676,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 10678,
                  "src": "986:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10675,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "986:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "985:9:34"
            },
            "scope": 10725,
            "src": "936:59:34",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "functionSelector": "a694fc3a",
            "id": 10683,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "stake",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 10681,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10680,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 10683,
                  "src": "1035:14:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10679,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1035:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1034:16:34"
            },
            "returnParameters": {
              "id": 10682,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1059:0:34"
            },
            "scope": 10725,
            "src": "1020:40:34",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "functionSelector": "2e1a7d4d",
            "id": 10688,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 10686,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10685,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 10688,
                  "src": "1086:14:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10684,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1086:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1085:16:34"
            },
            "returnParameters": {
              "id": 10687,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1110:0:34"
            },
            "scope": 10725,
            "src": "1068:43:34",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "functionSelector": "3d18b912",
            "id": 10691,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getReward",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 10689,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1137:2:34"
            },
            "returnParameters": {
              "id": 10690,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1148:0:34"
            },
            "scope": 10725,
            "src": "1119:30:34",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "functionSelector": "e9fad8ee",
            "id": 10694,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "exit",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 10692,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1170:2:34"
            },
            "returnParameters": {
              "id": 10693,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1181:0:34"
            },
            "scope": 10725,
            "src": "1157:25:34",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10698,
            "name": "RewardAdded",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10697,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10696,
                  "indexed": false,
                  "name": "reward",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 10698,
                  "src": "1223:14:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10695,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1223:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1222:16:34"
            },
            "src": "1205:34:34"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10704,
            "name": "Staked",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10703,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10700,
                  "indexed": true,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 10704,
                  "src": "1260:20:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10699,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1260:7:34",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10702,
                  "indexed": false,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 10704,
                  "src": "1282:14:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10701,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1282:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1259:38:34"
            },
            "src": "1247:51:34"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10710,
            "name": "Withdrawn",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10709,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10706,
                  "indexed": true,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 10710,
                  "src": "1322:20:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10705,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1322:7:34",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10708,
                  "indexed": false,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 10710,
                  "src": "1344:14:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10707,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1344:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1321:38:34"
            },
            "src": "1306:54:34"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10716,
            "name": "RewardPaid",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10715,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10712,
                  "indexed": true,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 10716,
                  "src": "1385:20:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10711,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1385:7:34",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10714,
                  "indexed": false,
                  "name": "reward",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 10716,
                  "src": "1407:14:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10713,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1407:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1384:38:34"
            },
            "src": "1368:55:34"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10720,
            "name": "RewardsDurationUpdated",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10719,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10718,
                  "indexed": false,
                  "name": "newDuration",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 10720,
                  "src": "1460:19:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10717,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1460:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1459:21:34"
            },
            "src": "1431:50:34"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10724,
            "name": "MinimumStakeTimeUpdated",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10723,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10722,
                  "indexed": false,
                  "name": "newMinimumStakeTime",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 10724,
                  "src": "1519:27:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10721,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1519:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1518:29:34"
            },
            "src": "1489:59:34"
          }
        ],
        "scope": 10726,
        "src": "103:1448:34"
      }
    ],
    "src": "0:1553:34"
  },
  "legacyAST": {
    "attributes": {
      "absolutePath": "/F/vscode/cblades/contracts/staking/interfaces/IStakingRewards.sol",
      "exportedSymbols": {
        "IStakingRewards": [
          10725
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            ">=",
            "0.4",
            ".24"
          ]
        },
        "id": 10614,
        "name": "PragmaDirective",
        "src": "0:25:34"
      },
      {
        "attributes": {
          "abstract": false,
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "interface",
          "documentation": null,
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            10725
          ],
          "name": "IStakingRewards",
          "scope": 10726
        },
        "children": [
          {
            "attributes": {
              "body": null,
              "documentation": null,
              "functionSelector": "80faa57d",
              "implemented": false,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "lastTimeRewardApplicable",
              "overrides": null,
              "scope": 10725,
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 10615,
                "name": "ParameterList",
                "src": "183:2:34"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "overrides": null,
                      "scope": 10619,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 10616,
                        "name": "ElementaryTypeName",
                        "src": "209:7:34"
                      }
                    ],
                    "id": 10617,
                    "name": "VariableDeclaration",
                    "src": "209:7:34"
                  }
                ],
                "id": 10618,
                "name": "ParameterList",
                "src": "208:9:34"
              }
            ],
            "id": 10619,
            "name": "FunctionDefinition",
            "src": "150:68:34"
          },
          {
            "attributes": {
              "body": null,
              "documentation": null,
              "functionSelector": "cd3daf9d",
              "implemented": false,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "rewardPerToken",
              "overrides": null,
              "scope": 10725,
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 10620,
                "name": "ParameterList",
                "src": "249:2:34"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "overrides": null,
                      "scope": 10624,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 10621,
                        "name": "ElementaryTypeName",
                        "src": "275:7:34"
                      }
                    ],
                    "id": 10622,
                    "name": "VariableDeclaration",
                    "src": "275:7:34"
                  }
                ],
                "id": 10623,
                "name": "ParameterList",
                "src": "274:9:34"
              }
            ],
            "id": 10624,
            "name": "FunctionDefinition",
            "src": "226:58:34"
          },
          {
            "attributes": {
              "body": null,
              "documentation": null,
              "functionSelector": "008cc262",
              "implemented": false,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "earned",
              "overrides": null,
              "scope": 10725,
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "account",
                      "overrides": null,
                      "scope": 10631,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 10625,
                        "name": "ElementaryTypeName",
                        "src": "308:7:34"
                      }
                    ],
                    "id": 10626,
                    "name": "VariableDeclaration",
                    "src": "308:15:34"
                  }
                ],
                "id": 10627,
                "name": "ParameterList",
                "src": "307:17:34"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "overrides": null,
                      "scope": 10631,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 10628,
                        "name": "ElementaryTypeName",
                        "src": "348:7:34"
                      }
                    ],
                    "id": 10629,
                    "name": "VariableDeclaration",
                    "src": "348:7:34"
                  }
                ],
                "id": 10630,
                "name": "ParameterList",
                "src": "347:9:34"
              }
            ],
            "id": 10631,
            "name": "FunctionDefinition",
            "src": "292:65:34"
          },
          {
            "attributes": {
              "body": null,
              "documentation": null,
              "functionSelector": "1c1f78eb",
              "implemented": false,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "getRewardForDuration",
              "overrides": null,
              "scope": 10725,
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 10632,
                "name": "ParameterList",
                "src": "394:2:34"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "overrides": null,
                      "scope": 10636,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 10633,
                        "name": "ElementaryTypeName",
                        "src": "420:7:34"
                      }
                    ],
                    "id": 10634,
                    "name": "VariableDeclaration",
                    "src": "420:7:34"
                  }
                ],
                "id": 10635,
                "name": "ParameterList",
                "src": "419:9:34"
              }
            ],
            "id": 10636,
            "name": "FunctionDefinition",
            "src": "365:64:34"
          },
          {
            "attributes": {
              "body": null,
              "documentation": null,
              "functionSelector": "18160ddd",
              "implemented": false,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "totalSupply",
              "overrides": null,
              "scope": 10725,
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 10637,
                "name": "ParameterList",
                "src": "457:2:34"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "overrides": null,
                      "scope": 10641,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 10638,
                        "name": "ElementaryTypeName",
                        "src": "483:7:34"
                      }
                    ],
                    "id": 10639,
                    "name": "VariableDeclaration",
                    "src": "483:7:34"
                  }
                ],
                "id": 10640,
                "name": "ParameterList",
                "src": "482:9:34"
              }
            ],
            "id": 10641,
            "name": "FunctionDefinition",
            "src": "437:55:34"
          },
          {
            "attributes": {
              "body": null,
              "documentation": null,
              "functionSelector": "70a08231",
              "implemented": false,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "balanceOf",
              "overrides": null,
              "scope": 10725,
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "account",
                      "overrides": null,
                      "scope": 10648,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 10642,
                        "name": "ElementaryTypeName",
                        "src": "519:7:34"
                      }
                    ],
                    "id": 10643,
                    "name": "VariableDeclaration",
                    "src": "519:15:34"
                  }
                ],
                "id": 10644,
                "name": "ParameterList",
                "src": "518:17:34"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "overrides": null,
                      "scope": 10648,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 10645,
                        "name": "ElementaryTypeName",
                        "src": "559:7:34"
                      }
                    ],
                    "id": 10646,
                    "name": "VariableDeclaration",
                    "src": "559:7:34"
                  }
                ],
                "id": 10647,
                "name": "ParameterList",
                "src": "558:9:34"
              }
            ],
            "id": 10648,
            "name": "FunctionDefinition",
            "src": "500:68:34"
          },
          {
            "attributes": {
              "body": null,
              "documentation": null,
              "functionSelector": "6b036f45",
              "implemented": false,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "minimumStakeAmount",
              "overrides": null,
              "scope": 10725,
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 10649,
                "name": "ParameterList",
                "src": "603:2:34"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "overrides": null,
                      "scope": 10653,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 10650,
                        "name": "ElementaryTypeName",
                        "src": "629:7:34"
                      }
                    ],
                    "id": 10651,
                    "name": "VariableDeclaration",
                    "src": "629:7:34"
                  }
                ],
                "id": 10652,
                "name": "ParameterList",
                "src": "628:9:34"
              }
            ],
            "id": 10653,
            "name": "FunctionDefinition",
            "src": "576:62:34"
          },
          {
            "attributes": {
              "body": null,
              "documentation": null,
              "functionSelector": "242df9e1",
              "implemented": false,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "minimumStakeTime",
              "overrides": null,
              "scope": 10725,
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 10654,
                "name": "ParameterList",
                "src": "671:2:34"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "overrides": null,
                      "scope": 10658,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 10655,
                        "name": "ElementaryTypeName",
                        "src": "697:7:34"
                      }
                    ],
                    "id": 10656,
                    "name": "VariableDeclaration",
                    "src": "697:7:34"
                  }
                ],
                "id": 10657,
                "name": "ParameterList",
                "src": "696:9:34"
              }
            ],
            "id": 10658,
            "name": "FunctionDefinition",
            "src": "646:60:34"
          },
          {
            "attributes": {
              "body": null,
              "documentation": null,
              "functionSelector": "27ab1969",
              "implemented": false,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "getStakeRewardDistributionTimeLeft",
              "overrides": null,
              "scope": 10725,
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 10659,
                "name": "ParameterList",
                "src": "757:2:34"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "overrides": null,
                      "scope": 10663,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 10660,
                        "name": "ElementaryTypeName",
                        "src": "783:7:34"
                      }
                    ],
                    "id": 10661,
                    "name": "VariableDeclaration",
                    "src": "783:7:34"
                  }
                ],
                "id": 10662,
                "name": "ParameterList",
                "src": "782:9:34"
              }
            ],
            "id": 10663,
            "name": "FunctionDefinition",
            "src": "714:78:34"
          },
          {
            "attributes": {
              "body": null,
              "documentation": null,
              "functionSelector": "f603944c",
              "implemented": false,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "getStakeUnlockTimeLeft",
              "overrides": null,
              "scope": 10725,
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 10664,
                "name": "ParameterList",
                "src": "831:2:34"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "overrides": null,
                      "scope": 10668,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 10665,
                        "name": "ElementaryTypeName",
                        "src": "857:7:34"
                      }
                    ],
                    "id": 10666,
                    "name": "VariableDeclaration",
                    "src": "857:7:34"
                  }
                ],
                "id": 10667,
                "name": "ParameterList",
                "src": "856:9:34"
              }
            ],
            "id": 10668,
            "name": "FunctionDefinition",
            "src": "800:66:34"
          },
          {
            "attributes": {
              "body": null,
              "documentation": null,
              "functionSelector": "7b0a47ee",
              "implemented": false,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "rewardRate",
              "overrides": null,
              "scope": 10725,
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 10669,
                "name": "ParameterList",
                "src": "893:2:34"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "overrides": null,
                      "scope": 10673,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 10670,
                        "name": "ElementaryTypeName",
                        "src": "919:7:34"
                      }
                    ],
                    "id": 10671,
                    "name": "VariableDeclaration",
                    "src": "919:7:34"
                  }
                ],
                "id": 10672,
                "name": "ParameterList",
                "src": "918:9:34"
              }
            ],
            "id": 10673,
            "name": "FunctionDefinition",
            "src": "874:54:34"
          },
          {
            "attributes": {
              "body": null,
              "documentation": null,
              "functionSelector": "386a9525",
              "implemented": false,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "rewardsDuration",
              "overrides": null,
              "scope": 10725,
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 10674,
                "name": "ParameterList",
                "src": "960:2:34"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "overrides": null,
                      "scope": 10678,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 10675,
                        "name": "ElementaryTypeName",
                        "src": "986:7:34"
                      }
                    ],
                    "id": 10676,
                    "name": "VariableDeclaration",
                    "src": "986:7:34"
                  }
                ],
                "id": 10677,
                "name": "ParameterList",
                "src": "985:9:34"
              }
            ],
            "id": 10678,
            "name": "FunctionDefinition",
            "src": "936:59:34"
          },
          {
            "attributes": {
              "body": null,
              "documentation": null,
              "functionSelector": "a694fc3a",
              "implemented": false,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "stake",
              "overrides": null,
              "scope": 10725,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "amount",
                      "overrides": null,
                      "scope": 10683,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 10679,
                        "name": "ElementaryTypeName",
                        "src": "1035:7:34"
                      }
                    ],
                    "id": 10680,
                    "name": "VariableDeclaration",
                    "src": "1035:14:34"
                  }
                ],
                "id": 10681,
                "name": "ParameterList",
                "src": "1034:16:34"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 10682,
                "name": "ParameterList",
                "src": "1059:0:34"
              }
            ],
            "id": 10683,
            "name": "FunctionDefinition",
            "src": "1020:40:34"
          },
          {
            "attributes": {
              "body": null,
              "documentation": null,
              "functionSelector": "2e1a7d4d",
              "implemented": false,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "withdraw",
              "overrides": null,
              "scope": 10725,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "amount",
                      "overrides": null,
                      "scope": 10688,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 10684,
                        "name": "ElementaryTypeName",
                        "src": "1086:7:34"
                      }
                    ],
                    "id": 10685,
                    "name": "VariableDeclaration",
                    "src": "1086:14:34"
                  }
                ],
                "id": 10686,
                "name": "ParameterList",
                "src": "1085:16:34"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 10687,
                "name": "ParameterList",
                "src": "1110:0:34"
              }
            ],
            "id": 10688,
            "name": "FunctionDefinition",
            "src": "1068:43:34"
          },
          {
            "attributes": {
              "body": null,
              "documentation": null,
              "functionSelector": "3d18b912",
              "implemented": false,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "getReward",
              "overrides": null,
              "scope": 10725,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 10689,
                "name": "ParameterList",
                "src": "1137:2:34"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 10690,
                "name": "ParameterList",
                "src": "1148:0:34"
              }
            ],
            "id": 10691,
            "name": "FunctionDefinition",
            "src": "1119:30:34"
          },
          {
            "attributes": {
              "body": null,
              "documentation": null,
              "functionSelector": "e9fad8ee",
              "implemented": false,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "exit",
              "overrides": null,
              "scope": 10725,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 10692,
                "name": "ParameterList",
                "src": "1170:2:34"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 10693,
                "name": "ParameterList",
                "src": "1181:0:34"
              }
            ],
            "id": 10694,
            "name": "FunctionDefinition",
            "src": "1157:25:34"
          },
          {
            "attributes": {
              "anonymous": false,
              "documentation": null,
              "name": "RewardAdded"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "reward",
                      "overrides": null,
                      "scope": 10698,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 10695,
                        "name": "ElementaryTypeName",
                        "src": "1223:7:34"
                      }
                    ],
                    "id": 10696,
                    "name": "VariableDeclaration",
                    "src": "1223:14:34"
                  }
                ],
                "id": 10697,
                "name": "ParameterList",
                "src": "1222:16:34"
              }
            ],
            "id": 10698,
            "name": "EventDefinition",
            "src": "1205:34:34"
          },
          {
            "attributes": {
              "anonymous": false,
              "documentation": null,
              "name": "Staked"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "user",
                      "overrides": null,
                      "scope": 10704,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 10699,
                        "name": "ElementaryTypeName",
                        "src": "1260:7:34"
                      }
                    ],
                    "id": 10700,
                    "name": "VariableDeclaration",
                    "src": "1260:20:34"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "amount",
                      "overrides": null,
                      "scope": 10704,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 10701,
                        "name": "ElementaryTypeName",
                        "src": "1282:7:34"
                      }
                    ],
                    "id": 10702,
                    "name": "VariableDeclaration",
                    "src": "1282:14:34"
                  }
                ],
                "id": 10703,
                "name": "ParameterList",
                "src": "1259:38:34"
              }
            ],
            "id": 10704,
            "name": "EventDefinition",
            "src": "1247:51:34"
          },
          {
            "attributes": {
              "anonymous": false,
              "documentation": null,
              "name": "Withdrawn"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "user",
                      "overrides": null,
                      "scope": 10710,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 10705,
                        "name": "ElementaryTypeName",
                        "src": "1322:7:34"
                      }
                    ],
                    "id": 10706,
                    "name": "VariableDeclaration",
                    "src": "1322:20:34"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "amount",
                      "overrides": null,
                      "scope": 10710,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 10707,
                        "name": "ElementaryTypeName",
                        "src": "1344:7:34"
                      }
                    ],
                    "id": 10708,
                    "name": "VariableDeclaration",
                    "src": "1344:14:34"
                  }
                ],
                "id": 10709,
                "name": "ParameterList",
                "src": "1321:38:34"
              }
            ],
            "id": 10710,
            "name": "EventDefinition",
            "src": "1306:54:34"
          },
          {
            "attributes": {
              "anonymous": false,
              "documentation": null,
              "name": "RewardPaid"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "user",
                      "overrides": null,
                      "scope": 10716,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 10711,
                        "name": "ElementaryTypeName",
                        "src": "1385:7:34"
                      }
                    ],
                    "id": 10712,
                    "name": "VariableDeclaration",
                    "src": "1385:20:34"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "reward",
                      "overrides": null,
                      "scope": 10716,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 10713,
                        "name": "ElementaryTypeName",
                        "src": "1407:7:34"
                      }
                    ],
                    "id": 10714,
                    "name": "VariableDeclaration",
                    "src": "1407:14:34"
                  }
                ],
                "id": 10715,
                "name": "ParameterList",
                "src": "1384:38:34"
              }
            ],
            "id": 10716,
            "name": "EventDefinition",
            "src": "1368:55:34"
          },
          {
            "attributes": {
              "anonymous": false,
              "documentation": null,
              "name": "RewardsDurationUpdated"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "newDuration",
                      "overrides": null,
                      "scope": 10720,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 10717,
                        "name": "ElementaryTypeName",
                        "src": "1460:7:34"
                      }
                    ],
                    "id": 10718,
                    "name": "VariableDeclaration",
                    "src": "1460:19:34"
                  }
                ],
                "id": 10719,
                "name": "ParameterList",
                "src": "1459:21:34"
              }
            ],
            "id": 10720,
            "name": "EventDefinition",
            "src": "1431:50:34"
          },
          {
            "attributes": {
              "anonymous": false,
              "documentation": null,
              "name": "MinimumStakeTimeUpdated"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "newMinimumStakeTime",
                      "overrides": null,
                      "scope": 10724,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 10721,
                        "name": "ElementaryTypeName",
                        "src": "1519:7:34"
                      }
                    ],
                    "id": 10722,
                    "name": "VariableDeclaration",
                    "src": "1519:27:34"
                  }
                ],
                "id": 10723,
                "name": "ParameterList",
                "src": "1518:29:34"
              }
            ],
            "id": 10724,
            "name": "EventDefinition",
            "src": "1489:59:34"
          }
        ],
        "id": 10725,
        "name": "ContractDefinition",
        "src": "103:1448:34"
      }
    ],
    "id": 10726,
    "name": "SourceUnit",
    "src": "0:1553:34"
  },
  "compiler": {
    "name": "solc",
    "version": "0.6.5+commit.f956cc89.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.3.4",
  "updatedAt": "2021-07-30T01:26:39.458Z",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}