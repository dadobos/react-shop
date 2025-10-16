
const Capitalize = ({ children, text })=> {
  // ensure we always work with a string
  const value = (children ?? "").toString();
  if (!value) return null;

  const capitalized = value.replace(/\b\w/g, (c) => c.toUpperCase());
  return <>{capitalized}</>;
}

export default Capitalize