import { FlatList } from "react-native";
import { useState } from "react";

import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButoonIcon";

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { PlayerCard } from "@components/PlayerCard/indes";

export function Players() {

    const [team, setTeam] = useState('TEAM A')
    const [players, setPlayers] = useState(['Simon', "Phillipe", "Martins", "Costa"])

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


            <HeaderList>

                <FlatList
                    data={['TEAM A', 'TEAM B']}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Filter
                            title={item}
                            isActive={item === team}
                            onPress={() => setTeam(item)}
                        />
                    )}
                    horizontal
                />

                <NumberOfPlayers>
                    {players.length}
                </NumberOfPlayers>
            </HeaderList>

            <FlatList
                data={players}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <PlayerCard
                        name={item}
                        onRemove={() => { }}
                    />
                )}
            />
        </Container>
    )
}