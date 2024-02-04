import { Header } from "@components/Header";
import { Container } from "./styles";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { useState } from "react";
import { FlatList } from "react-native";

export function Groups() {
    const [groups, setGroups] = useState(['Dark', 'Simon', 'Phillipe'])


    return (
        <Container>
            <Header />
            <Highlight
                title="Team"
                subtitle="Play with your team"
            />

            <FlatList
                data={groups}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <GroupCard title={item} />
                )}

            />

        </Container>
    )
}


