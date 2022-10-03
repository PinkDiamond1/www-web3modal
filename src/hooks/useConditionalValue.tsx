export default function useConditionalValue<T extends string>(
  className: T | T[],
  condition: boolean[] | boolean,
) {
  if (
    typeof className === "string" &&
    typeof condition === "boolean" &&
    condition
  ) {
    return className;
  } else if (Array.isArray(className) && Array.isArray(condition)) {
    const index = condition.findIndex((c) => c);
    if (index < 0) {
      // throw new Error("No matching value");
    }

    return className[index];
  }

  throw new Error("Invalid useConditionalClass arguments");
}
