const FunctionGetHeight = (length) => {
  if (length === 1) {
    return "h-menu_one";
  } else if (length === 2) {
    return "h-menu_two";
  } else if (length === 3) {
    return "h-menu_three";
  } else if (length === 4) {
    return "h-menu_four";
  } else if (length === 5) {
    return "h-menu_five";
  } else if (length === 6) {
    return "h-menu_six";
  } else {
    return "";
  }
};

export default FunctionGetHeight;
