import { Header } from "@components/Header";
import { Container } from "./styles";
import { Highlight } from "@components/Highlight";


export function Players() {
    return (
        <Container>
            <Header showBackButton />
            <Highlight
                title="New Team"
                subtitle="Add players and separate teams"
            />

        </Container>
    )
}