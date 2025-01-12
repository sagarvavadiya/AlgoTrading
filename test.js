var Data = [
  {
    parent_id: 'eQ==',
    id: 'eA==',
    name: 'mcCoin',
    children: [
      {
        parent_id: 'eA==',
        id: 'ew==',
        name: 'abc12',
        children: [],
        isExpanded: false,
      },
      // {
      //   parent_id: 'eA==',
      //   id: 'fQ==',
      //   name: 'raininfo1211',
      //   children: [],
      //   isExpanded: false,
      // },
      // {
      //   parent_id: 'eA==',
      //   id: 'fA==',
      //   name: 'raininfo22',
      //   children: [
      //     {
      //       parent_id: 'fA==',
      //       id: 'ev4=',
      //       name: 'SeptUser1309',
      //       children: [],
      //       isExpanded: false,
      //     },
      //     {
      //       parent_id: 'fA==',
      //       id: 'ev8=',
      //       name: 'TestXyz123',
      //       children: [
      //         {
      //           parent_id: 'ev8=',
      //           id: 'eg==',
      //           name: 'office12',
      //           children: [],
      //           isExpanded: false,
      //         },
      //       ],
      //       isExpanded: true,
      //     },
      //   ],
      //   isExpanded: true,
      // },
      // {
      //   parent_id: 'eA==',
      //   id: 'eP8=',
      //   name: 'mcCoin122',
      //   children: [],
      //   isExpanded: false,
      // },
      // {
      //   parent_id: 'eA==',
      //   id: 'e/w=',
      //   name: 'RainUser123',
      //   children: [],
      //   isExpanded: false,
      // },
      // {
      //   parent_id: 'eA==',
      //   id: 'e/0=',
      //   name: 'TestUser123',
      //   children: [],
      //   isExpanded: false,
      // },
      // {
      //   parent_id: 'eA==',
      //   id: 'e/o=',
      //   name: 'dummy123',
      //   children: [],
      //   isExpanded: false,
      // },
      // {
      //   parent_id: 'eA==',
      //   id: 'ev4=',
      //   name: 'SeptUser1309',
      //   children: [],
      //   isExpanded: false,
      // },
      // {
      //   parent_id: 'eA==',
      //   id: 'ff4=',
      //   name: 'Test456',
      //   children: [],
      //   isExpanded: false,
      // },
      // {
      //   parent_id: 'eA==',
      //   id: 'fP4=',
      //   name: 'Abc123',
      //   children: [
      //     {
      //       parent_id: 'fP4=',
      //       id: 'fP8=',
      //       name: 'newRefUser123',
      //       children: [
      //         {
      //           parent_id: 'fP8=',
      //           id: 'fPw=',
      //           name: 'SeptUser262',
      //           children: [],
      //           isExpanded: false,
      //         },
      //       ],
      //       isExpanded: true,
      //     },
      //   ],
      //   isExpanded: true,
      // },
    ],
    isExpanded: true,
  },
];


function addNodes(tree, parentId, nestedData) {
  for (let node of tree) {
    if (node.id === parentId) {
      // Found the parent node, now add nested data
      if (node.children.length > 0) {
        node.children.push(nestedData); // Add the nestedData to children
      }else{
        node.children = [nestedData]
      }
      return true; // Return true to indicate the operation succeeded
    }
    // If current node has children, perform recursion
    if (node.children && node.children.length > 0) {
      const isAdded = addNodes(node.children, parentId, nestedData);
      if (isAdded) return true; // If data is added in a deeper level, stop further recursion
    }
  }
  return false; // Return false if the parentId was not found in the tree
}
let hild =   {
    parent_id: 'eA==',
    id: 'fQ==',
    name: 'raininfo1211',
    children: [],
    isExpanded: false,
  }

addNodes(Data, 'eA==', hild)
console.log(Data[0]['children'])
