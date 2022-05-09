export const isDiffrentUtil = (target: any, comparison: any) => {
  if (target !== comparison) {
    return true;
  }

  return false;
};

export const isSameUtil = (target: any, comparison: any) => {
  if (target === comparison) {
    return true;
  }

  return false;
};
