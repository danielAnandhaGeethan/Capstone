const contractAddress = "0x05453CbB490b803C88A90E20D1c30b516aF49a36";

const contractAbi = [
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x06fdde03",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    name: "doctorList",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x127ca4b4",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address",
      },
    ],
    name: "doctorInfo",
    outputs: [
      {
        name: "name",
        type: "string",
      },
      {
        name: "exists",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x1bf04073",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address",
      },
    ],
    name: "designationInfo",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x5073d346",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address",
      },
    ],
    name: "patientInfo",
    outputs: [
      {
        name: "name",
        type: "string",
      },
      {
        name: "age",
        type: "uint256",
      },
      {
        name: "cid",
        type: "string",
      },
      {
        name: "exists",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x6142d2dc",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    name: "patientList",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0xbabb1d41",
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
    signature: "constructor",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_name",
        type: "string",
      },
      {
        name: "_age",
        type: "uint256",
      },
      {
        name: "_designation",
        type: "uint256",
      },
      {
        name: "_cid",
        type: "string",
      },
    ],
    name: "register",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x1bc44009",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_addr",
        type: "address",
      },
    ],
    name: "login",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x35a6861a",
  },
];

export { contractAddress, contractAbi };
