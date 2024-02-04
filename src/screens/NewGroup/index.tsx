import { Highlight } from "@components/Highlight";
import { Container, Content, Icon } from "./styles";
import { Header } from "@components/Header";
import { Button } from "@components/Button";


export function NewGroup() {
    return (
        <Container>
            <Header showBackButton />

            <Content>
                <Icon />
                <Highlight
                    title="New Group"
                    subtitle="Create a new group to add people"
                />

                <Button title="Create" />

            </Content>

        </Container>
    )
}