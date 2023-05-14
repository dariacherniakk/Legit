const contractABI = [
  {
    inputs: [
      {
        internalType: 'string',
        name: '_name',
        type: 'string',
      },
      {
        internalType: 'address',
        name: '_companyAddress',
        type: 'address',
      },
      {
        internalType: 'enum Legit.CompanyType',
        name: '_companyType',
        type: 'uint8',
      },
    ],
    name: 'addCompany',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'companyAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'enum Legit.CompanyType',
        name: 'companyType',
        type: 'uint8',
      },
    ],
    name: 'AddCompany',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: '_isCompany',
        type: 'bool',
      },
      {
        internalType: 'string',
        name: '_companyName',
        type: 'string',
      },
      {
        internalType: 'address',
        name: '_userAccount',
        type: 'address',
      },
      {
        internalType: 'string',
        name: '_experienceName',
        type: 'string',
      },
    ],
    name: 'createRequest',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint64',
        name: 'id',
        type: 'uint64',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'isCompany',
        type: 'bool',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'companyName',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'userAccount',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'enum Legit.CompanyType',
            name: 'companyType',
            type: 'uint8',
          },
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
        ],
        indexed: false,
        internalType: 'struct Legit.Title',
        name: 'title',
        type: 'tuple',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'isExecuted',
        type: 'bool',
      },
    ],
    name: 'CreateRequest',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_skillName',
        type: 'string',
      },
      {
        internalType: 'string[]',
        name: '_companyNames',
        type: 'string[]',
      },
    ],
    name: 'createSkillRequest',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint64',
        name: 'id',
        type: 'uint64',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'userAccount',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'skillName',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string[]',
        name: 'companyName',
        type: 'string[]',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'submissions',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'isExecuted',
        type: 'bool',
      },
    ],
    name: 'CreateSkillRequest',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint64',
        name: 'id',
        type: 'uint64',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'userAccount',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'skill',
        type: 'string',
      },
    ],
    name: 'SkillValidationComplete',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: 'id',
        type: 'uint64',
      },
    ],
    name: 'validateRequest',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint64',
        name: 'id',
        type: 'uint64',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'userAccount',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'companyName',
        type: 'string',
      },
      {
        components: [
          {
            internalType: 'enum Legit.CompanyType',
            name: 'companyType',
            type: 'uint8',
          },
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
        ],
        indexed: false,
        internalType: 'struct Legit.Title',
        name: 'title',
        type: 'tuple',
      },
    ],
    name: 'ValidateRequest',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: 'id',
        type: 'uint64',
      },
    ],
    name: 'validateSkillRequest',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint64',
        name: 'id',
        type: 'uint64',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'userAccount',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'skill',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'validator',
        type: 'address',
      },
    ],
    name: 'ValidateSkillRequest',
    type: 'event',
  },
  {
    inputs: [],
    name: 'MIN_SKILL_SUBMISSION',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

export default contractABI;
