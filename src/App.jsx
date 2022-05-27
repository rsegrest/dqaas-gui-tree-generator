import {
  UncontrolledTreeEnvironment,
  Tree,
  StaticTreeDataProvider
} from "react-complex-tree";
import { dqInputObject } from "./resources/sampleApiResponse";
import { dqMultiLevelTree } from "./resources/complextree.js";
import { flatList } from "./resources/flatListExample.js";
import "react-complex-tree/lib/style.css";
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
const isDeeper = (pointer) => {
  return Object.keys(pointer) === null;
};
const plumbDepth = (pointer) => {};
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
  let parentPointer = "Elements";
  // TODO: traverse the tree, sort of in reverse of what was done to build.

  // while (true) {
  const elementsChildrenStructArray = [];
  // if (parentPointer === null) {
  let entries = Object.entries(pointer);
  console.log("the keys:");
  console.log(entries);

  const objectData = [];
  // each index in "levels" should have index, data, children right now
  let levels = [];
  for (let i = 0; i < entries.length; i += 1) {
    console.log("create entry for (0): " + entries[i]);
    levels.push(entries[i][0]);

    // TODO: Try using "maxDepth"
    // for (let j = 0; j < maxDepth; j += 1) {

    // console.log("create entry for (1): " + entries[i][j][0]);
    // }
  }
  objectData.push(levels);
  console.log("objectData:");
  console.log(objectData);
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

  console.log("massPropsTree");
  console.log(JSON.stringify(massPropsTree));
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
//   const massPropsTree = {
//     items: {
//       ...rootItem,
//       ...firstOrderItem,
//       ...elementsChildrenStructArray
//     }
//   };
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
  console.log("elementStruct, maxDepth:");
  console.log(elementStruct + ", " + maxDepth);
  buildUIStruct({ elementStruct, maxDepth });
  // const massPropsTree = buildMassPropsTree();
  // return <TheTree treeData={dqMultiLevelTree} />;
  return <p>Testing</p>;
}
