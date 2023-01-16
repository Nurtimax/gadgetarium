import { Container, styled, Typography } from "@mui/material";
import { headerTitle } from "../../utils/constants";

const Tables = () => {
  return (
    <Container>
      <HeaderContainer>
        {headerTitle.map((title) => (
          <HeaderTitle variant="h3" component="h1" key={title}>
            {title}
          </HeaderTitle>
        ))}
      </HeaderContainer>
    </Container>
  );
};

export default Tables;

const HeaderContainer = styled("div")`
  height: 40px;
  background: rgba(56, 66, 85, 0.9);
`;

const HeaderTitle = styled(Typography)`
  font-family: "Inter";
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
`;
