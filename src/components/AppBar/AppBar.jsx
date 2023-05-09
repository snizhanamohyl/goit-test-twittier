import { Header, NavItem, NavWrap } from "./AppBar.styled";

export default function AppBar() {
    return <Header>
        <NavWrap>
            <NavItem to='/'>Home</NavItem>
            <NavItem to='/tweets'>Tweets</NavItem>
        </NavWrap>
    </Header>
}