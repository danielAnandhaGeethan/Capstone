const contractAddress = "0x1eB2D7CaaDb871dE3bC6B75edcFFaAB10EC53C31";

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
        type: "address",
      },
    ],
    name: "patientInfo",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x6142d2dc",
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
        name: "_cid",
        type: "string",
      },
    ],
    name: "pushData",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x06b1efe5",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_paddress",
        type: "address",
      },
    ],
    name: "getPatientInfo",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x4b426178",
  },
];

export { contractAddress, contractAbi };
