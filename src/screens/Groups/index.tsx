import { ThemeProvider } from "styled-components";
import { Container, Title } from "./styles";

import theme from "@theme/index";

export function Groups() {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Title>Groups</Title>
            </Container>
        </ThemeProvider>
    )
}


