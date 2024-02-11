import AsyncStorage from '@react-native-async-storage/async-storage'
import { groupGetAll } from './groupGetAll'
import { GROUP_COLLECTION, PLAYER_COLLECTION } from '@storage/storageConfig'

export async function groupRemoveByName(groupDeleted: string) {
    try {
        const storageGroups = await groupGetAll()

        const groups = storageGroups.filter((g) => g !== groupDeleted)

        await AsyncStorage.setItem(
            GROUP_COLLECTION,
            JSON.stringify(storageGroups)
        )
        await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDeleted}`)
    } catch (error) {
        throw error
    }
}
