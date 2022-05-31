export default class DQTree {
  numericalIndexMap = [];
  flattenedList = null;
  jsonTree = null;
  initializationComplete = false;
  maxDepth = 0;
  arrayCount = 0;
  uiTree = {
    items: {
      //     ...rootItem,
      //     ...firstOrderItem,
      //     ...elementsChildrenStructArray
      //   }
    }
  };
  constructor(inputObject) {
    this.initializationComplete = false;
    const flattenedList = this.flattenObject(inputObject);
    console.log("flattenedList");
    console.log(flattenedList);
    const { elementStruct, maxDepth } = this.splitElements(flattenedList);
    this.jsonTree = elementStruct;
    this.maxDepth = maxDepth;
    this.initialize(flattenedList, elementStruct, maxDepth);
  }

  initialize = (flattenedList, elementStruct, maxDepth) => {
    this.flattenedList = flattenedList;
    this.jsonTree = elementStruct;
    this.maxDepth = maxDepth;
    this.initializeUiTree();
    const children = this.getFirstOrderChildren();
    console.log("children");
    console.log(children);
    const firstOrderItem = this.createElementsItem(children);

    this.uiTree = {
      items: {
        ...this.uiTree.items,
        ...firstOrderItem
      }
    };

    this.traverse(this.jsonTree, this.expandToNode);
    this.traverse(this.jsonTree, this.assignAllIndices);
    this.printUiTree();
    this.initializationComplete = true;
    // console.log('initialization complete')
  };

  findMatchInFlatlist(e, index) {
    const { element, parent } = this;
    const splitStructure = e.split(".");

    if (parent === null) {
      return splitStructure[0] === element;
    } else {
      let foundMatch = false;
      for (let i = 0; i < splitStructure.length - 1; i += 1) {
        console.log(`looping: ${i}`);
        if (splitStructure[i] === parent && splitStructure[i + 1] === element)
          // foundMatch = true;
          return index;
      }
      // TODO: Is this right?
      return (this.arrayCount += 1);
    }
  }

  assignNumericalIndex = (element, parent = null) => {
    console.log(
      `assignNumericalIndex :: element: ${element}, parent: ${parent}`
    );
    // const array1 = [5, 12, 8, 130, 44];

    // const isLargeNumber = (element) => element > 13;

    // console.log(array1.findIndex(isLargeNumber));
    // expected output: 3
    this.arrayCount = -1;

    let depth = 0;
    // if (parent) {
    // DEPTH IS GT 0
    // }

    const idx = this.flattenedList.findIndex(this.findMatchInFlatlist, {
      element,
      parent
    });
    const wtf = this.doesIndexExist(idx);
    console.log("does index exist?:");
    console.log(wtf);

    this.numericalIndexMap.push({
      index: idx,
      element,
      parent,
      depth
    });
    return idx;
  };

  flattenObject = (input) => {
    const output = input.map((element) => element[0]);
    return output;
  };

  splitElements = (input) => {
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
        // console.log('pointer, parentPointer: ');
        // console.log(pointer);
        // console.log(parentPointer);
        // this.assignNumericalIndex(pointer, parentPointer);
        parentPointer = parentPointer[pointer];
      }
    });
    console.log("elementStruct:");
    console.log(elementStruct);
    return { elementStruct, maxDepth };
  };

  doesIndexExist = (newIndex) => {
    this.numericalIndexMap.forEach((el) => {
      if (el.index === newIndex) {
        return true;
      }
    });
    // return this.indexRegistry.includes(newIndex);
    return false;
  };
  // generateUniqueIndex = (indexName) => {
  //   if (!this.doesIndexExist(indexName)) {
  //     return indexName;
  //   }
  //   let count = 1;
  //   while (!this.doesIndexExist(`${indexName}_${count}`)) {
  //     count += 1;
  //     // prevent endless loop
  //     if (count > 500) {
  //       break;
  //     }
  //   }
  //   return `${indexName}_${count}`;
  // };
  getUiTree = () => {
    if (this.initializationComplete) {
      return this.uiTree;
    }
    return null;
  };
  getNumericalIndexMap = () => {
    return this.numericalIndexMap;
  };
  printUiTree = () => {
    console.log(this.uiTree);
  };

  createElementsItem = (children) => {
    return {
      Elements: {
        index: "Elements",
        canMove: true,
        hasChildren: true,
        children,
        data: "Elements",
        canRename: true
      }
    };
  };
  initializeUiTree = () => {
    const rootItem = this.createAndAddNode({
      idx: "root",
      hasChildren: true,
      children: ["Elements"],
      data: "root",
      dontAdd: true
    });
    this.uiTree = {
      items: {
        root: rootItem
      }
    };
  };

  // constructor() {}
  setUiTree = (newTree) => {
    this.uiTree = newTree;
  };
  setJsonTree = (newTree) => {
    this.jsonTree = newTree;
  };

  traverse = (obj, func) => {
    for (let i in obj) {
      // console.log("traversing");
      func.apply(this, [i, obj[i]]);
      if (obj[i] !== null && typeof obj[i] === "object") {
        // step down
        this.traverse(obj[i], func);
      }
    }
  };
  getFirstOrderChildren = () => {
    const childrenNames = Object.keys(this.jsonTree);
    const childrenIndices = [];
    // childrenNames.forEach((c) => {
    //   childrenIndices.push(this.getNumericalIndex(c));
    // });
    for (let i = 0; i < childrenNames.length; i += 1) {
      childrenIndices.push(this.assignNumericalIndex(childrenNames[i]));
    }
    return childrenIndices;
  };
  // TODO: Use this to create nodes...
  // if [1] is empty array, then node has no children.

  // TODO LATER: filter and replace with `_${count}` for duplicate indexes

  outputKeyValue = (k, v) => {
    console.log(`${k} : ${JSON.stringify(this.filterNames(v))}`);
  };

  // use as argument to traverse
  assignAllIndices = (k, v) => {
    console.log("key, value: ");
    console.log(k);
    console.log(v);
    this.assignNumericalIndex(k);
  };
  expandToNode = (k, v) => {
    // TODO: Need to get a unique index before coming up with "children's names"
    // TODO: Need to register index names
    const childrensNames = this.filterNames(v);
    let hasChildren = false;
    if (childrensNames.length > 0) {
      hasChildren = true;
    }
    this.createAndAddNode({
      idx: k,
      data: k,
      hasChildren,
      children: childrensNames
    });
  };

  // TODO : CreateNode and AddNode should be separated
  createAndAddNode = ({ idx, data, hasChildren, children, dontAdd }) => {
    const newNode = {
      index: idx,
      canMove: true,
      hasChildren,
      data,
      canRename: true
    };
    if (hasChildren) {
      newNode["children"] = children;
    }
    if (!dontAdd) {
      this.uiTree["items"][idx] = newNode;
    }
    return newNode;
  };

  filterNames = (obj) => {
    return Object.keys(obj);
  };
}
