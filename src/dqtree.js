export default class DQTree {
  numericalIndexMap = [];
  indexAssignmentCounter = 1;
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
    this.assignAllIndices(flattenedList);
    this.jsonTree = elementStruct;
    this.maxDepth = maxDepth;
    this.initializeUiTree();
    // TODO: This is redundantly assigning indices to first level
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
    // this.traverse(this.jsonTree, this.assignAllIndices);
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
      // let foundMatch = false;
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

  isAlreadyAssigned = (elementName, parentName = null) => {
    return this.lookupIndex(elementName, parentName) !== null;
  };

  lookupNameByIndex = (elementIndex) => {
    if (elementIndex === null) {
      return null;
    }

    for (let i = 0; i < this.numericalIndexMap.length; i += 1) {
      const thisIndex = this.numericalIndexMap[i].index;
      if (thisIndex === elementIndex) {
        return this.numericalIndexMap[i].elementName;
      }
    }
    console.log("DIDN'T FIND A MATCH");
    return null;
  };

  lookupIndex = (elementName, parentName = null) => {
    if (parentName === null) {
      for (let i = 0; i < this.numericalIndexMap.length; i += 1) {
        if (this.numericalIndexMap[i].elementName === elementName) {
          return this.numericalIndexMap[i].index;
        }
      }
      return null;
    } else {
      for (let i = 0; i < this.numericalIndexMap.length; i += 1) {
        const parentIndex = this.numericalIndexMap[i].parent;
        const currentElementParentName = this.lookupNameByIndex(parentIndex);
        if (
          this.numericalIndexMap[i].elementName === elementName &&
          currentElementParentName === parentName
        ) {
          return this.numericalIndexMap[i].index;
        }
      }
    }
  };

  assignNumericalIndex = ({ element, parentIndex, depth }) => {
    // TODO: ??? Check if exists
    const newIndex = this.indexAssignmentCounter;
    this.indexAssignmentCounter += 1;
    this.numericalIndexMap.push({
      index: newIndex,
      elementName: element,
      parent: parentIndex,
      depth
    });
    return newIndex;
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
  // TODO: Fix this -- indices have already been assigned
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

  assignAllIndices = (flattenedList) => {
    flattenedList.forEach((el) => {
      // const currentMap = [];
      const substrArray = el.split(".");
      // const mapIndicesToThisSubstr = []
      for (let i = 0; i < substrArray.length; i += 1) {
        const element = substrArray[i];
        let parentIndex = null;
        if (i !== 0) {
          if (i === 1) {
            parentIndex = this.lookupIndex(substrArray[i - 1], null);
            console.log("parentIndex");
            console.log(parentIndex);
          } else {
            const nameOfParent = substrArray[i - 1];
            const nameOfGrandparent = substrArray[i - 2];
            // console.log('parent, grandparent: ');
            // console.log(nameOfParent);
            // console.log(nameOfGrandparent)
            parentIndex = this.lookupIndex(nameOfParent, nameOfGrandparent);
            // console.log(`this element is ${substrArray[i]}, and its parent is ${parentIndex}`)
          }

          this.assignNumericalIndex({ element, parentIndex, depth: i });
        } else {
          if (!this.isAlreadyAssigned(element)) {
            const newIndex = this.assignNumericalIndex({
              element,
              parentIndex: null,
              depth: 0
            });
          } else {
            console.log(
              " else -- find element index test -- Not yet implemented"
            );
            // const parentIndex = this.findElementIndexTest(element);
          }
        }
      }
    });
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
