import { TouchableOpacityProps } from 'react-native'
import { Container, FilterStyleProps, Title } from './styles'

type Props = TouchableOpacityProps &
    FilterStyleProps & {
        title: string
    }

export function Filter({ title, isActive = false, ...rest }: Props) {
    return (
        <Container isActive={false} {...rest}>
            <Title>{title}</Title>
        </Container>
    )
}
