import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";
import { Outlet } from "react-router-dom";
import { Container } from "./Layout.styled";

export default function Layout() {
    return <Container>
        <AppBar />
        <Suspense>
            <Outlet/>
        </Suspense>
    </Container>
}