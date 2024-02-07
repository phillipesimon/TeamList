import { useState } from 'react'
import { FlatList } from 'react-native'

import { ButtonIcon } from '@components/ButoonIcon'
import { Filter } from '@components/Filter'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Input } from '@components/Input'

import { Button } from '@components/Button'
import { ListEmpty } from '@components/ListEmpty/inedx'
import { PlayerCard } from '@components/PlayerCard/indes'
import { Container, Form, HeaderList, NumberOfPlayers } from './styles'
import { useRoute } from '@react-navigation/native'

type RouteParams = {
    group: string
}

export function Players() {
    const [team, setTeam] = useState('TEAM A')
    const [players, setPlayers] = useState([])

    const route = useRoute()

    const { group } = route.params as RouteParams

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
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                        <Filter
                            title={item}
                            isActive={item === team}
                            onPress={() => setTeam(item)}
                        />
                    )}
                    horizontal
                />

                <NumberOfPlayers>{players.length}</NumberOfPlayers>
            </HeaderList>

            <FlatList
                data={players}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <PlayerCard name={item} onRemove={() => {}} />
                )}
                ListEmptyComponent={() => (
                    <ListEmpty message="This list is empity" />
                )}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={[
                    { paddingBottom: 100 },
                    players.length === 0 && { flex: 1 },
                ]}
            />
            <Button title="Remove" type="SECONDARY" />
        </Container>
    )
}
