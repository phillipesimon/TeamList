import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Input } from '@components/Input'
import { Container, Content, Icon } from './styles'
import { useNavigation } from '@react-navigation/native'

export function NewGroup() {
    const navigation = useNavigation()

    function handleNew() {
        navigation.navigate('players', { group: 'Rocket' })
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
                <Input placeholder="Team name" />
                <Button title="Create" onPress={handleNew} />
            </Content>
        </Container>
    )
}
