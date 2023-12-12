import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#262626',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        marginHorizontal: 15
        
    
    },
    taskLogo: {
        height: 30,
        width: 30,
        marginLeft: 20
    },
    taskName: {
        flex: 1,
        color: '#F2F2F2',
        fontFamily: 'Inter_300Light',
        marginVertical: 10,
        marginHorizontal: 10,
    },
    taskNameDecorated: {
        flex: 1,
        color: '#F2F2F2',
        fontFamily: 'Inter_300Light',
        marginVertical: 10,
        marginHorizontal: 10,
        textDecorationLine: 'line-through'
    },
    trashLogo: {
        width: 17,
        height: 21,
        marginRight: 20
    },

})