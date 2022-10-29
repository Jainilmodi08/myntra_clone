require("dotenv").config();
/**
 * @param {*} path
 * @returns
 */

const getCurrentSection = path => {
  let section = "";
  if (path.pathname === "/") {
    section = "men";
  } else {
    section = "dashboard";
  }
  return section;
};


const isItemAdded = (list, id) => {
  if (list) {
    return list.find(item => {
      return item?._id === id;
    });
  }
  return false;
};

const isFilterSelected = (list, id) => {
  if (list) {
    return list.find(item => {
      return item === id;
    });
  } else {
    return false;
  }
};


export {
  getCurrentSection,
  isItemAdded,
  isFilterSelected,
};
