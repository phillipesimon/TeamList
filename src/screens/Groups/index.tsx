import { Header } from "@components/Header";
import { Container } from "./styles";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { useState } from "react";
import { FlatList } from "react-native";
import { ListEmpity } from "@components/ListEmpity/inedx";

export function Groups() {
    const [groups, setGroups] = useState(['Simon'])


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
                contentContainerStyle={groups.length === 0 && { flex: 1 }}
                ListEmptyComponent={() => <ListEmpity message="This list is empity" />}

            />

        </Container>
    )
}


