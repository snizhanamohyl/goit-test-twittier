import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "components/AppBar/AppBar";
import { Container } from "./Layout.styled";

export default function Layout() {
    return <Container>
        <AppBar />
        <Suspense>
            <Outlet/>
        </Suspense>
    </Container>
}