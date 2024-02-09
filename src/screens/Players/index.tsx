import { useState } from 'react'
import { Alert, FlatList } from 'react-native'

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
import { AppError } from '@utils/AppError'
import { playerAddByGroup } from '@storage/player/playerAddByGroup'
import { playersGetByGroup } from '@storage/player/playersGetByGroup'
import { PlayerStorageDTO } from '@storage/player/PlayerStorageDTO'
import { playersGetByGroupAndTeam } from '@storage/player/playerGetByGroupAndTeam'

type RouteParams = {
    group: string
}

export function Players() {
    const [newPlayerName, setNewPlayerName] = useState('')
    const [team, setTeam] = useState('TEAM A')
    const [players, setPlayers] = useState<PlayerStorageDTO[]>([])

    const route = useRoute()

    const { group } = route.params as RouteParams

    async function handleAddPlayer() {
        if (newPlayerName.trim().length === 0) {
            return Alert.alert('New Player', 'Enter player name')
        }

        const newPlayer = {
            name: newPlayerName,
            team,
        }

        try {
            await playerAddByGroup(newPlayer, group)
            const players = await playersGetByGroup(group)
            console.log(players)
        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert('New Player', error.message)
            } else {
                Alert.alert('New Player', 'Failed to create new player!')
                console.log(error)
            }
        }
    }

    async function fetchPlayersByTeam() {
        try {
            const playersByTeam = await playersGetByGroupAndTeam(group, team)
            setPlayers(playersByTeam)
        } catch (error) {
            console.log(error)
            Alert.alert('People', 'Failed to fetch players')
        }
    }

    return (
        <Container>
            <Header showBackButton />
            <Highlight
                title={group}
                subtitle="Add players and separate teams"
            />
            <Form>
                <Input
                    onChangeText={setNewPlayerName}
                    placeholder="Username"
                    autoCorrect={false}
                />
                <ButtonIcon icon="add" onPress={handleAddPlayer} />
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
