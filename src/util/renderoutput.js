export const firstOutput = ({ element, currentElementFirstName }) => {
  // First routine
  const elementFirstName = element[0].split(".")[0];
  let showElementName;
  if (currentElementFirstName !== elementFirstName) {
    showElementName = elementFirstName;
    currentElementFirstName = elementFirstName;
  } else {
    showElementName = null;
  }
  // END First
  return { showElementName, elementFirstName, currentElementFirstName };
};
export const secondOutput = ({ element, currentElement2ndName }) => {
  const elementSecondName = element[0].split(".")[1];
  let showSecondColumn;
  if (currentElement2ndName !== elementSecondName) {
    showSecondColumn = elementSecondName;
    currentElement2ndName = elementSecondName;
  } else {
    showSecondColumn = null;
  }
  return { showSecondColumn, elementSecondName, currentElement2ndName };
};

export const thirdOutput = ({ element }) => {
  const thirdColumn = element[0].split(".")[2];
  const { units, val, prom_name } = element[1];
  return {
    thirdColumn,
    units,
    val,
    prom_name
  };
};

export const splitElements = ({ inputs }) => {
  let elementArray = [];
  let tableRowArray = [];
  let first = {
    showElementName: null,
    elementFirstName: null,
    currentElementFirstName: null
  };
  let second = {
    showSecondColumn: null,
    element2ndName: null,
    currentElement2ndName: null
  };
  let third = {};
  let currentElement2ndName = null;

  inputs.forEach((e) => {
    first = firstOutput({
      currentElementFirstName: first.currentElementFirstName,
      element: e
    });

    // First routine
    // const elementFirstName = e[0].split('.')[0];
    // let showElementName;
    // if (currentElementFirstName !== elementFirstName) {
    //     showElementName = elementFirstName;
    //     currentElementFirstName = elementFirstName;
    // } else {
    //     showElementName = null;
    // }
    // END First

    second = secondOutput({
      currentElement2ndName: second.currentElement2ndName,
      element: e
    });

    third = thirdOutput({
      element: e
    });

    // -- REDIRECT THIS STRUCTURE
    // const row = renderAsRow({
    //   showElementName: first.showElementName,
    //   showSecondColumn: second.showSecondColumn,
    //   thirdColumn: third.thirdColumn,
    //   units: third.units,
    //   prom_name: third.prom_name,
    //   val: third.val
    // });

    // tableRowArray.push(row);
  });

  return { elementArray, tableRowArray };
};
