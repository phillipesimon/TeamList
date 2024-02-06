import { Header } from "@components/Header";
import { Container, Form } from "./styles";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButoonIcon";
import { Input } from "@components/Input";


export function Players() {
    return (
        <Container>
            <Header showBackButton />
            <Highlight
                title="New Team"
                subtitle="Add players and separate teams"
            />
            <Form>
                <Input placeholder="Username" autoCorrect={false} />
                <ButtonIcon icon="add" />
            </Form>

        </Container>
    )
}