import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Input } from '@components/Input'
import { Container, Content, Icon } from './styles'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { groupCreate } from '@storage/group/groupCreate'
import { AppError } from '@utils/AppError'
import { Alert } from 'react-native'

export function NewGroup() {
    const [group, setGroup] = useState('')

    const navigation = useNavigation()

    async function handleNew() {
        try {
            if (group.trim().length === 0) {
                return Alert.alert('New Group', 'Enter team name')
            }

            await groupCreate(group)
            navigation.navigate('players', { group })
        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert('New Group', error.message)
            } else {
                Alert.alert('New Group', 'Failed to create new group!')
                console.log(error)
            }
        }
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
