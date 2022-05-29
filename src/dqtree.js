export default class DQTree {
  jsonTree = null;
  uiTree = {
    items: {
      //     ...rootItem,
      //     ...firstOrderItem,
      //     ...elementsChildrenStructArray
      //   }
    }
  };
  constructor(jsonTree) {
    this.jsonTree = jsonTree;
  }

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
        // ...firstOrderItem
        // ...elementsChildrenStructArray
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
      console.log("traversing");
      func.apply(this, [i, obj[i]]);
      if (obj[i] !== null && typeof obj[i] === "object") {
        // step down
        this.traverse(obj[i], func);
      }
    }
  };

  executeTest = () => {
    console.log("executeTest");
    this.initializeUiTree();

    const children = Object.keys(this.jsonTree);

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
