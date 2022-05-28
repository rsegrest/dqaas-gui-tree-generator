import {
  UncontrolledTreeEnvironment,
  Tree,
  StaticTreeDataProvider
} from "react-complex-tree";
import { dqInputObject } from "./resources/sampleApiResponse";
import { dqMultiLevelTree } from "./resources/complextree.js";
import { brokenTree } from "./resources/brokenTree.js";
// import { flatList } from "./resources/flatListExample.js";
import "react-complex-tree/lib/style.css";
import DQTree from "./dqtree";
const flattenResponse = (input) => {
  const output = input.map((element) => element[0]);
  return output;
};

export const splitElements = (input) => {
  const elementStruct = {};
  let maxDepth;
  input.forEach((str) => {
    const splitString = str.split(".");
    let pointer = null;
    let parentPointer = null;
    maxDepth = splitString.length;
    for (let i = 0; i < maxDepth; i += 1) {
      if (pointer === null) {
        parentPointer = elementStruct;
      }
      pointer = splitString[i];
      if (!Object.keys(parentPointer).includes(pointer)) {
        parentPointer[pointer] = {};
      }
      parentPointer = parentPointer[pointer];
    }
  });
  // console.log("masterObject:");
  // console.log(masterObject);
  return { elementStruct, maxDepth };
};
// const createNode = ({ idx, data, hasChildren, children }) => {
//   return {
//     [idx]: {
//       index: idx,
//       canMove: true,
//       hasChildren,
//       data,
//       canRename: true
//     }
//   };
// };
const createAndAddNode = ({ idx, data, hasChildren, children, struct }) => {
  const newNode = {
    index: idx,
    canMove: true,
    hasChildren,
    data,
    canRename: true
  };
  if (struct) {
    struct[idx] = newNode;
  }
  return newNode;
};
// const isDeeper = (pointer) => {
//   return Object.keys(pointer) === null;
// };
// const plumbDepth = (pointer) => {};

// called with every property and its value

let depth = 0;
const filterNames = (obj) => {
  return Object.keys(obj);
};
// DEPTH-FIRST
const process = (k, v) => {
  console.log(`${k} : ${JSON.stringify(filterNames(v))}`);
};

// TODO: Create class with member structures to represent different data transformations

// console.log;

const traverse = (obj, func) => {
  for (let i in obj) {
    func.apply(this, [i, obj[i]]);
    if (obj[i] !== null && typeof obj[i] === "object") {
      // step down
      traverse(obj[i], func);
    }
  }
};

// const breadthFirstTraverse = (obj, level = 0) => {
//   for (let prop in obj) {
//     if (Array.isArray(obj[prop]) || typeof obj[prop] === "object") {
//       breadthFirstTraverse(obj[prop], level);
//       console.log(`BFT (level ${level}): ${prop}`);
//     } else {
//       // console.log("BFT : " + prop, "=", obj[prop]);
//       // level += 1;
//       console.log(`BFT : ${prop} = ${obj[prop]}`);
//     }
//   }
// };

//that's all... no magic, no bloated framework
// traverse(o, process);

// const getObjectLevelKeys = (levelNum) => {};

const getNodeAndChildren = (objectPtr) => {
  // console.log("getNodeAndChildren");
  // const entries = Object.entries(objectPtr);
  return [objectPtr[0], [objectPtr[1]]];
};

const processObject = (obj) => {
  // console.log("processObject");
  depth = 0;
  const subtreeArray = traverse(obj, process); //getNodeAndChildren);
  console.log("processObject : subtreeArray : ");
  console.log(subtreeArray);
};

const buildUIStruct = ({ elementStruct, maxDepth }) => {
  let depth = 0;
  // const elementsChildren = dqInputObject.map((el) => el[0]);

  // let elementsChildrenStructArray = {};
  // elementsChildren.forEach((el) => {
  //   // const element = el.toString();
  //   elementsChildrenStructArray[el] = {
  //     index: el,
  //     canMove: true,
  //     hasChildren: false,
  //     data: el,
  //     canRename: true
  //   };
  // });

  // console.log(elementsChildrenStructArray);

  // const rootItem = {
  //   root: {
  //     index: "root",
  //     canMove: true,
  //     hasChildren: true,
  //     children: ["Elements"],
  //     data: "root",
  //     canRename: true
  //   }
  // };

  const massPropsTree = {
    items: {
      // ...firstOrderItem
    }
  };

  const rootItem = createAndAddNode({
    idx: "root",
    hasChildren: true,
    children: ["Elements"],
    data: "root",
    struct: massPropsTree.items
  });
  // console.log("elementStruct::");
  // console.log(elementStruct);
  const firstOrderArray = Object.keys(elementStruct);
  // console.log("firstOrderArray: ");
  // console.log(firstOrderArray);
  const firstOrderItem = createAndAddNode({
    idx: "Elements",
    hasChildren: true,
    children: firstOrderArray,
    data: "Elements",
    canRename: true,
    struct: massPropsTree.items
  });

  let pointer = elementStruct;
  let pointerPath = null;
  let parentPointer = "Elements";

  let pointerArray = []; // Array of JSON substructres

  // TODO: traverse the tree, sort of in reverse of what was done to build.

  // while (true) {
  // fill in with structure needed for tree
  const elementsChildrenStructArray = [];
  processObject(elementStruct);
  // TODO: traverse the tree, sort of in reverse of what was done to build.

  let count = 1000;
  // while (true) {
  //   count -= 1;
  //   if (count <= 0) {
  //     break;
  //   }
  // }

  // fill in with structure needed for tree
  // const elementsChildrenStructArray = [];

  /*
    Get all first level
    Get all second level

  */
  // breadthFirstTraverse(elementStruct);

  // console.log('elementStruct');
  // console.log(elementStruct);
  // while (true) {
  //   Object.keys(pointer).forEach((key) => {
  //     console.log(`register ${el} with children ${el[1]}`);
  //   });
  // }

  // if (parentPointer === null) {
  // let entries = Object.entries(pointer);
  // console.log("the keys:");
  // console.log(entries);

  // const objectData = [];
  // each index in "levels" should have index, data, children right now
  // let breadcrumb = [];
  // for (let i = 0; i < entries.length; i += 1) {
  // console.log("create entry for (0): " + entries[i]);
  // levels.push(entries[i][0]);

  // TODO: Try using "maxDepth"
  // for (let j = 0; j < maxDepth; j += 1) {

  // console.log("create entry for (1): " + entries[i][j][0]);
  // }
  // }
  // objectData.push(levels);
  // console.log("objectData:");
  // console.log(objectData);
  /*

  ks.forEach((k) => {
    const node = createAndAddNode({
      idx: k,
      hasChildren: false,
      data: k,
      struct: massPropsTree.items
    });
    // console.log("node:");
    // console.log(node);
    // elementsChildrenStructArray.push(node);
  });
  // }

  console.log("elementsChildrenStructArray:");
  console.log(elementsChildrenStructArray);
  // }

  */

  // elementStruct.forEach((str) => {
  //   const splitString = str.split(".");
  //   let pointer = null;
  //   let parentPointer = null;
  //   maxDepth = splitString.length;
  //   for (let i = 0; i < maxDepth; i += 1) {
  //     if (pointer === null) {
  //       parentPointer = elementStruct;
  //     }
  //     pointer = splitString[i];
  //     if (!Object.keys(parentPointer).includes(pointer)) {
  //       parentPointer[pointer] = {};
  //     }
  //     parentPointer = parentPointer[pointer];
  //   }
  // });

  // console.log("massPropsTree");
  // console.log(JSON.stringify(massPropsTree));
  // return massPropsTree;
};

// const buildMassPropsTree = () => {
//   const elementsChildren = dqInputObject.map((el) => el[0]);

//   let elementsChildrenStructArray = {};
//   elementsChildren.forEach((el) => {
//     // const element = el.toString();
//     elementsChildrenStructArray[el] = {
//       index: el,
//       canMove: true,
//       hasChildren: false,
//       data: el,
//       canRename: true
//     };
//   });

//   console.log(elementsChildrenStructArray);
//   const rootItem = {
//     root: {
//       index: "root",
//       canMove: true,
//       hasChildren: true,
//       children: [
//         "Elements"
//         // "Meals",
//         // "Desserts",
//         // "Drinks"
//       ],
//       data: "root",
//       canRename: true
//     }
//   };
//   const firstOrderItem = {
//     Elements: {
//       index: "Elements",
//       canMove: true,
//       hasChildren: true,
//       children: elementsChildren,
//       data: "Elements",
//       canRename: true
//     }
//   };
// const massPropsTree = {
//   items: {
//     ...rootItem,
//     ...firstOrderItem,
//     ...elementsChildrenStructArray
//   }
// };
//   console.log("massPropsTree");
//   console.log(JSON.stringify(massPropsTree));
//   return massPropsTree;
// };

export function TheTree({ treeData }) {
  return (
    <UncontrolledTreeEnvironment
      dataProvider={
        new StaticTreeDataProvider(treeData.items, (item, data) => ({
          ...item,
          data
        }))
      }
      getItemTitle={(item) => item.data}
      viewState={{
        "tree-1": {
          expandedItems: ["Fruit"]
        }
      }}
    >
      <Tree treeId="tree-1" rootItem="root" treeLabel="Tree Example" />
    </UncontrolledTreeEnvironment>
  );
}

export default function App() {
  // console.log(JSON.stringify(longTree));
  const flattenedList = flattenResponse(dqInputObject);
  const { elementStruct, maxDepth } = splitElements(flattenedList);
  // console.log("elementStruct, maxDepth:");
  // console.log(JSON.stringify(elementStruct) + ", " + maxDepth);

  // buildUIStruct({ elementStruct, maxDepth });

  let dqt = new DQTree();
  dqt.setJsonTree(elementStruct);
  dqt.executeTest();

  // const massPropsTree = buildMassPropsTree();
  const massPropsTree = dqt.getUiTree();
  return <TheTree treeData={brokenTree} />;
  // return <TheTree treeData={massPropsTree} />;
  // return <p>Testing</p>;
}
