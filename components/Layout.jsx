import Nav from "./Nav"

function Layout({ children, navData }) {
  return (
    <>
      <Nav navData={navData} />
      <main>{children}</main>
    </>
  );
}

export default Layout