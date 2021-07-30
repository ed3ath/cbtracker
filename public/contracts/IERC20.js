const IERC20 = {
  "contractName": "IERC20",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
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
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
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
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.6.5+commit.f956cc89\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Interface of the ERC20 standard as defined in the EIP.\",\"methods\":{\"allowance(address,address)\":{\"details\":\"Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default.     * This value changes when {approve} or {transferFrom} are called.\"},\"approve(address,uint256)\":{\"details\":\"Sets `amount` as the allowance of `spender` over the caller's tokens.     * Returns a boolean value indicating whether the operation succeeded.     * IMPORTANT: Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729     * Emits an {Approval} event.\"},\"balanceOf(address)\":{\"details\":\"Returns the amount of tokens owned by `account`.\"},\"totalSupply()\":{\"details\":\"Returns the amount of tokens in existence.\"},\"transfer(address,uint256)\":{\"details\":\"Moves `amount` tokens from the caller's account to `recipient`.     * Returns a boolean value indicating whether the operation succeeded.     * Emits a {Transfer} event.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"Moves `amount` tokens from `sender` to `recipient` using the allowance mechanism. `amount` is then deducted from the caller's allowance.     * Returns a boolean value indicating whether the operation succeeded.     * Emits a {Transfer} event.\"}}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":\"IERC20\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x5f02220344881ce43204ae4a6281145a67bc52c2bb1290a791857df3d19d78f5\",\"urls\":[\"bzz-raw://24427744bd3e6cb73c17010119af12a318289c0253a4d9acb8576c9fb3797b08\",\"dweb:/ipfs/QmTLDqpKRBuxGxRAmjgXt9AkXyACW3MtKzi7PYjm5iMfGC\"]}},\"version\":1}",
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "immutableReferences": {},
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "// SPDX-License-Identifier: MIT\n\npragma solidity >=0.6.0 <0.8.0;\n\n/**\n * @dev Interface of the ERC20 standard as defined in the EIP.\n */\ninterface IERC20 {\n    /**\n     * @dev Returns the amount of tokens in existence.\n     */\n    function totalSupply() external view returns (uint256);\n\n    /**\n     * @dev Returns the amount of tokens owned by `account`.\n     */\n    function balanceOf(address account) external view returns (uint256);\n\n    /**\n     * @dev Moves `amount` tokens from the caller's account to `recipient`.\n     *\n     * Returns a boolean value indicating whether the operation succeeded.\n     *\n     * Emits a {Transfer} event.\n     */\n    function transfer(address recipient, uint256 amount) external returns (bool);\n\n    /**\n     * @dev Returns the remaining number of tokens that `spender` will be\n     * allowed to spend on behalf of `owner` through {transferFrom}. This is\n     * zero by default.\n     *\n     * This value changes when {approve} or {transferFrom} are called.\n     */\n    function allowance(address owner, address spender) external view returns (uint256);\n\n    /**\n     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.\n     *\n     * Returns a boolean value indicating whether the operation succeeded.\n     *\n     * IMPORTANT: Beware that changing an allowance with this method brings the risk\n     * that someone may use both the old and the new allowance by unfortunate\n     * transaction ordering. One possible solution to mitigate this race\n     * condition is to first reduce the spender's allowance to 0 and set the\n     * desired value afterwards:\n     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\n     *\n     * Emits an {Approval} event.\n     */\n    function approve(address spender, uint256 amount) external returns (bool);\n\n    /**\n     * @dev Moves `amount` tokens from `sender` to `recipient` using the\n     * allowance mechanism. `amount` is then deducted from the caller's\n     * allowance.\n     *\n     * Returns a boolean value indicating whether the operation succeeded.\n     *\n     * Emits a {Transfer} event.\n     */\n    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);\n\n    /**\n     * @dev Emitted when `value` tokens are moved from one account (`from`) to\n     * another (`to`).\n     *\n     * Note that `value` may be zero.\n     */\n    event Transfer(address indexed from, address indexed to, uint256 value);\n\n    /**\n     * @dev Emitted when the allowance of a `spender` for an `owner` is set by\n     * a call to {approve}. `value` is the new allowance.\n     */\n    event Approval(address indexed owner, address indexed spender, uint256 value);\n}\n",
  "sourcePath": "@openzeppelin\\contracts\\token\\ERC20\\IERC20.sol",
  "ast": {
    "absolutePath": "@openzeppelin/contracts/token/ERC20/IERC20.sol",
    "exportedSymbols": {
      "IERC20": [
        19294
      ]
    },
    "id": 19295,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 19218,
        "literals": [
          "solidity",
          ">=",
          "0.6",
          ".0",
          "<",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "33:31:65"
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": {
          "id": 19219,
          "nodeType": "StructuredDocumentation",
          "src": "66:70:65",
          "text": "@dev Interface of the ERC20 standard as defined in the EIP."
        },
        "fullyImplemented": false,
        "id": 19294,
        "linearizedBaseContracts": [
          19294
        ],
        "name": "IERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": {
              "id": 19220,
              "nodeType": "StructuredDocumentation",
              "src": "160:66:65",
              "text": "@dev Returns the amount of tokens in existence."
            },
            "functionSelector": "18160ddd",
            "id": 19225,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 19221,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "251:2:65"
            },
            "returnParameters": {
              "id": 19224,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19223,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 19225,
                  "src": "277:7:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19222,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "277:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "276:9:65"
            },
            "scope": 19294,
            "src": "231:55:65",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": {
              "id": 19226,
              "nodeType": "StructuredDocumentation",
              "src": "292:72:65",
              "text": "@dev Returns the amount of tokens owned by `account`."
            },
            "functionSelector": "70a08231",
            "id": 19233,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 19229,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19228,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 19233,
                  "src": "388:15:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 19227,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "388:7:65",
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
              "src": "387:17:65"
            },
            "returnParameters": {
              "id": 19232,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19231,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 19233,
                  "src": "428:7:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19230,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "428:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "427:9:65"
            },
            "scope": 19294,
            "src": "369:68:65",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": {
              "id": 19234,
              "nodeType": "StructuredDocumentation",
              "src": "443:209:65",
              "text": "@dev Moves `amount` tokens from the caller's account to `recipient`.\n     * Returns a boolean value indicating whether the operation succeeded.\n     * Emits a {Transfer} event."
            },
            "functionSelector": "a9059cbb",
            "id": 19243,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 19239,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19236,
                  "name": "recipient",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 19243,
                  "src": "675:17:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 19235,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "675:7:65",
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
                  "id": 19238,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 19243,
                  "src": "694:14:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19237,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "694:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "674:35:65"
            },
            "returnParameters": {
              "id": 19242,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19241,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 19243,
                  "src": "728:4:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 19240,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "728:4:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "727:6:65"
            },
            "scope": 19294,
            "src": "657:77:65",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": {
              "id": 19244,
              "nodeType": "StructuredDocumentation",
              "src": "740:264:65",
              "text": "@dev Returns the remaining number of tokens that `spender` will be\nallowed to spend on behalf of `owner` through {transferFrom}. This is\nzero by default.\n     * This value changes when {approve} or {transferFrom} are called."
            },
            "functionSelector": "dd62ed3e",
            "id": 19253,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 19249,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19246,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 19253,
                  "src": "1028:13:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 19245,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1028:7:65",
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
                  "id": 19248,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 19253,
                  "src": "1043:15:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 19247,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1043:7:65",
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
              "src": "1027:32:65"
            },
            "returnParameters": {
              "id": 19252,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19251,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 19253,
                  "src": "1083:7:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19250,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1083:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1082:9:65"
            },
            "scope": 19294,
            "src": "1009:83:65",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": {
              "id": 19254,
              "nodeType": "StructuredDocumentation",
              "src": "1098:642:65",
              "text": "@dev Sets `amount` as the allowance of `spender` over the caller's tokens.\n     * Returns a boolean value indicating whether the operation succeeded.\n     * IMPORTANT: Beware that changing an allowance with this method brings the risk\nthat someone may use both the old and the new allowance by unfortunate\ntransaction ordering. One possible solution to mitigate this race\ncondition is to first reduce the spender's allowance to 0 and set the\ndesired value afterwards:\nhttps://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\n     * Emits an {Approval} event."
            },
            "functionSelector": "095ea7b3",
            "id": 19263,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 19259,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19256,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 19263,
                  "src": "1762:15:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 19255,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1762:7:65",
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
                  "id": 19258,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 19263,
                  "src": "1779:14:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19257,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1779:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1761:33:65"
            },
            "returnParameters": {
              "id": 19262,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19261,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 19263,
                  "src": "1813:4:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 19260,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1813:4:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1812:6:65"
            },
            "scope": 19294,
            "src": "1745:74:65",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": {
              "id": 19264,
              "nodeType": "StructuredDocumentation",
              "src": "1825:296:65",
              "text": "@dev Moves `amount` tokens from `sender` to `recipient` using the\nallowance mechanism. `amount` is then deducted from the caller's\nallowance.\n     * Returns a boolean value indicating whether the operation succeeded.\n     * Emits a {Transfer} event."
            },
            "functionSelector": "23b872dd",
            "id": 19275,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 19271,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19266,
                  "name": "sender",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 19275,
                  "src": "2148:14:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 19265,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2148:7:65",
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
                  "id": 19268,
                  "name": "recipient",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 19275,
                  "src": "2164:17:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 19267,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2164:7:65",
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
                  "id": 19270,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 19275,
                  "src": "2183:14:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19269,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2183:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2147:51:65"
            },
            "returnParameters": {
              "id": 19274,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19273,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 19275,
                  "src": "2217:4:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 19272,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2217:4:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2216:6:65"
            },
            "scope": 19294,
            "src": "2126:97:65",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": {
              "id": 19276,
              "nodeType": "StructuredDocumentation",
              "src": "2229:158:65",
              "text": "@dev Emitted when `value` tokens are moved from one account (`from`) to\nanother (`to`).\n     * Note that `value` may be zero."
            },
            "id": 19284,
            "name": "Transfer",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 19283,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19278,
                  "indexed": true,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 19284,
                  "src": "2407:20:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 19277,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2407:7:65",
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
                  "id": 19280,
                  "indexed": true,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 19284,
                  "src": "2429:18:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 19279,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2429:7:65",
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
                  "id": 19282,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 19284,
                  "src": "2449:13:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19281,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2449:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2406:57:65"
            },
            "src": "2392:72:65"
          },
          {
            "anonymous": false,
            "documentation": {
              "id": 19285,
              "nodeType": "StructuredDocumentation",
              "src": "2470:148:65",
              "text": "@dev Emitted when the allowance of a `spender` for an `owner` is set by\na call to {approve}. `value` is the new allowance."
            },
            "id": 19293,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 19292,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19287,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 19293,
                  "src": "2638:21:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 19286,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2638:7:65",
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
                  "id": 19289,
                  "indexed": true,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 19293,
                  "src": "2661:23:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 19288,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2661:7:65",
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
                  "id": 19291,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 19293,
                  "src": "2686:13:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19290,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2686:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2637:63:65"
            },
            "src": "2623:78:65"
          }
        ],
        "scope": 19295,
        "src": "137:2566:65"
      }
    ],
    "src": "33:2671:65"
  },
  "legacyAST": {
    "attributes": {
      "absolutePath": "@openzeppelin/contracts/token/ERC20/IERC20.sol",
      "exportedSymbols": {
        "IERC20": [
          19294
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            ">=",
            "0.6",
            ".0",
            "<",
            "0.8",
            ".0"
          ]
        },
        "id": 19218,
        "name": "PragmaDirective",
        "src": "33:31:65"
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
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            19294
          ],
          "name": "IERC20",
          "scope": 19295
        },
        "children": [
          {
            "attributes": {
              "text": "@dev Interface of the ERC20 standard as defined in the EIP."
            },
            "id": 19219,
            "name": "StructuredDocumentation",
            "src": "66:70:65"
          },
          {
            "attributes": {
              "body": null,
              "functionSelector": "18160ddd",
              "implemented": false,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "totalSupply",
              "overrides": null,
              "scope": 19294,
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "attributes": {
                  "text": "@dev Returns the amount of tokens in existence."
                },
                "id": 19220,
                "name": "StructuredDocumentation",
                "src": "160:66:65"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 19221,
                "name": "ParameterList",
                "src": "251:2:65"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "overrides": null,
                      "scope": 19225,
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
                        "id": 19222,
                        "name": "ElementaryTypeName",
                        "src": "277:7:65"
                      }
                    ],
                    "id": 19223,
                    "name": "VariableDeclaration",
                    "src": "277:7:65"
                  }
                ],
                "id": 19224,
                "name": "ParameterList",
                "src": "276:9:65"
              }
            ],
            "id": 19225,
            "name": "FunctionDefinition",
            "src": "231:55:65"
          },
          {
            "attributes": {
              "body": null,
              "functionSelector": "70a08231",
              "implemented": false,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "balanceOf",
              "overrides": null,
              "scope": 19294,
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "attributes": {
                  "text": "@dev Returns the amount of tokens owned by `account`."
                },
                "id": 19226,
                "name": "StructuredDocumentation",
                "src": "292:72:65"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "account",
                      "overrides": null,
                      "scope": 19233,
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
                        "id": 19227,
                        "name": "ElementaryTypeName",
                        "src": "388:7:65"
                      }
                    ],
                    "id": 19228,
                    "name": "VariableDeclaration",
                    "src": "388:15:65"
                  }
                ],
                "id": 19229,
                "name": "ParameterList",
                "src": "387:17:65"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "overrides": null,
                      "scope": 19233,
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
                        "id": 19230,
                        "name": "ElementaryTypeName",
                        "src": "428:7:65"
                      }
                    ],
                    "id": 19231,
                    "name": "VariableDeclaration",
                    "src": "428:7:65"
                  }
                ],
                "id": 19232,
                "name": "ParameterList",
                "src": "427:9:65"
              }
            ],
            "id": 19233,
            "name": "FunctionDefinition",
            "src": "369:68:65"
          },
          {
            "attributes": {
              "body": null,
              "functionSelector": "a9059cbb",
              "implemented": false,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "transfer",
              "overrides": null,
              "scope": 19294,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "attributes": {
                  "text": "@dev Moves `amount` tokens from the caller's account to `recipient`.\n     * Returns a boolean value indicating whether the operation succeeded.\n     * Emits a {Transfer} event."
                },
                "id": 19234,
                "name": "StructuredDocumentation",
                "src": "443:209:65"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "recipient",
                      "overrides": null,
                      "scope": 19243,
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
                        "id": 19235,
                        "name": "ElementaryTypeName",
                        "src": "675:7:65"
                      }
                    ],
                    "id": 19236,
                    "name": "VariableDeclaration",
                    "src": "675:17:65"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "amount",
                      "overrides": null,
                      "scope": 19243,
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
                        "id": 19237,
                        "name": "ElementaryTypeName",
                        "src": "694:7:65"
                      }
                    ],
                    "id": 19238,
                    "name": "VariableDeclaration",
                    "src": "694:14:65"
                  }
                ],
                "id": 19239,
                "name": "ParameterList",
                "src": "674:35:65"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "overrides": null,
                      "scope": 19243,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 19240,
                        "name": "ElementaryTypeName",
                        "src": "728:4:65"
                      }
                    ],
                    "id": 19241,
                    "name": "VariableDeclaration",
                    "src": "728:4:65"
                  }
                ],
                "id": 19242,
                "name": "ParameterList",
                "src": "727:6:65"
              }
            ],
            "id": 19243,
            "name": "FunctionDefinition",
            "src": "657:77:65"
          },
          {
            "attributes": {
              "body": null,
              "functionSelector": "dd62ed3e",
              "implemented": false,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "allowance",
              "overrides": null,
              "scope": 19294,
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "attributes": {
                  "text": "@dev Returns the remaining number of tokens that `spender` will be\nallowed to spend on behalf of `owner` through {transferFrom}. This is\nzero by default.\n     * This value changes when {approve} or {transferFrom} are called."
                },
                "id": 19244,
                "name": "StructuredDocumentation",
                "src": "740:264:65"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "owner",
                      "overrides": null,
                      "scope": 19253,
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
                        "id": 19245,
                        "name": "ElementaryTypeName",
                        "src": "1028:7:65"
                      }
                    ],
                    "id": 19246,
                    "name": "VariableDeclaration",
                    "src": "1028:13:65"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "spender",
                      "overrides": null,
                      "scope": 19253,
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
                        "id": 19247,
                        "name": "ElementaryTypeName",
                        "src": "1043:7:65"
                      }
                    ],
                    "id": 19248,
                    "name": "VariableDeclaration",
                    "src": "1043:15:65"
                  }
                ],
                "id": 19249,
                "name": "ParameterList",
                "src": "1027:32:65"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "overrides": null,
                      "scope": 19253,
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
                        "id": 19250,
                        "name": "ElementaryTypeName",
                        "src": "1083:7:65"
                      }
                    ],
                    "id": 19251,
                    "name": "VariableDeclaration",
                    "src": "1083:7:65"
                  }
                ],
                "id": 19252,
                "name": "ParameterList",
                "src": "1082:9:65"
              }
            ],
            "id": 19253,
            "name": "FunctionDefinition",
            "src": "1009:83:65"
          },
          {
            "attributes": {
              "body": null,
              "functionSelector": "095ea7b3",
              "implemented": false,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "approve",
              "overrides": null,
              "scope": 19294,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "attributes": {
                  "text": "@dev Sets `amount` as the allowance of `spender` over the caller's tokens.\n     * Returns a boolean value indicating whether the operation succeeded.\n     * IMPORTANT: Beware that changing an allowance with this method brings the risk\nthat someone may use both the old and the new allowance by unfortunate\ntransaction ordering. One possible solution to mitigate this race\ncondition is to first reduce the spender's allowance to 0 and set the\ndesired value afterwards:\nhttps://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\n     * Emits an {Approval} event."
                },
                "id": 19254,
                "name": "StructuredDocumentation",
                "src": "1098:642:65"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "spender",
                      "overrides": null,
                      "scope": 19263,
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
                        "id": 19255,
                        "name": "ElementaryTypeName",
                        "src": "1762:7:65"
                      }
                    ],
                    "id": 19256,
                    "name": "VariableDeclaration",
                    "src": "1762:15:65"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "amount",
                      "overrides": null,
                      "scope": 19263,
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
                        "id": 19257,
                        "name": "ElementaryTypeName",
                        "src": "1779:7:65"
                      }
                    ],
                    "id": 19258,
                    "name": "VariableDeclaration",
                    "src": "1779:14:65"
                  }
                ],
                "id": 19259,
                "name": "ParameterList",
                "src": "1761:33:65"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "overrides": null,
                      "scope": 19263,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 19260,
                        "name": "ElementaryTypeName",
                        "src": "1813:4:65"
                      }
                    ],
                    "id": 19261,
                    "name": "VariableDeclaration",
                    "src": "1813:4:65"
                  }
                ],
                "id": 19262,
                "name": "ParameterList",
                "src": "1812:6:65"
              }
            ],
            "id": 19263,
            "name": "FunctionDefinition",
            "src": "1745:74:65"
          },
          {
            "attributes": {
              "body": null,
              "functionSelector": "23b872dd",
              "implemented": false,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "transferFrom",
              "overrides": null,
              "scope": 19294,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "attributes": {
                  "text": "@dev Moves `amount` tokens from `sender` to `recipient` using the\nallowance mechanism. `amount` is then deducted from the caller's\nallowance.\n     * Returns a boolean value indicating whether the operation succeeded.\n     * Emits a {Transfer} event."
                },
                "id": 19264,
                "name": "StructuredDocumentation",
                "src": "1825:296:65"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "sender",
                      "overrides": null,
                      "scope": 19275,
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
                        "id": 19265,
                        "name": "ElementaryTypeName",
                        "src": "2148:7:65"
                      }
                    ],
                    "id": 19266,
                    "name": "VariableDeclaration",
                    "src": "2148:14:65"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "recipient",
                      "overrides": null,
                      "scope": 19275,
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
                        "id": 19267,
                        "name": "ElementaryTypeName",
                        "src": "2164:7:65"
                      }
                    ],
                    "id": 19268,
                    "name": "VariableDeclaration",
                    "src": "2164:17:65"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "amount",
                      "overrides": null,
                      "scope": 19275,
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
                        "id": 19269,
                        "name": "ElementaryTypeName",
                        "src": "2183:7:65"
                      }
                    ],
                    "id": 19270,
                    "name": "VariableDeclaration",
                    "src": "2183:14:65"
                  }
                ],
                "id": 19271,
                "name": "ParameterList",
                "src": "2147:51:65"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "overrides": null,
                      "scope": 19275,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 19272,
                        "name": "ElementaryTypeName",
                        "src": "2217:4:65"
                      }
                    ],
                    "id": 19273,
                    "name": "VariableDeclaration",
                    "src": "2217:4:65"
                  }
                ],
                "id": 19274,
                "name": "ParameterList",
                "src": "2216:6:65"
              }
            ],
            "id": 19275,
            "name": "FunctionDefinition",
            "src": "2126:97:65"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "Transfer"
            },
            "children": [
              {
                "attributes": {
                  "text": "@dev Emitted when `value` tokens are moved from one account (`from`) to\nanother (`to`).\n     * Note that `value` may be zero."
                },
                "id": 19276,
                "name": "StructuredDocumentation",
                "src": "2229:158:65"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "from",
                      "overrides": null,
                      "scope": 19284,
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
                        "id": 19277,
                        "name": "ElementaryTypeName",
                        "src": "2407:7:65"
                      }
                    ],
                    "id": 19278,
                    "name": "VariableDeclaration",
                    "src": "2407:20:65"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "to",
                      "overrides": null,
                      "scope": 19284,
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
                        "id": 19279,
                        "name": "ElementaryTypeName",
                        "src": "2429:7:65"
                      }
                    ],
                    "id": 19280,
                    "name": "VariableDeclaration",
                    "src": "2429:18:65"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "value",
                      "overrides": null,
                      "scope": 19284,
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
                        "id": 19281,
                        "name": "ElementaryTypeName",
                        "src": "2449:7:65"
                      }
                    ],
                    "id": 19282,
                    "name": "VariableDeclaration",
                    "src": "2449:13:65"
                  }
                ],
                "id": 19283,
                "name": "ParameterList",
                "src": "2406:57:65"
              }
            ],
            "id": 19284,
            "name": "EventDefinition",
            "src": "2392:72:65"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "Approval"
            },
            "children": [
              {
                "attributes": {
                  "text": "@dev Emitted when the allowance of a `spender` for an `owner` is set by\na call to {approve}. `value` is the new allowance."
                },
                "id": 19285,
                "name": "StructuredDocumentation",
                "src": "2470:148:65"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "owner",
                      "overrides": null,
                      "scope": 19293,
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
                        "id": 19286,
                        "name": "ElementaryTypeName",
                        "src": "2638:7:65"
                      }
                    ],
                    "id": 19287,
                    "name": "VariableDeclaration",
                    "src": "2638:21:65"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "spender",
                      "overrides": null,
                      "scope": 19293,
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
                        "id": 19288,
                        "name": "ElementaryTypeName",
                        "src": "2661:7:65"
                      }
                    ],
                    "id": 19289,
                    "name": "VariableDeclaration",
                    "src": "2661:23:65"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "value",
                      "overrides": null,
                      "scope": 19293,
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
                        "id": 19290,
                        "name": "ElementaryTypeName",
                        "src": "2686:7:65"
                      }
                    ],
                    "id": 19291,
                    "name": "VariableDeclaration",
                    "src": "2686:13:65"
                  }
                ],
                "id": 19292,
                "name": "ParameterList",
                "src": "2637:63:65"
              }
            ],
            "id": 19293,
            "name": "EventDefinition",
            "src": "2623:78:65"
          }
        ],
        "id": 19294,
        "name": "ContractDefinition",
        "src": "137:2566:65"
      }
    ],
    "id": 19295,
    "name": "SourceUnit",
    "src": "33:2671:65"
  },
  "compiler": {
    "name": "solc",
    "version": "0.6.5+commit.f956cc89.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.3.4",
  "updatedAt": "2021-07-30T01:26:39.804Z",
  "devdoc": {
    "details": "Interface of the ERC20 standard as defined in the EIP.",
    "methods": {
      "allowance(address,address)": {
        "details": "Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default.     * This value changes when {approve} or {transferFrom} are called."
      },
      "approve(address,uint256)": {
        "details": "Sets `amount` as the allowance of `spender` over the caller's tokens.     * Returns a boolean value indicating whether the operation succeeded.     * IMPORTANT: Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729     * Emits an {Approval} event."
      },
      "balanceOf(address)": {
        "details": "Returns the amount of tokens owned by `account`."
      },
      "totalSupply()": {
        "details": "Returns the amount of tokens in existence."
      },
      "transfer(address,uint256)": {
        "details": "Moves `amount` tokens from the caller's account to `recipient`.     * Returns a boolean value indicating whether the operation succeeded.     * Emits a {Transfer} event."
      },
      "transferFrom(address,address,uint256)": {
        "details": "Moves `amount` tokens from `sender` to `recipient` using the allowance mechanism. `amount` is then deducted from the caller's allowance.     * Returns a boolean value indicating whether the operation succeeded.     * Emits a {Transfer} event."
      }
    }
  },
  "userdoc": {
    "methods": {}
  }
}