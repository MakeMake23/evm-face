export default [
    {
        type: "constructor",
        inputs: [
            {
                name: "approvers",
                type: "address[]",
                internalType: "address[]",
            },
            {
                name: "_requiredApprovals",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "nonpayable",
    },
    { type: "receive", stateMutability: "payable" },
    {
        type: "function",
        name: "APPROVER_ROLE",
        inputs: [],
        outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "DEFAULT_ADMIN_ROLE",
        inputs: [],
        outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "aggregate3",
        inputs: [
            {
                name: "calls",
                type: "tuple[]",
                internalType: "struct MultisigCaller.Call3[]",
                components: [
                    {
                        name: "target",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "allowFailure",
                        type: "bool",
                        internalType: "bool",
                    },
                    { name: "callData", type: "bytes", internalType: "bytes" },
                ],
            },
        ],
        outputs: [
            {
                name: "returnData",
                type: "tuple[]",
                internalType: "struct MultisigCaller.Result[]",
                components: [
                    { name: "success", type: "bool", internalType: "bool" },
                    {
                        name: "returnData",
                        type: "bytes",
                        internalType: "bytes",
                    },
                ],
            },
        ],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "aggregate3Value",
        inputs: [
            {
                name: "calls",
                type: "tuple[]",
                internalType: "struct MultisigCaller.Call3Value[]",
                components: [
                    {
                        name: "target",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "allowFailure",
                        type: "bool",
                        internalType: "bool",
                    },
                    { name: "value", type: "uint256", internalType: "uint256" },
                    { name: "callData", type: "bytes", internalType: "bytes" },
                ],
            },
        ],
        outputs: [
            {
                name: "returnData",
                type: "tuple[]",
                internalType: "struct MultisigCaller.Result[]",
                components: [
                    { name: "success", type: "bool", internalType: "bool" },
                    {
                        name: "returnData",
                        type: "bytes",
                        internalType: "bytes",
                    },
                ],
            },
        ],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "approvals",
        inputs: [
            { name: "", type: "uint256", internalType: "uint256" },
            { name: "", type: "address", internalType: "address" },
        ],
        outputs: [{ name: "", type: "bool", internalType: "bool" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "approveTransaction",
        inputs: [{ name: "txId", type: "uint256", internalType: "uint256" }],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "getRoleAdmin",
        inputs: [{ name: "role", type: "bytes32", internalType: "bytes32" }],
        outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getRoleMember",
        inputs: [
            { name: "role", type: "bytes32", internalType: "bytes32" },
            { name: "index", type: "uint256", internalType: "uint256" },
        ],
        outputs: [{ name: "", type: "address", internalType: "address" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getRoleMemberCount",
        inputs: [{ name: "role", type: "bytes32", internalType: "bytes32" }],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getRoleMembers",
        inputs: [{ name: "role", type: "bytes32", internalType: "bytes32" }],
        outputs: [{ name: "", type: "address[]", internalType: "address[]" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "grantRole",
        inputs: [
            { name: "role", type: "bytes32", internalType: "bytes32" },
            { name: "account", type: "address", internalType: "address" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "hasRole",
        inputs: [
            { name: "role", type: "bytes32", internalType: "bytes32" },
            { name: "account", type: "address", internalType: "address" },
        ],
        outputs: [{ name: "", type: "bool", internalType: "bool" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "renounceRole",
        inputs: [
            { name: "role", type: "bytes32", internalType: "bytes32" },
            {
                name: "callerConfirmation",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "requiredApprovals",
        inputs: [],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "revokeRole",
        inputs: [
            { name: "role", type: "bytes32", internalType: "bytes32" },
            { name: "account", type: "address", internalType: "address" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "setRequiredApprovals",
        inputs: [
            {
                name: "_requiredApprovals",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "submitTransaction",
        inputs: [
            { name: "to", type: "address", internalType: "address" },
            { name: "value", type: "uint256", internalType: "uint256" },
            { name: "data", type: "bytes", internalType: "bytes" },
        ],
        outputs: [{ name: "txId", type: "uint256", internalType: "uint256" }],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "supportsInterface",
        inputs: [
            { name: "interfaceId", type: "bytes4", internalType: "bytes4" },
        ],
        outputs: [{ name: "", type: "bool", internalType: "bool" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "transactions",
        inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        outputs: [
            { name: "to", type: "address", internalType: "address" },
            { name: "value", type: "uint256", internalType: "uint256" },
            { name: "data", type: "bytes", internalType: "bytes" },
            { name: "executed", type: "bool", internalType: "bool" },
            {
                name: "approvalCount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "event",
        name: "RequiredApprovalsChanged",
        inputs: [
            {
                name: "oldRequired",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "newRequired",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "RoleAdminChanged",
        inputs: [
            {
                name: "role",
                type: "bytes32",
                indexed: true,
                internalType: "bytes32",
            },
            {
                name: "previousAdminRole",
                type: "bytes32",
                indexed: true,
                internalType: "bytes32",
            },
            {
                name: "newAdminRole",
                type: "bytes32",
                indexed: true,
                internalType: "bytes32",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "RoleGranted",
        inputs: [
            {
                name: "role",
                type: "bytes32",
                indexed: true,
                internalType: "bytes32",
            },
            {
                name: "account",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "sender",
                type: "address",
                indexed: true,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "RoleRevoked",
        inputs: [
            {
                name: "role",
                type: "bytes32",
                indexed: true,
                internalType: "bytes32",
            },
            {
                name: "account",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "sender",
                type: "address",
                indexed: true,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "TransactionApproved",
        inputs: [
            {
                name: "txId",
                type: "uint256",
                indexed: true,
                internalType: "uint256",
            },
            {
                name: "approver",
                type: "address",
                indexed: true,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "TransactionExecuted",
        inputs: [
            {
                name: "txId",
                type: "uint256",
                indexed: true,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "TransactionSubmitted",
        inputs: [
            {
                name: "txId",
                type: "uint256",
                indexed: true,
                internalType: "uint256",
            },
            {
                name: "to",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "value",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "data",
                type: "bytes",
                indexed: false,
                internalType: "bytes",
            },
        ],
        anonymous: false,
    },
    { type: "error", name: "AccessControlBadConfirmation", inputs: [] },
    {
        type: "error",
        name: "AccessControlUnauthorizedAccount",
        inputs: [
            { name: "account", type: "address", internalType: "address" },
            { name: "neededRole", type: "bytes32", internalType: "bytes32" },
        ],
    },
    { type: "error", name: "FailedCall", inputs: [] },
    {
        type: "error",
        name: "InsufficientApprovers",
        inputs: [
            { name: "required", type: "uint256", internalType: "uint256" },
            { name: "approvers", type: "uint256", internalType: "uint256" },
        ],
    },
    {
        type: "error",
        name: "InvalidApproverCount",
        inputs: [
            { name: "count", type: "uint256", internalType: "uint256" },
            { name: "minimum", type: "uint256", internalType: "uint256" },
        ],
    },
    {
        type: "error",
        name: "InvalidTransactionId",
        inputs: [{ name: "txId", type: "uint256", internalType: "uint256" }],
    },
    {
        type: "error",
        name: "MaxApproversReached",
        inputs: [{ name: "max", type: "uint256", internalType: "uint256" }],
    },
    { type: "error", name: "ReentrancyGuardReentrantCall", inputs: [] },
    {
        type: "error",
        name: "RequiredApprovalsExceedApprovers",
        inputs: [
            { name: "required", type: "uint256", internalType: "uint256" },
            { name: "approvers", type: "uint256", internalType: "uint256" },
        ],
    },
    {
        type: "error",
        name: "RequiredApprovalsTooLow",
        inputs: [
            { name: "required", type: "uint256", internalType: "uint256" },
            { name: "minimum", type: "uint256", internalType: "uint256" },
        ],
    },
    {
        type: "error",
        name: "TransactionAlreadyApproved",
        inputs: [
            { name: "txId", type: "uint256", internalType: "uint256" },
            { name: "approver", type: "address", internalType: "address" },
        ],
    },
    {
        type: "error",
        name: "TransactionAlreadyExecuted",
        inputs: [{ name: "txId", type: "uint256", internalType: "uint256" }],
    },
    { type: "error", name: "ZeroAddress", inputs: [] },
];
