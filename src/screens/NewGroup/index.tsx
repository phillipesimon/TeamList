import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Input } from '@components/Input'
import { Container, Content, Icon } from './styles'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'

export function NewGroup() {
    const [group, setGroup] = useState('')

    const navigation = useNavigation()

    function handleNew() {
        navigation.navigate('players', { group })
    }

    return (
        <Container>
            <Header showBackButton />

            <Content>
                <Icon />
                <Highlight
                    title="New Group"
                    subtitle="Create a new group to add people"
                />
                <Input placeholder="Team name" onChangeText={setGroup} />
                <Button title="Create" onPress={handleNew} />
            </Content>
        </Container>
    )
}
