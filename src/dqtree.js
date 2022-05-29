export default class DQTree {
  // indexRegistry = [];
  flattenedList = null;
  jsonTree = null;
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
    //*************************************
    // TODO: EXECUTE TEST NOT BEING CALLED? GEt unique index numbers
    // *******************************//
    // this.flatList = flatList;
    // this.jsonTree = jsonTree;
    const flattenedList = this.flattenObject(inputObject);
    const { elementStruct, maxDepth } = this.splitElements(flattenedList);
    this.jsonTree = elementStruct;
    this.maxDepth = maxDepth;
    this.initialize(flattenedList, elementStruct, maxDepth);
  }

  initialize = (flattenedList, elementStruct, maxDepth) => {
    this.flattenedList = flattenedList;
    this.jsonTree = elementStruct;
    this.maxDepth = maxDepth;
  };

  findMatchInFlatlist = (arrayElement) => {
    console.log(`parent: ${this.parent}, element: ${this.element}`);
    // let indexCount = 0;
    const splitStructure = arrayElement.split(".");
    if (this.parent === null) {
      return splitStructure[0] === this.element;
    } else {
      let foundMatch = false;
      for (let i = 0; i < splitStructure.length - 1; i += 1) {
        if (
          splitStructure[i] === this.parent &&
          splitStructure[i + 1] === this.element
        )
          foundMatch = true;
      }
      return (this.arrayCount += 1);
    }
  };

  getNumericalIndex = (parent, element) => {
    // const array1 = [5, 12, 8, 130, 44];

    // const isLargeNumber = (element) => element > 13;

    // console.log(array1.findIndex(isLargeNumber));
    // expected output: 3
    this.arrayCount = -1;

    return this.flattenedList.findIndex(this.findMatchInFlatlist, {
      parent,
      element
    });
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
        parentPointer = parentPointer[pointer];
      }
    });
    // console.log("masterObject:");
    // console.log(masterObject);
    return { elementStruct, maxDepth };
  };

  doesIndexExist = (newIndex) => {
    return this.indexRegistry.includes(newIndex);
  };
  generateUniqueIndex = (indexName) => {
    if (!this.doesIndexExist(indexName)) {
      return indexName;
    }
    let count = 1;
    while (!this.doesIndexExist(`${indexName}_${count}`)) {
      count += 1;
      // prevent endless loop
      if (count > 500) {
        break;
      }
    }
    return `${indexName}_${count}`;
  };
  getUiTree = () => {
    return this.uiTree;
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
    childrenNames.forEach((c) => {
      childrenIndices(this.getNumericalIndex(null, c));
    });
    return childrenIndices;
  };
  executeTest = () => {
    console.log("executeTest");
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
    this.printUiTree();
    // console.log(this.uiTree);
  };

  // TODO: Use this to create nodes...
  // if [1] is empty array, then node has no children.

  // TODO LATER: filter and replace with `_${count}` for duplicate indexes

  outputKeyValue = (k, v) => {
    console.log(`${k} : ${JSON.stringify(this.filterNames(v))}`);
  };

  // use as argument to traverse
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
