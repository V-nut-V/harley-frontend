function OutSideLink({ children, ...props }) {
  return <a {...props} target="_blank">{children}</a>;
}

export default OutSideLink;
