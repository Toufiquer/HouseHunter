/* eslint-disable react/prop-types */
const DisplayCenter = ({ children, border = true }) => {
  const styleBorder = `${
    border &&
    "border border-solid border-current rounded-lg p-4 min-w-[480px] min-h-[300px] flex items-center justify-center"
  }  `;
  return (
    <>
      <div className="flex items-center justify-center w-full min-h-screen">
        <div className={styleBorder}>{children}</div>
      </div>
    </>
  );
};

export default DisplayCenter;
