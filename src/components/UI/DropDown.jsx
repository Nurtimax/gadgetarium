import { Dialog } from "@mui/material";

const DropDown = ({ children }) => {
  return (
    <Dialog>
      {/* <ContainerModal propsWidth={propsWidth} {...props}>
        {children}
      </ContainerModal> */}
      <div>{children}</div>
    </Dialog>
  );
};

export default DropDown;

// const ContainerModal = styled(DialogContent)((props) => ({
//   width: props.propsWidth || "20px",
//   height: props.height || "20px",
//   background: "#FFFFFF",
//   boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
//   borderRadius: "4px",
// }));
