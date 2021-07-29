const BasicPriceOracle = {
  "contractName": "BasicPriceOracle",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "currentPrice",
          "type": "uint256"
        }
      ],
      "name": "CurrentPriceUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "previousAdminRole",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "newAdminRole",
          "type": "bytes32"
        }
      ],
      "name": "RoleAdminChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "RoleGranted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "RoleRevoked",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "DEFAULT_ADMIN_ROLE",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "PRICE_UPDATER",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        }
      ],
      "name": "getRoleAdmin",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "getRoleMember",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        }
      ],
      "name": "getRoleMemberCount",
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
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "grantRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "hasRole",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "renounceRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "revokeRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "currentPrice",
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
          "name": "_currentPrice",
          "type": "uint256"
        }
      ],
      "name": "setCurrentPrice",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.6.5+commit.f956cc89\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"currentPrice\",\"type\":\"uint256\"}],\"name\":\"CurrentPriceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"previousAdminRole\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"newAdminRole\",\"type\":\"bytes32\"}],\"name\":\"RoleAdminChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleGranted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleRevoked\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DEFAULT_ADMIN_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"PRICE_UPDATER\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"currentPrice\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"}],\"name\":\"getRoleAdmin\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"getRoleMember\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"}],\"name\":\"getRoleMemberCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"grantRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"hasRole\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"initialize\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"renounceRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"revokeRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_currentPrice\",\"type\":\"uint256\"}],\"name\":\"setCurrentPrice\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{\"getRoleAdmin(bytes32)\":{\"details\":\"Returns the admin role that controls `role`. See {grantRole} and {revokeRole}.     * To change a role's admin, use {_setRoleAdmin}.\"},\"getRoleMember(bytes32,uint256)\":{\"details\":\"Returns one of the accounts that have `role`. `index` must be a value between 0 and {getRoleMemberCount}, non-inclusive.     * Role bearers are not sorted in any particular way, and their ordering may change at any point.     * WARNING: When using {getRoleMember} and {getRoleMemberCount}, make sure you perform all queries on the same block. See the following https://forum.openzeppelin.com/t/iterating-over-elements-on-enumerableset-in-openzeppelin-contracts/2296[forum post] for more information.\"},\"getRoleMemberCount(bytes32)\":{\"details\":\"Returns the number of accounts that have `role`. Can be used together with {getRoleMember} to enumerate all bearers of a role.\"},\"grantRole(bytes32,address)\":{\"details\":\"Grants `role` to `account`.     * If `account` had not been already granted `role`, emits a {RoleGranted} event.     * Requirements:     * - the caller must have ``role``'s admin role.\"},\"hasRole(bytes32,address)\":{\"details\":\"Returns `true` if `account` has been granted `role`.\"},\"renounceRole(bytes32,address)\":{\"details\":\"Revokes `role` from the calling account.     * Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced).     * If the calling account had been granted `role`, emits a {RoleRevoked} event.     * Requirements:     * - the caller must be `account`.\"},\"revokeRole(bytes32,address)\":{\"details\":\"Revokes `role` from `account`.     * If `account` had been granted `role`, emits a {RoleRevoked} event.     * Requirements:     * - the caller must have ``role``'s admin role.\"}}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/F/vscode/cblades/contracts/BasicPriceOracle.sol\":\"BasicPriceOracle\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/F/vscode/cblades/contracts/BasicPriceOracle.sol\":{\"keccak256\":\"0xe44e229b5b1171a933021e1b1659b6dccd3c879df3221f440df6ff6dc43ff0f9\",\"urls\":[\"bzz-raw://b5de3548fbc8e5d051d26636a4f706465703dc202c7f7fe1f177cdb95cbae24e\",\"dweb:/ipfs/QmWnn1vfDbpf7RJzqmfTRS2Q5BLHvAEaqd9DCB8a4WGZUR\"]},\"/F/vscode/cblades/contracts/interfaces/IPriceOracle.sol\":{\"keccak256\":\"0x09772fba4e015bbb5f3f81a00d9963f309f8adf0595491ff8ba33eed857a80ca\",\"urls\":[\"bzz-raw://95490028b56a0c3353ec1a46ef405a2ee87e32a6541f32dd29e1e6adfdaf3ec6\",\"dweb:/ipfs/Qme5P8PYrzD2mZ94y7r3LmPV455UK7Zr9pYPU9EcWCbZmp\"]},\"@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol\":{\"keccak256\":\"0xa3c77c9ea6b47301c7ab5bf3addc1d809d13a27a179c4629a1b55308e8633d14\",\"urls\":[\"bzz-raw://77a789173aa9454336023580d52fedfb2d5ef0a1ccb3040ba20f5aa56e300aef\",\"dweb:/ipfs/Qme3CQYH1AywEH1w3mDV3UT6NhMQmjspNnUA6V8yBg77Ac\"]},\"@openzeppelin/contracts-upgradeable/proxy/Initializable.sol\":{\"keccak256\":\"0xd8e4eb08dcc1d1860fb347ba5ffd595242b9a1b66d49a47f2b4cb51c3f35017e\",\"urls\":[\"bzz-raw://7dbc89479d30592e82442edc38053b380f611037a5e6ceafc7bf57a7aa1f0305\",\"dweb:/ipfs/QmcdYtt56WmjeYvsFjK69FnahnAriw88VzY3XRZwXkQKKN\"]},\"@openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol\":{\"keccak256\":\"0xfc5ea91fa9ceb1961023b2a6c978b902888c52b90847ac7813fe3b79524165f6\",\"urls\":[\"bzz-raw://a6b81dcc816857a9d981386f6d8de49198420ee41cdc0ecade366ab412174d03\",\"dweb:/ipfs/QmV2vznMT6m9qo3pFMAWi3Nz3UDhwesgwFxeXe6Tod3v8A\"]},\"@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol\":{\"keccak256\":\"0xbbf8a21b9a66c48d45ff771b8563c6df19ba451d63dfb8380a865c1e1f29d1a0\",\"urls\":[\"bzz-raw://062688aac76e27ab50157a9d645700cf92e3c0d51d3d860be1d2e1a0c04a87d0\",\"dweb:/ipfs/QmfXxppWAiSTeH8YNn2EtMPDgzrLeJ5rjRq8knEbje88mX\"]},\"@openzeppelin/contracts-upgradeable/utils/EnumerableSetUpgradeable.sol\":{\"keccak256\":\"0x20714cf126a1a984613579156d3cbc726db8025d8400e1db1d2bb714edaba335\",\"urls\":[\"bzz-raw://8d6e8cc57f51f6c73eccd5b2dbaf3d8486a35148fe0e8bea4b002fbf2a78f381\",\"dweb:/ipfs/QmawvgjwaqMxyfbFnjxfap1FZ1sPwVgGHaEC41whKdP7N4\"]}},\"version\":1}",
  "bytecode": "0x608060405234801561001057600080fd5b50610bbb806100206000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806391d148541161007157806391d14854146101a65780639d1b464a146101e6578063a217fddf146101ee578063ca15c873146101f6578063d547741f14610213578063e1f84a361461023f576100b4565b806318b20071146100b9578063248a9ca3146100d85780632f2ff15d1461010757806336568abe146101335780638129fc1c1461015f5780639010d07c14610167575b600080fd5b6100d6600480360360208110156100cf57600080fd5b5035610247565b005b6100f5600480360360208110156100ee57600080fd5b5035610361565b60408051918252519081900360200190f35b6100d66004803603604081101561011d57600080fd5b50803590602001356001600160a01b0316610376565b6100d66004803603604081101561014957600080fd5b50803590602001356001600160a01b03166103dd565b6100d661043e565b61018a6004803603604081101561017d57600080fd5b5080359060200135610537565b604080516001600160a01b039092168252519081900360200190f35b6101d2600480360360408110156101bc57600080fd5b50803590602001356001600160a01b031661055e565b604080519115158252519081900360200190f35b6100f561057c565b6100f56105dd565b6100f56004803603602081101561020c57600080fd5b50356105e2565b6100d66004803603604081101561022957600080fd5b50803590602001356001600160a01b03166105f9565b6100f5610652565b604080516c282924a1a2afaaa82220aa22a960991b8152905190819003600d01902061027a90610275610677565b61055e565b6102cb576040805162461bcd60e51b815260206004820152601a60248201527f4d697373696e672050524943455f5550444154455220726f6c65000000000000604482015290519081900360640190fd5b60008111610319576040805162461bcd60e51b81526020600482015260166024820152755072696365206d757374206265206e6f6e2d7a65726f60501b604482015290519081900360640190fd5b6065805460ff1916600117905560668190556040805182815290517fcfebfed7291191489847e6abdd482d8816f6f32efecf69fc66c91631a2f217f99181900360200190a150565b60009081526033602052604090206002015490565b60008281526033602052604090206002015461039490610275610677565b6103cf5760405162461bcd60e51b815260040180806020018281038252602f815260200180610aca602f913960400191505060405180910390fd5b6103d9828261067b565b5050565b6103e5610677565b6001600160a01b0316816001600160a01b0316146104345760405162461bcd60e51b815260040180806020018281038252602f815260200180610b57602f913960400191505060405180910390fd5b6103d982826106ea565b600054610100900460ff16806104575750610457610759565b80610465575060005460ff16155b6104a05760405162461bcd60e51b815260040180806020018281038252602e815260200180610b29602e913960400191505060405180910390fd5b600054610100900460ff161580156104cb576000805460ff1961ff0019909116610100171660011790555b6104d361076a565b6104e560006104e0610677565b6103cf565b604080516c282924a1a2afaaa82220aa22a960991b8152905190819003600d019020610513906104e0610677565b6065805460ff1916905560006066558015610534576000805461ff00191690555b50565b6000828152603360205260408120610555908363ffffffff61081b16565b90505b92915050565b6000828152603360205260408120610555908363ffffffff61082716565b60655460009060ff166105d6576040805162461bcd60e51b815260206004820152601c60248201527f5072696365206d75737420626520736574206265666f726568616e6400000000604482015290519081900360640190fd5b5060665490565b600081565b60008181526033602052604081206105589061083c565b60008281526033602052604090206002015461061790610275610677565b6104345760405162461bcd60e51b8152600401808060200182810382526030815260200180610af96030913960400191505060405180910390fd5b604080516c282924a1a2afaaa82220aa22a960991b8152905190819003600d01902081565b3390565b6000828152603360205260409020610699908263ffffffff61084716565b156103d9576106a6610677565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000828152603360205260409020610708908263ffffffff61085c16565b156103d957610715610677565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b600061076430610871565b15905090565b600054610100900460ff16806107835750610783610759565b80610791575060005460ff16155b6107cc5760405162461bcd60e51b815260040180806020018281038252602e815260200180610b29602e913960400191505060405180910390fd5b600054610100900460ff161580156107f7576000805460ff1961ff0019909116610100171660011790555b6107ff610877565b610807610877565b8015610534576000805461ff001916905550565b60006105558383610917565b6000610555836001600160a01b03841661097b565b600061055882610993565b6000610555836001600160a01b038416610997565b6000610555836001600160a01b0384166109e1565b3b151590565b600054610100900460ff16806108905750610890610759565b8061089e575060005460ff16155b6108d95760405162461bcd60e51b815260040180806020018281038252602e815260200180610b29602e913960400191505060405180910390fd5b600054610100900460ff16158015610807576000805460ff1961ff0019909116610100171660011790558015610534576000805461ff001916905550565b815460009082106109595760405162461bcd60e51b8152600401808060200182810382526022815260200180610aa86022913960400191505060405180910390fd5b82600001828154811061096857fe5b9060005260206000200154905092915050565b60009081526001919091016020526040902054151590565b5490565b60006109a3838361097b565b6109d957508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610558565b506000610558565b60008181526001830160205260408120548015610a9d5783546000198083019190810190600090879083908110610a1457fe5b9060005260206000200154905080876000018481548110610a3157fe5b600091825260208083209091019290925582815260018981019092526040902090840190558654879080610a6157fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050610558565b600091505061055856fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e6473416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f206772616e74416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f207265766f6b65496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a6564416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636520726f6c657320666f722073656c66a2646970667358221220b0d95ae698916aed90a9680fb8b09d33b59b8da3c0c8677df473f5f210f204ea64736f6c63430006050033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100b45760003560e01c806391d148541161007157806391d14854146101a65780639d1b464a146101e6578063a217fddf146101ee578063ca15c873146101f6578063d547741f14610213578063e1f84a361461023f576100b4565b806318b20071146100b9578063248a9ca3146100d85780632f2ff15d1461010757806336568abe146101335780638129fc1c1461015f5780639010d07c14610167575b600080fd5b6100d6600480360360208110156100cf57600080fd5b5035610247565b005b6100f5600480360360208110156100ee57600080fd5b5035610361565b60408051918252519081900360200190f35b6100d66004803603604081101561011d57600080fd5b50803590602001356001600160a01b0316610376565b6100d66004803603604081101561014957600080fd5b50803590602001356001600160a01b03166103dd565b6100d661043e565b61018a6004803603604081101561017d57600080fd5b5080359060200135610537565b604080516001600160a01b039092168252519081900360200190f35b6101d2600480360360408110156101bc57600080fd5b50803590602001356001600160a01b031661055e565b604080519115158252519081900360200190f35b6100f561057c565b6100f56105dd565b6100f56004803603602081101561020c57600080fd5b50356105e2565b6100d66004803603604081101561022957600080fd5b50803590602001356001600160a01b03166105f9565b6100f5610652565b604080516c282924a1a2afaaa82220aa22a960991b8152905190819003600d01902061027a90610275610677565b61055e565b6102cb576040805162461bcd60e51b815260206004820152601a60248201527f4d697373696e672050524943455f5550444154455220726f6c65000000000000604482015290519081900360640190fd5b60008111610319576040805162461bcd60e51b81526020600482015260166024820152755072696365206d757374206265206e6f6e2d7a65726f60501b604482015290519081900360640190fd5b6065805460ff1916600117905560668190556040805182815290517fcfebfed7291191489847e6abdd482d8816f6f32efecf69fc66c91631a2f217f99181900360200190a150565b60009081526033602052604090206002015490565b60008281526033602052604090206002015461039490610275610677565b6103cf5760405162461bcd60e51b815260040180806020018281038252602f815260200180610aca602f913960400191505060405180910390fd5b6103d9828261067b565b5050565b6103e5610677565b6001600160a01b0316816001600160a01b0316146104345760405162461bcd60e51b815260040180806020018281038252602f815260200180610b57602f913960400191505060405180910390fd5b6103d982826106ea565b600054610100900460ff16806104575750610457610759565b80610465575060005460ff16155b6104a05760405162461bcd60e51b815260040180806020018281038252602e815260200180610b29602e913960400191505060405180910390fd5b600054610100900460ff161580156104cb576000805460ff1961ff0019909116610100171660011790555b6104d361076a565b6104e560006104e0610677565b6103cf565b604080516c282924a1a2afaaa82220aa22a960991b8152905190819003600d019020610513906104e0610677565b6065805460ff1916905560006066558015610534576000805461ff00191690555b50565b6000828152603360205260408120610555908363ffffffff61081b16565b90505b92915050565b6000828152603360205260408120610555908363ffffffff61082716565b60655460009060ff166105d6576040805162461bcd60e51b815260206004820152601c60248201527f5072696365206d75737420626520736574206265666f726568616e6400000000604482015290519081900360640190fd5b5060665490565b600081565b60008181526033602052604081206105589061083c565b60008281526033602052604090206002015461061790610275610677565b6104345760405162461bcd60e51b8152600401808060200182810382526030815260200180610af96030913960400191505060405180910390fd5b604080516c282924a1a2afaaa82220aa22a960991b8152905190819003600d01902081565b3390565b6000828152603360205260409020610699908263ffffffff61084716565b156103d9576106a6610677565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000828152603360205260409020610708908263ffffffff61085c16565b156103d957610715610677565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b600061076430610871565b15905090565b600054610100900460ff16806107835750610783610759565b80610791575060005460ff16155b6107cc5760405162461bcd60e51b815260040180806020018281038252602e815260200180610b29602e913960400191505060405180910390fd5b600054610100900460ff161580156107f7576000805460ff1961ff0019909116610100171660011790555b6107ff610877565b610807610877565b8015610534576000805461ff001916905550565b60006105558383610917565b6000610555836001600160a01b03841661097b565b600061055882610993565b6000610555836001600160a01b038416610997565b6000610555836001600160a01b0384166109e1565b3b151590565b600054610100900460ff16806108905750610890610759565b8061089e575060005460ff16155b6108d95760405162461bcd60e51b815260040180806020018281038252602e815260200180610b29602e913960400191505060405180910390fd5b600054610100900460ff16158015610807576000805460ff1961ff0019909116610100171660011790558015610534576000805461ff001916905550565b815460009082106109595760405162461bcd60e51b8152600401808060200182810382526022815260200180610aa86022913960400191505060405180910390fd5b82600001828154811061096857fe5b9060005260206000200154905092915050565b60009081526001919091016020526040902054151590565b5490565b60006109a3838361097b565b6109d957508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610558565b506000610558565b60008181526001830160205260408120548015610a9d5783546000198083019190810190600090879083908110610a1457fe5b9060005260206000200154905080876000018481548110610a3157fe5b600091825260208083209091019290925582815260018981019092526040902090840190558654879080610a6157fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050610558565b600091505061055856fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e6473416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f206772616e74416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f207265766f6b65496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a6564416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636520726f6c657320666f722073656c66a2646970667358221220b0d95ae698916aed90a9680fb8b09d33b59b8da3c0c8677df473f5f210f204ea64736f6c63430006050033",
  "immutableReferences": {},
  "sourceMap": "224:1105:0:-:0;;;;5:9:-1;2:2;;;27:1;24;17:12;2:2;224:1105:0;;;;;;;",
  "deployedSourceMap": "224:1105:0:-:0;;;;5:9:-1;2:2;;;27:1;24;17:12;2:2;224:1105:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12:1:-1;9;2:12;912:343:0;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;-1:-1;912:343:0;;:::i;:::-;;4652:112:56;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;-1:-1;4652:112:56;;:::i;:::-;;;;;;;;;;;;;;;;5014:223;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;-1:-1;5014:223:56;;;;;;-1:-1:-1;;;;;5014:223:56;;:::i;6188:205::-;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;-1:-1;6188:205:56;;;;;;-1:-1:-1;;;;;6188:205:56;;:::i;455:246:0:-;;;:::i;4335:136:56:-;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;-1:-1;4335:136:56;;;;;;;:::i;:::-;;;;-1:-1:-1;;;;;4335:136:56;;;;;;;;;;;;;;3320:137;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;-1:-1;3320:137:56;;;;;;-1:-1:-1;;;;;3320:137:56;;:::i;:::-;;;;;;;;;;;;;;;;;;723:164:0;;;:::i;2097:49:56:-;;;:::i;3625:125::-;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;-1:-1;3625:125:56;;:::i;5471:226::-;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;-1:-1;5471:226:56;;;;;;-1:-1:-1;;;;;5471:226:56;;:::i;314:66:0:-;;;:::i;912:343::-;354:26;;;-1:-1:-1;;;354:26:0;;;;;;;;;;;;997:36;;1020:12;:10;:12::i;:::-;997:7;:36::i;:::-;989:75;;;;;-1:-1:-1;;;989:75:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;1099:1;1083:13;:17;1075:52;;;;;-1:-1:-1;;;1075:52:0;;;;;;;;;;;;-1:-1:-1;;;1075:52:0;;;;;;;;;;;;;;;1140:8;:15;;-1:-1:-1;;1140:15:0;1151:4;1140:15;;;1166:13;:29;;;1213:34;;;;;;;;;;;;;;;;;912:343;:::o;4652:112:56:-;4709:7;4735:12;;;:6;:12;;;;;:22;;;;4652:112::o;5014:223::-;5105:12;;;;:6;:12;;;;;:22;;;5097:45;;5129:12;:10;:12::i;5097:45::-;5089:105;;;;-1:-1:-1;;;5089:105:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5205:25;5216:4;5222:7;5205:10;:25::i;:::-;5014:223;;:::o;6188:205::-;6285:12;:10;:12::i;:::-;-1:-1:-1;;;;;6274:23:56;:7;-1:-1:-1;;;;;6274:23:56;;6266:83;;;;-1:-1:-1;;;6266:83:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6360:26;6372:4;6378:7;6360:11;:26::i;455:246:0:-;1512:13:61;;;;;;;;:33;;;1529:16;:14;:16::i;:::-;1512:50;;;-1:-1:-1;1550:12:61;;;;1549:13;1512:50;1504:109;;;;-1:-1:-1;;;1504:109:61;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1624:19;1647:13;;;;;;1646:14;1670:98;;;;1704:13;:20;;-1:-1:-1;;;;1704:20:61;;;;;1738:19;1720:4;1738:19;;;1670:98;507:22:0::1;:20;:22::i;:::-;542:44;2142:4:56;573:12:0;:10;:12::i;:::-;542:10;:44::i;:::-;354:26;::::0;;-1:-1:-1;;;354:26:0;;;;;;;;::::1;::::0;;;597:39:::1;::::0;623:12:::1;:10;:12::i;597:39::-;649:8;:16:::0;;-1:-1:-1;;649:16:0::1;::::0;;660:5:::1;676:13;:17:::0;1790:66:61;;;;1840:5;1824:21;;-1:-1:-1;;1824:21:61;;;1790:66;455:246:0;:::o;4335:136:56:-;4408:7;4434:12;;;:6;:12;;;;;:30;;4458:5;4434:30;:23;:30;:::i;:::-;4427:37;;4335:136;;;;;:::o;3320:137::-;3389:4;3412:12;;;:6;:12;;;;;:38;;3442:7;3412:38;:29;:38;:::i;723:164:0:-;807:8;;779:7;;807:8;;799:49;;;;;-1:-1:-1;;;799:49:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;866:13:0;;723:164;:::o;2097:49:56:-;2142:4;2097:49;:::o;3625:125::-;3688:7;3714:12;;;:6;:12;;;;;:29;;:27;:29::i;5471:226::-;5563:12;;;;:6;:12;;;;;:22;;;5555:45;;5587:12;:10;:12::i;5555:45::-;5547:106;;;;-1:-1:-1;;;5547:106:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;314:66:0;354:26;;;-1:-1:-1;;;354:26:0;;;;;;;;;;;;314:66;:::o;828:104:68:-;915:10;828:104;:::o;7395:184:56:-;7468:12;;;;:6;:12;;;;;:33;;7493:7;7468:33;:24;:33;:::i;:::-;7464:109;;;7549:12;:10;:12::i;:::-;-1:-1:-1;;;;;7522:40:56;7540:7;-1:-1:-1;;;;;7522:40:56;7534:4;7522:40;;;;;;;;;;7395:184;;:::o;7585:188::-;7659:12;;;;:6;:12;;;;;:36;;7687:7;7659:36;:27;:36;:::i;:::-;7655:112;;;7743:12;:10;:12::i;:::-;-1:-1:-1;;;;;7716:40:56;7734:7;-1:-1:-1;;;;;7716:40:56;7728:4;7716:40;;;;;;;;;;7585:188;;:::o;1952:123:61:-;2000:4;2024:44;2062:4;2024:29;:44::i;:::-;2023:45;2016:52;;1952:123;:::o;1599:138:56:-;1512:13:61;;;;;;;;:33;;;1529:16;:14;:16::i;:::-;1512:50;;;-1:-1:-1;1550:12:61;;;;1549:13;1512:50;1504:109;;;;-1:-1:-1;;;1504:109:61;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1624:19;1647:13;;;;;;1646:14;1670:98;;;;1704:13;:20;;-1:-1:-1;;;;1704:20:61;;;;;1738:19;1720:4;1738:19;;;1670:98;1662:26:56::1;:24;:26::i;:::-;1698:32;:30;:32::i;:::-;1794:14:61::0;1790:66;;;1840:5;1824:21;;-1:-1:-1;;1824:21:61;;;1599:138:56;:::o;7688:156:70:-;7762:7;7812:22;7816:3;7828:5;7812:3;:22::i;6995:165::-;7075:4;7098:55;7108:3;-1:-1:-1;;;;;7128:23:70;;7098:9;:55::i;7241:115::-;7304:7;7330:19;7338:3;7330:7;:19::i;6440:150::-;6510:4;6533:50;6538:3;-1:-1:-1;;;;;6558:23:70;;6533:4;:50::i;6758:156::-;6831:4;6854:53;6862:3;-1:-1:-1;;;;;6882:23:70;;6854:7;:53::i;737:413:67:-;1097:20;1135:8;;;737:413::o;759:64:68:-;1512:13:61;;;;;;;;:33;;;1529:16;:14;:16::i;:::-;1512:50;;;-1:-1:-1;1550:12:61;;;;1549:13;1512:50;1504:109;;;;-1:-1:-1;;;1504:109:61;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1624:19;1647:13;;;;;;1646:14;1670:98;;;;1704:13;:20;;-1:-1:-1;;;;1704:20:61;;;;;1738:19;1720:4;1738:19;;;1794:14;1790:66;;;1840:5;1824:21;;-1:-1:-1;;1824:21:61;;;759:64:68;:::o;4463:201:70:-;4557:18;;4530:7;;4557:26;-1:-1:-1;4549:73:70;;;;-1:-1:-1;;;4549:73:70;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4639:3;:11;;4651:5;4639:18;;;;;;;;;;;;;;;;4632:25;;4463:201;;;;:::o;3816:127::-;3889:4;3912:19;;;:12;;;;;:19;;;;;;:24;;;3816:127::o;4024:107::-;4106:18;;4024:107::o;1651:404::-;1714:4;1735:21;1745:3;1750:5;1735:9;:21::i;:::-;1730:319;;-1:-1:-1;27:10;;39:1;23:18;;;45:23;;1772:11:70;:23;;;;;;;;;;;;;1952:18;;1930:19;;;:12;;;:19;;;;;;:40;;;;1984:11;;1730:319;-1:-1:-1;2033:5:70;2026:12;;2223:1512;2289:4;2426:19;;;:12;;;:19;;;;;;2460:15;;2456:1273;;2889:18;;-1:-1:-1;;2841:14:70;;;;2889:22;;;;2817:21;;2889:3;;:22;;3171;;;;;;;;;;;;;;3151:42;;3314:9;3285:3;:11;;3297:13;3285:26;;;;;;;;;;;;;;;;;;;:38;;;;3389:23;;;3431:1;3389:12;;;:23;;;;;;3415:17;;;3389:43;;3538:17;;3389:3;;3538:17;;;;;;;;;;;;;;;;;;;;;;3630:3;:12;;:19;3643:5;3630:19;;;;;;;;;;;3623:26;;;3671:4;3664:11;;;;;;;;2456:1273;3713:5;3706:12;;;;",
  "source": "pragma solidity ^0.6.5;\r\n\r\nimport \"@openzeppelin/contracts-upgradeable/proxy/Initializable.sol\";\r\nimport \"@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol\";\r\nimport \"./interfaces/IPriceOracle.sol\";\r\n\r\ncontract BasicPriceOracle is IPriceOracle, Initializable, AccessControlUpgradeable {\r\n    bytes32 public constant PRICE_UPDATER = keccak256(\"PRICE_UPDATER\");\r\n\r\n    bool private priceSet;\r\n    uint256 private currentPrice_;\r\n\r\n    function initialize() public initializer {\r\n        __AccessControl_init();\r\n\r\n        _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());\r\n        _setupRole(PRICE_UPDATER, _msgSender());\r\n\r\n        priceSet = false;\r\n        currentPrice_ = 0;\r\n    }\r\n\r\n    // Views\r\n    function currentPrice() external override view returns (uint256) {\r\n        require(priceSet, \"Price must be set beforehand\");\r\n        return currentPrice_;\r\n    }\r\n\r\n    // Mutative\r\n    function setCurrentPrice(uint256 _currentPrice) external override {\r\n        require(hasRole(PRICE_UPDATER, _msgSender()), \"Missing PRICE_UPDATER role\");\r\n        require(_currentPrice > 0, \"Price must be non-zero\");\r\n\r\n        priceSet = true;\r\n        currentPrice_ = _currentPrice;\r\n\r\n        emit CurrentPriceUpdated(_currentPrice);\r\n    }\r\n\r\n    // Events\r\n    event CurrentPriceUpdated(uint256 currentPrice);\r\n}\r\n",
  "sourcePath": "F:/vscode/cblades/contracts/BasicPriceOracle.sol",
  "ast": {
    "absolutePath": "/F/vscode/cblades/contracts/BasicPriceOracle.sol",
    "exportedSymbols": {
      "BasicPriceOracle": [
        102
      ]
    },
    "id": 103,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.6",
          ".5"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:0"
      },
      {
        "absolutePath": "@openzeppelin/contracts-upgradeable/proxy/Initializable.sol",
        "file": "@openzeppelin/contracts-upgradeable/proxy/Initializable.sol",
        "id": 2,
        "nodeType": "ImportDirective",
        "scope": 103,
        "sourceUnit": 19087,
        "src": "27:69:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol",
        "file": "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol",
        "id": 3,
        "nodeType": "ImportDirective",
        "scope": 103,
        "sourceUnit": 18451,
        "src": "98:81:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/F/vscode/cblades/contracts/interfaces/IPriceOracle.sol",
        "file": "./interfaces/IPriceOracle.sol",
        "id": 4,
        "nodeType": "ImportDirective",
        "scope": 103,
        "sourceUnit": 6845,
        "src": "181:39:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 5,
              "name": "IPriceOracle",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6844,
              "src": "253:12:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IPriceOracle_$6844",
                "typeString": "contract IPriceOracle"
              }
            },
            "id": 6,
            "nodeType": "InheritanceSpecifier",
            "src": "253:12:0"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 7,
              "name": "Initializable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 19086,
              "src": "267:13:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Initializable_$19086",
                "typeString": "contract Initializable"
              }
            },
            "id": 8,
            "nodeType": "InheritanceSpecifier",
            "src": "267:13:0"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 9,
              "name": "AccessControlUpgradeable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 18450,
              "src": "282:24:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_AccessControlUpgradeable_$18450",
                "typeString": "contract AccessControlUpgradeable"
              }
            },
            "id": 10,
            "nodeType": "InheritanceSpecifier",
            "src": "282:24:0"
          }
        ],
        "contractDependencies": [
          6844,
          18450,
          19086,
          20541
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 102,
        "linearizedBaseContracts": [
          102,
          18450,
          20541,
          19086,
          6844
        ],
        "name": "BasicPriceOracle",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "functionSelector": "e1f84a36",
            "id": 15,
            "name": "PRICE_UPDATER",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 102,
            "src": "314:66:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 11,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "314:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "argumentTypes": null,
              "arguments": [
                {
                  "argumentTypes": null,
                  "hexValue": "50524943455f55504441544552",
                  "id": 13,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "string",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "364:15:0",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_stringliteral_74b366a297145849fa9687e16ecad1e3a60cf84f6c2256ae73e20a9f76669804",
                    "typeString": "literal_string \"PRICE_UPDATER\""
                  },
                  "value": "PRICE_UPDATER"
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_stringliteral_74b366a297145849fa9687e16ecad1e3a60cf84f6c2256ae73e20a9f76669804",
                    "typeString": "literal_string \"PRICE_UPDATER\""
                  }
                ],
                "id": 12,
                "name": "keccak256",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": -8,
                "src": "354:9:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                  "typeString": "function (bytes memory) pure returns (bytes32)"
                }
              },
              "id": 14,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "functionCall",
              "lValueRequested": false,
              "names": [],
              "nodeType": "FunctionCall",
              "src": "354:26:0",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 17,
            "name": "priceSet",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 102,
            "src": "389:21:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bool",
              "typeString": "bool"
            },
            "typeName": {
              "id": 16,
              "name": "bool",
              "nodeType": "ElementaryTypeName",
              "src": "389:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 19,
            "name": "currentPrice_",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 102,
            "src": "417:29:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 18,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "417:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 47,
              "nodeType": "Block",
              "src": "496:205:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 24,
                      "name": "__AccessControl_init",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18165,
                      "src": "507:20:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 25,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "507:22:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 26,
                  "nodeType": "ExpressionStatement",
                  "src": "507:22:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 28,
                        "name": "DEFAULT_ADMIN_ROLE",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18189,
                        "src": "553:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 29,
                          "name": "_msgSender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20525,
                          "src": "573:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_payable_$",
                            "typeString": "function () view returns (address payable)"
                          }
                        },
                        "id": 30,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "573:12:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      ],
                      "id": 27,
                      "name": "_setupRole",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18372,
                      "src": "542:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address)"
                      }
                    },
                    "id": 31,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "542:44:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 32,
                  "nodeType": "ExpressionStatement",
                  "src": "542:44:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 34,
                        "name": "PRICE_UPDATER",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15,
                        "src": "608:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 35,
                          "name": "_msgSender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20525,
                          "src": "623:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_payable_$",
                            "typeString": "function () view returns (address payable)"
                          }
                        },
                        "id": 36,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "623:12:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      ],
                      "id": 33,
                      "name": "_setupRole",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18372,
                      "src": "597:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address)"
                      }
                    },
                    "id": 37,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "597:39:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 38,
                  "nodeType": "ExpressionStatement",
                  "src": "597:39:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 41,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 39,
                      "name": "priceSet",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17,
                      "src": "649:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "66616c7365",
                      "id": 40,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "660:5:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "src": "649:16:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 42,
                  "nodeType": "ExpressionStatement",
                  "src": "649:16:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 45,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 43,
                      "name": "currentPrice_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19,
                      "src": "676:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 44,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "692:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "676:17:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 46,
                  "nodeType": "ExpressionStatement",
                  "src": "676:17:0"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "8129fc1c",
            "id": 48,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": null,
                "id": 22,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 21,
                  "name": "initializer",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 19069,
                  "src": "484:11:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "484:11:0"
              }
            ],
            "name": "initialize",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 20,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "474:2:0"
            },
            "returnParameters": {
              "id": 23,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "496:0:0"
            },
            "scope": 102,
            "src": "455:246:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "baseFunctions": [
              6834
            ],
            "body": {
              "id": 61,
              "nodeType": "Block",
              "src": "788:99:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 55,
                        "name": "priceSet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17,
                        "src": "807:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "5072696365206d75737420626520736574206265666f726568616e64",
                        "id": 56,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "817:30:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_271cdc09b99b57e310c26e2c44a1451ae8abdf6f09b401507834ed06a310a5fb",
                          "typeString": "literal_string \"Price must be set beforehand\""
                        },
                        "value": "Price must be set beforehand"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_271cdc09b99b57e310c26e2c44a1451ae8abdf6f09b401507834ed06a310a5fb",
                          "typeString": "literal_string \"Price must be set beforehand\""
                        }
                      ],
                      "id": 54,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "799:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 57,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "799:49:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 58,
                  "nodeType": "ExpressionStatement",
                  "src": "799:49:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 59,
                    "name": "currentPrice_",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 19,
                    "src": "866:13:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 53,
                  "id": 60,
                  "nodeType": "Return",
                  "src": "859:20:0"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "9d1b464a",
            "id": 62,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "currentPrice",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 50,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "756:8:0"
            },
            "parameters": {
              "id": 49,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "744:2:0"
            },
            "returnParameters": {
              "id": 53,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 62,
                  "src": "779:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 51,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "779:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "778:9:0"
            },
            "scope": 102,
            "src": "723:164:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "baseFunctions": [
              6839
            ],
            "body": {
              "id": 96,
              "nodeType": "Block",
              "src": "978:277:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 70,
                            "name": "PRICE_UPDATER",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15,
                            "src": "1005:13:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "id": 71,
                              "name": "_msgSender",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 20525,
                              "src": "1020:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$__$returns$_t_address_payable_$",
                                "typeString": "function () view returns (address payable)"
                              }
                            },
                            "id": 72,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1020:12:0",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          ],
                          "id": 69,
                          "name": "hasRole",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18235,
                          "src": "997:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_bytes32_$_t_address_$returns$_t_bool_$",
                            "typeString": "function (bytes32,address) view returns (bool)"
                          }
                        },
                        "id": 73,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "997:36:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "4d697373696e672050524943455f5550444154455220726f6c65",
                        "id": 74,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1035:28:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_a267df445d51a851983f90239ddf98f73bb572959016b08ecf5f94f3383ff78f",
                          "typeString": "literal_string \"Missing PRICE_UPDATER role\""
                        },
                        "value": "Missing PRICE_UPDATER role"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_a267df445d51a851983f90239ddf98f73bb572959016b08ecf5f94f3383ff78f",
                          "typeString": "literal_string \"Missing PRICE_UPDATER role\""
                        }
                      ],
                      "id": 68,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "989:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 75,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "989:75:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 76,
                  "nodeType": "ExpressionStatement",
                  "src": "989:75:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 80,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 78,
                          "name": "_currentPrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 64,
                          "src": "1083:13:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 79,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1099:1:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "1083:17:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "5072696365206d757374206265206e6f6e2d7a65726f",
                        "id": 81,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1102:24:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_768e9ddd6b357a5c1463c6f0df884479f447251dc114c022b98a98e1fd80fea1",
                          "typeString": "literal_string \"Price must be non-zero\""
                        },
                        "value": "Price must be non-zero"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_768e9ddd6b357a5c1463c6f0df884479f447251dc114c022b98a98e1fd80fea1",
                          "typeString": "literal_string \"Price must be non-zero\""
                        }
                      ],
                      "id": 77,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1075:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 82,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1075:52:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 83,
                  "nodeType": "ExpressionStatement",
                  "src": "1075:52:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 86,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 84,
                      "name": "priceSet",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17,
                      "src": "1140:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 85,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1151:4:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1140:15:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 87,
                  "nodeType": "ExpressionStatement",
                  "src": "1140:15:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 90,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 88,
                      "name": "currentPrice_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19,
                      "src": "1166:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 89,
                      "name": "_currentPrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 64,
                      "src": "1182:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1166:29:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 91,
                  "nodeType": "ExpressionStatement",
                  "src": "1166:29:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 93,
                        "name": "_currentPrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 64,
                        "src": "1233:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 92,
                      "name": "CurrentPriceUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        101
                      ],
                      "referencedDeclaration": 101,
                      "src": "1213:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 94,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1213:34:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 95,
                  "nodeType": "EmitStatement",
                  "src": "1208:39:0"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "18b20071",
            "id": 97,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setCurrentPrice",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 66,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "969:8:0"
            },
            "parameters": {
              "id": 65,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 64,
                  "name": "_currentPrice",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 97,
                  "src": "937:21:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "937:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "936:23:0"
            },
            "returnParameters": {
              "id": 67,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "978:0:0"
            },
            "scope": 102,
            "src": "912:343:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 101,
            "name": "CurrentPriceUpdated",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 100,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 99,
                  "indexed": false,
                  "name": "currentPrice",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 101,
                  "src": "1304:20:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 98,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1304:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1303:22:0"
            },
            "src": "1278:48:0"
          }
        ],
        "scope": 103,
        "src": "224:1105:0"
      }
    ],
    "src": "0:1331:0"
  },
  "legacyAST": {
    "attributes": {
      "absolutePath": "/F/vscode/cblades/contracts/BasicPriceOracle.sol",
      "exportedSymbols": {
        "BasicPriceOracle": [
          102
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "^",
            "0.6",
            ".5"
          ]
        },
        "id": 1,
        "name": "PragmaDirective",
        "src": "0:23:0"
      },
      {
        "attributes": {
          "SourceUnit": 19087,
          "absolutePath": "@openzeppelin/contracts-upgradeable/proxy/Initializable.sol",
          "file": "@openzeppelin/contracts-upgradeable/proxy/Initializable.sol",
          "scope": 103,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2,
        "name": "ImportDirective",
        "src": "27:69:0"
      },
      {
        "attributes": {
          "SourceUnit": 18451,
          "absolutePath": "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol",
          "file": "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol",
          "scope": 103,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 3,
        "name": "ImportDirective",
        "src": "98:81:0"
      },
      {
        "attributes": {
          "SourceUnit": 6845,
          "absolutePath": "/F/vscode/cblades/contracts/interfaces/IPriceOracle.sol",
          "file": "./interfaces/IPriceOracle.sol",
          "scope": 103,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 4,
        "name": "ImportDirective",
        "src": "181:39:0"
      },
      {
        "attributes": {
          "abstract": false,
          "contractDependencies": [
            6844,
            18450,
            19086,
            20541
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            102,
            18450,
            20541,
            19086,
            6844
          ],
          "name": "BasicPriceOracle",
          "scope": 103
        },
        "children": [
          {
            "attributes": {
              "arguments": null
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "IPriceOracle",
                  "referencedDeclaration": 6844,
                  "type": "contract IPriceOracle"
                },
                "id": 5,
                "name": "UserDefinedTypeName",
                "src": "253:12:0"
              }
            ],
            "id": 6,
            "name": "InheritanceSpecifier",
            "src": "253:12:0"
          },
          {
            "attributes": {
              "arguments": null
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "Initializable",
                  "referencedDeclaration": 19086,
                  "type": "contract Initializable"
                },
                "id": 7,
                "name": "UserDefinedTypeName",
                "src": "267:13:0"
              }
            ],
            "id": 8,
            "name": "InheritanceSpecifier",
            "src": "267:13:0"
          },
          {
            "attributes": {
              "arguments": null
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "AccessControlUpgradeable",
                  "referencedDeclaration": 18450,
                  "type": "contract AccessControlUpgradeable"
                },
                "id": 9,
                "name": "UserDefinedTypeName",
                "src": "282:24:0"
              }
            ],
            "id": 10,
            "name": "InheritanceSpecifier",
            "src": "282:24:0"
          },
          {
            "attributes": {
              "constant": true,
              "functionSelector": "e1f84a36",
              "name": "PRICE_UPDATER",
              "overrides": null,
              "scope": 102,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "bytes32",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "bytes32",
                  "type": "bytes32"
                },
                "id": 11,
                "name": "ElementaryTypeName",
                "src": "314:7:0"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "isStructConstructorCall": false,
                  "lValueRequested": false,
                  "names": [
                    null
                  ],
                  "tryCall": false,
                  "type": "bytes32",
                  "type_conversion": false
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_74b366a297145849fa9687e16ecad1e3a60cf84f6c2256ae73e20a9f76669804",
                          "typeString": "literal_string \"PRICE_UPDATER\""
                        }
                      ],
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": -8,
                      "type": "function (bytes memory) pure returns (bytes32)",
                      "value": "keccak256"
                    },
                    "id": 12,
                    "name": "Identifier",
                    "src": "354:9:0"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "hexvalue": "50524943455f55504441544552",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "string",
                      "type": "literal_string \"PRICE_UPDATER\"",
                      "value": "PRICE_UPDATER"
                    },
                    "id": 13,
                    "name": "Literal",
                    "src": "364:15:0"
                  }
                ],
                "id": 14,
                "name": "FunctionCall",
                "src": "354:26:0"
              }
            ],
            "id": 15,
            "name": "VariableDeclaration",
            "src": "314:66:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "priceSet",
              "overrides": null,
              "scope": 102,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "bool",
              "value": null,
              "visibility": "private"
            },
            "children": [
              {
                "attributes": {
                  "name": "bool",
                  "type": "bool"
                },
                "id": 16,
                "name": "ElementaryTypeName",
                "src": "389:4:0"
              }
            ],
            "id": 17,
            "name": "VariableDeclaration",
            "src": "389:21:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "currentPrice_",
              "overrides": null,
              "scope": 102,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "value": null,
              "visibility": "private"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint256",
                  "type": "uint256"
                },
                "id": 18,
                "name": "ElementaryTypeName",
                "src": "417:7:0"
              }
            ],
            "id": 19,
            "name": "VariableDeclaration",
            "src": "417:29:0"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "8129fc1c",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "name": "initialize",
              "overrides": null,
              "scope": 102,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 20,
                "name": "ParameterList",
                "src": "474:2:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 23,
                "name": "ParameterList",
                "src": "496:0:0"
              },
              {
                "attributes": {
                  "arguments": null
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 19069,
                      "type": "modifier ()",
                      "value": "initializer"
                    },
                    "id": 21,
                    "name": "Identifier",
                    "src": "484:11:0"
                  }
                ],
                "id": 22,
                "name": "ModifierInvocation",
                "src": "484:11:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "arguments": [
                            null
                          ],
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                null
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 18165,
                              "type": "function ()",
                              "value": "__AccessControl_init"
                            },
                            "id": 24,
                            "name": "Identifier",
                            "src": "507:20:0"
                          }
                        ],
                        "id": 25,
                        "name": "FunctionCall",
                        "src": "507:22:0"
                      }
                    ],
                    "id": 26,
                    "name": "ExpressionStatement",
                    "src": "507:22:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                },
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 18372,
                              "type": "function (bytes32,address)",
                              "value": "_setupRole"
                            },
                            "id": 27,
                            "name": "Identifier",
                            "src": "542:10:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 18189,
                              "type": "bytes32",
                              "value": "DEFAULT_ADMIN_ROLE"
                            },
                            "id": 28,
                            "name": "Identifier",
                            "src": "553:18:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "arguments": [
                                null
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "tryCall": false,
                              "type": "address payable",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    null
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 20525,
                                  "type": "function () view returns (address payable)",
                                  "value": "_msgSender"
                                },
                                "id": 29,
                                "name": "Identifier",
                                "src": "573:10:0"
                              }
                            ],
                            "id": 30,
                            "name": "FunctionCall",
                            "src": "573:12:0"
                          }
                        ],
                        "id": 31,
                        "name": "FunctionCall",
                        "src": "542:44:0"
                      }
                    ],
                    "id": 32,
                    "name": "ExpressionStatement",
                    "src": "542:44:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                },
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 18372,
                              "type": "function (bytes32,address)",
                              "value": "_setupRole"
                            },
                            "id": 33,
                            "name": "Identifier",
                            "src": "597:10:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15,
                              "type": "bytes32",
                              "value": "PRICE_UPDATER"
                            },
                            "id": 34,
                            "name": "Identifier",
                            "src": "608:13:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "arguments": [
                                null
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "tryCall": false,
                              "type": "address payable",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    null
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 20525,
                                  "type": "function () view returns (address payable)",
                                  "value": "_msgSender"
                                },
                                "id": 35,
                                "name": "Identifier",
                                "src": "623:10:0"
                              }
                            ],
                            "id": 36,
                            "name": "FunctionCall",
                            "src": "623:12:0"
                          }
                        ],
                        "id": 37,
                        "name": "FunctionCall",
                        "src": "597:39:0"
                      }
                    ],
                    "id": 38,
                    "name": "ExpressionStatement",
                    "src": "597:39:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 17,
                              "type": "bool",
                              "value": "priceSet"
                            },
                            "id": 39,
                            "name": "Identifier",
                            "src": "649:8:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "66616c7365",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "bool",
                              "type": "bool",
                              "value": "false"
                            },
                            "id": 40,
                            "name": "Literal",
                            "src": "660:5:0"
                          }
                        ],
                        "id": 41,
                        "name": "Assignment",
                        "src": "649:16:0"
                      }
                    ],
                    "id": 42,
                    "name": "ExpressionStatement",
                    "src": "649:16:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 19,
                              "type": "uint256",
                              "value": "currentPrice_"
                            },
                            "id": 43,
                            "name": "Identifier",
                            "src": "676:13:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 44,
                            "name": "Literal",
                            "src": "692:1:0"
                          }
                        ],
                        "id": 45,
                        "name": "Assignment",
                        "src": "676:17:0"
                      }
                    ],
                    "id": 46,
                    "name": "ExpressionStatement",
                    "src": "676:17:0"
                  }
                ],
                "id": 47,
                "name": "Block",
                "src": "496:205:0"
              }
            ],
            "id": 48,
            "name": "FunctionDefinition",
            "src": "455:246:0"
          },
          {
            "attributes": {
              "baseFunctions": [
                6834
              ],
              "documentation": null,
              "functionSelector": "9d1b464a",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "currentPrice",
              "scope": 102,
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "attributes": {
                  "overrides": [
                    null
                  ]
                },
                "id": 50,
                "name": "OverrideSpecifier",
                "src": "756:8:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 49,
                "name": "ParameterList",
                "src": "744:2:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "overrides": null,
                      "scope": 62,
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
                        "id": 51,
                        "name": "ElementaryTypeName",
                        "src": "779:7:0"
                      }
                    ],
                    "id": 52,
                    "name": "VariableDeclaration",
                    "src": "779:7:0"
                  }
                ],
                "id": 53,
                "name": "ParameterList",
                "src": "778:9:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_271cdc09b99b57e310c26e2c44a1451ae8abdf6f09b401507834ed06a310a5fb",
                                  "typeString": "literal_string \"Price must be set beforehand\""
                                }
                              ],
                              "overloadedDeclarations": [
                                -18,
                                -18
                              ],
                              "referencedDeclaration": -18,
                              "type": "function (bool,string memory) pure",
                              "value": "require"
                            },
                            "id": 54,
                            "name": "Identifier",
                            "src": "799:7:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 17,
                              "type": "bool",
                              "value": "priceSet"
                            },
                            "id": 55,
                            "name": "Identifier",
                            "src": "807:8:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "5072696365206d75737420626520736574206265666f726568616e64",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "string",
                              "type": "literal_string \"Price must be set beforehand\"",
                              "value": "Price must be set beforehand"
                            },
                            "id": 56,
                            "name": "Literal",
                            "src": "817:30:0"
                          }
                        ],
                        "id": 57,
                        "name": "FunctionCall",
                        "src": "799:49:0"
                      }
                    ],
                    "id": 58,
                    "name": "ExpressionStatement",
                    "src": "799:49:0"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 53
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 19,
                          "type": "uint256",
                          "value": "currentPrice_"
                        },
                        "id": 59,
                        "name": "Identifier",
                        "src": "866:13:0"
                      }
                    ],
                    "id": 60,
                    "name": "Return",
                    "src": "859:20:0"
                  }
                ],
                "id": 61,
                "name": "Block",
                "src": "788:99:0"
              }
            ],
            "id": 62,
            "name": "FunctionDefinition",
            "src": "723:164:0"
          },
          {
            "attributes": {
              "baseFunctions": [
                6839
              ],
              "documentation": null,
              "functionSelector": "18b20071",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "setCurrentPrice",
              "scope": 102,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "attributes": {
                  "overrides": [
                    null
                  ]
                },
                "id": 66,
                "name": "OverrideSpecifier",
                "src": "969:8:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_currentPrice",
                      "overrides": null,
                      "scope": 97,
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
                        "id": 63,
                        "name": "ElementaryTypeName",
                        "src": "937:7:0"
                      }
                    ],
                    "id": 64,
                    "name": "VariableDeclaration",
                    "src": "937:21:0"
                  }
                ],
                "id": 65,
                "name": "ParameterList",
                "src": "936:23:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 67,
                "name": "ParameterList",
                "src": "978:0:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_a267df445d51a851983f90239ddf98f73bb572959016b08ecf5f94f3383ff78f",
                                  "typeString": "literal_string \"Missing PRICE_UPDATER role\""
                                }
                              ],
                              "overloadedDeclarations": [
                                -18,
                                -18
                              ],
                              "referencedDeclaration": -18,
                              "type": "function (bool,string memory) pure",
                              "value": "require"
                            },
                            "id": 68,
                            "name": "Identifier",
                            "src": "989:7:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "tryCall": false,
                              "type": "bool",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    },
                                    {
                                      "typeIdentifier": "t_address_payable",
                                      "typeString": "address payable"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 18235,
                                  "type": "function (bytes32,address) view returns (bool)",
                                  "value": "hasRole"
                                },
                                "id": 69,
                                "name": "Identifier",
                                "src": "997:7:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 15,
                                  "type": "bytes32",
                                  "value": "PRICE_UPDATER"
                                },
                                "id": 70,
                                "name": "Identifier",
                                "src": "1005:13:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    null
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "tryCall": false,
                                  "type": "address payable",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        null
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 20525,
                                      "type": "function () view returns (address payable)",
                                      "value": "_msgSender"
                                    },
                                    "id": 71,
                                    "name": "Identifier",
                                    "src": "1020:10:0"
                                  }
                                ],
                                "id": 72,
                                "name": "FunctionCall",
                                "src": "1020:12:0"
                              }
                            ],
                            "id": 73,
                            "name": "FunctionCall",
                            "src": "997:36:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "4d697373696e672050524943455f5550444154455220726f6c65",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "string",
                              "type": "literal_string \"Missing PRICE_UPDATER role\"",
                              "value": "Missing PRICE_UPDATER role"
                            },
                            "id": 74,
                            "name": "Literal",
                            "src": "1035:28:0"
                          }
                        ],
                        "id": 75,
                        "name": "FunctionCall",
                        "src": "989:75:0"
                      }
                    ],
                    "id": 76,
                    "name": "ExpressionStatement",
                    "src": "989:75:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_768e9ddd6b357a5c1463c6f0df884479f447251dc114c022b98a98e1fd80fea1",
                                  "typeString": "literal_string \"Price must be non-zero\""
                                }
                              ],
                              "overloadedDeclarations": [
                                -18,
                                -18
                              ],
                              "referencedDeclaration": -18,
                              "type": "function (bool,string memory) pure",
                              "value": "require"
                            },
                            "id": 77,
                            "name": "Identifier",
                            "src": "1075:7:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 64,
                                  "type": "uint256",
                                  "value": "_currentPrice"
                                },
                                "id": 78,
                                "name": "Identifier",
                                "src": "1083:13:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 79,
                                "name": "Literal",
                                "src": "1099:1:0"
                              }
                            ],
                            "id": 80,
                            "name": "BinaryOperation",
                            "src": "1083:17:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "5072696365206d757374206265206e6f6e2d7a65726f",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "string",
                              "type": "literal_string \"Price must be non-zero\"",
                              "value": "Price must be non-zero"
                            },
                            "id": 81,
                            "name": "Literal",
                            "src": "1102:24:0"
                          }
                        ],
                        "id": 82,
                        "name": "FunctionCall",
                        "src": "1075:52:0"
                      }
                    ],
                    "id": 83,
                    "name": "ExpressionStatement",
                    "src": "1075:52:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 17,
                              "type": "bool",
                              "value": "priceSet"
                            },
                            "id": 84,
                            "name": "Identifier",
                            "src": "1140:8:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "74727565",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "bool",
                              "type": "bool",
                              "value": "true"
                            },
                            "id": 85,
                            "name": "Literal",
                            "src": "1151:4:0"
                          }
                        ],
                        "id": 86,
                        "name": "Assignment",
                        "src": "1140:15:0"
                      }
                    ],
                    "id": 87,
                    "name": "ExpressionStatement",
                    "src": "1140:15:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 19,
                              "type": "uint256",
                              "value": "currentPrice_"
                            },
                            "id": 88,
                            "name": "Identifier",
                            "src": "1166:13:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 64,
                              "type": "uint256",
                              "value": "_currentPrice"
                            },
                            "id": 89,
                            "name": "Identifier",
                            "src": "1182:13:0"
                          }
                        ],
                        "id": 90,
                        "name": "Assignment",
                        "src": "1166:29:0"
                      }
                    ],
                    "id": 91,
                    "name": "ExpressionStatement",
                    "src": "1166:29:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                101
                              ],
                              "referencedDeclaration": 101,
                              "type": "function (uint256)",
                              "value": "CurrentPriceUpdated"
                            },
                            "id": 92,
                            "name": "Identifier",
                            "src": "1213:19:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 64,
                              "type": "uint256",
                              "value": "_currentPrice"
                            },
                            "id": 93,
                            "name": "Identifier",
                            "src": "1233:13:0"
                          }
                        ],
                        "id": 94,
                        "name": "FunctionCall",
                        "src": "1213:34:0"
                      }
                    ],
                    "id": 95,
                    "name": "EmitStatement",
                    "src": "1208:39:0"
                  }
                ],
                "id": 96,
                "name": "Block",
                "src": "978:277:0"
              }
            ],
            "id": 97,
            "name": "FunctionDefinition",
            "src": "912:343:0"
          },
          {
            "attributes": {
              "anonymous": false,
              "documentation": null,
              "name": "CurrentPriceUpdated"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "currentPrice",
                      "overrides": null,
                      "scope": 101,
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
                        "id": 98,
                        "name": "ElementaryTypeName",
                        "src": "1304:7:0"
                      }
                    ],
                    "id": 99,
                    "name": "VariableDeclaration",
                    "src": "1304:20:0"
                  }
                ],
                "id": 100,
                "name": "ParameterList",
                "src": "1303:22:0"
              }
            ],
            "id": 101,
            "name": "EventDefinition",
            "src": "1278:48:0"
          }
        ],
        "id": 102,
        "name": "ContractDefinition",
        "src": "224:1105:0"
      }
    ],
    "id": 103,
    "name": "SourceUnit",
    "src": "0:1331:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.6.5+commit.f956cc89.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.3.4",
  "updatedAt": "2021-07-22T21:42:31.780Z",
  "devdoc": {
    "methods": {
      "getRoleAdmin(bytes32)": {
        "details": "Returns the admin role that controls `role`. See {grantRole} and {revokeRole}.     * To change a role's admin, use {_setRoleAdmin}."
      },
      "getRoleMember(bytes32,uint256)": {
        "details": "Returns one of the accounts that have `role`. `index` must be a value between 0 and {getRoleMemberCount}, non-inclusive.     * Role bearers are not sorted in any particular way, and their ordering may change at any point.     * WARNING: When using {getRoleMember} and {getRoleMemberCount}, make sure you perform all queries on the same block. See the following https://forum.openzeppelin.com/t/iterating-over-elements-on-enumerableset-in-openzeppelin-contracts/2296[forum post] for more information."
      },
      "getRoleMemberCount(bytes32)": {
        "details": "Returns the number of accounts that have `role`. Can be used together with {getRoleMember} to enumerate all bearers of a role."
      },
      "grantRole(bytes32,address)": {
        "details": "Grants `role` to `account`.     * If `account` had not been already granted `role`, emits a {RoleGranted} event.     * Requirements:     * - the caller must have ``role``'s admin role."
      },
      "hasRole(bytes32,address)": {
        "details": "Returns `true` if `account` has been granted `role`."
      },
      "renounceRole(bytes32,address)": {
        "details": "Revokes `role` from the calling account.     * Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced).     * If the calling account had been granted `role`, emits a {RoleRevoked} event.     * Requirements:     * - the caller must be `account`."
      },
      "revokeRole(bytes32,address)": {
        "details": "Revokes `role` from `account`.     * If `account` had been granted `role`, emits a {RoleRevoked} event.     * Requirements:     * - the caller must have ``role``'s admin role."
      }
    }
  },
  "userdoc": {
    "methods": {}
  }
}