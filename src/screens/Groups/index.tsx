import { Button } from '@components/Button'
import { GroupCard } from '@components/GroupCard'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { ListEmpty } from '@components/ListEmpty/inedx'
import { useState } from 'react'
import { FlatList } from 'react-native'
import { Container } from './styles'
import { useNavigation } from '@react-navigation/native'

export function Groups() {
    const [groups, setGroups] = useState([])

    const navigation = useNavigation()

    function handleNavigation() {
        navigation.navigate('new')
    }

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
