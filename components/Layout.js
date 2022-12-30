import Nav from "./Nav/Nav";

function Layout({ children, navData }) {
  return (
    <>
      <Nav navData={navData} />
      <main>{children}</main>
    </>
  );
}

export default Layout