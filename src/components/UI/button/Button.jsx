import { styled } from '@mui/material'
import MuiButton from '@mui/material/Button'

const  Button  =({ children, disabled, onClick, variant, ...props })=> {
   return (
      <ButtonStyled
         onClick={onClick}
         disabled={disabled}
         variant={variant}
         {...props}
      >
         {children}
      </ButtonStyled>
   )
}
export default Button

const ButtonStyled = styled(MuiButton)`
   text-transform: none;
   font-weight: 500;
   font-size: 14px;
   line-height: 16.95px;
   border-radius: 4px;
   color: #ffffff;  
   padding: 12px 19px;
   width: ${(props) => (props.width ? props.width : '131px')};
   height: ${(props) => (props.height ? props.height : '')};
   white-space: nowrap;
   &.MuiButton-contained {s
      background: ${({ bgcolor }) => bgcolor || '#E20FBE'};
      font-size: 14px;
      border: none;
      color: #ffffff;
      &:disabled {
         background-color: rgba(0, 0, 0, 0.12);
         color: #6a6363;
         box-shadow: none;
      }
      &:hover {
         background: ${({ bgcolor }) => (bgcolor ? '#2fc509' : '#CB11AB')};
         color: #ffffff;
      }
      &:active {
         background: ${({ bgcolor }) => (bgcolor ? '#2fc509' : '#E313BF')};
      }
   }
   &.MuiButton-outlined {
      color: ${(props) => (props.bgcolor ? 'gray' : '#E313BF')};
      border-color: ${(props) => props.bgcolor || '#E313BF'};
   }
   &:hover {
      background: ${(props) => props.bgcolor || '#CB11AB'};
      color: #ffffff;
   }
   &:active {
      background: ${({ bgcolor }) => (bgcolor ? '#969696' : '#E313BF')};
   }
`