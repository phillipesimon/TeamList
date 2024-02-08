import { Button } from '@components/Button'
import { GroupCard } from '@components/GroupCard'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { ListEmpty } from '@components/ListEmpty/inedx'
import { useCallback, useState } from 'react'
import { FlatList } from 'react-native'
import { Container } from './styles'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { groupGetAll } from '@storage/group/groupGetAll'

export function Groups() {
    const [groups, setGroups] = useState<string[]>([])

    const navigation = useNavigation()

    function handleNavigation() {
        navigation.navigate('new')
    }

    async function fetchGroups() {
        try {
            const data = await groupGetAll()
            setGroups(data)
        } catch (error) {
            console.log(error)
        }
    }

    useFocusEffect(
        useCallback(() => {
            fetchGroups()
        }, [])
    )

    return (
        <Container>
            <Header />
            <Highlight title="Team" subtitle="Play with your team" />

            <FlatList
                data={groups}
                keyExtractor={(item) => item}
                renderItem={({ item }) => <GroupCard title={item} />}
                contentContainerStyle={groups.length === 0 && { flex: 1 }}
                ListEmptyComponent={() => (
                    <ListEmpty message="This list is empity" />
                )}
                showsVerticalScrollIndicator={false}
            />
            <Button title="Create a new team" onPress={handleNavigation} />
        </Container>
    )
}
