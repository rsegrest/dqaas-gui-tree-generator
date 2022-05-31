import {
  UncontrolledTreeEnvironment,
  Tree,
  StaticTreeDataProvider
} from "react-complex-tree";
import { dqInputObject } from "./resources/sampleApiResponse";
// import { dqMultiLevelTree } from "./resources/complextree.js";
import { brokenTree } from "./resources/brokenTree.js";
import "react-complex-tree/lib/style.css";
import DQTree from "./dqtree";

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
  let dqt = new DQTree(dqInputObject);
  const massPropsTree = dqt.getUiTree();
  console.log(dqt.getNumericalIndexMap());
  // console.log(massPropsTree);
  return <p>Testing</p>;
  // return <TheTree treeData={massPropsTree} />;
}
