const ContainerDetails = ({ children, padding, width }) => {
  return (
    <main
      className={`${
        width ? width : "container"
      } mx-auto border border-gray-design  ${
        padding && "p-3"
      } rounded-lg -translate-y-16 bg-black-design`}
    >
      {children}
    </main>
  );
};
export default ContainerDetails;
