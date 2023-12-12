import { TouchableOpacity } from "react-native";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";

import check from '../../../assets/check.png';
import uncheck from '../../../assets/uncheck.png';
import trash from '../../../assets/trash.png';

type props = {
    name: string;
    checked: boolean;
    onFinished: () => void;
    onRemove: () => void;
}

export default function Task({ name, checked, onFinished, onRemove }: props) {
    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={onFinished}>
                {checked ? (
                    <Image style={styles.taskLogo} source={check} />
                ) :
                    <Image style={styles.taskLogo} source={uncheck} />
                }
            </TouchableOpacity>

            <Text style={checked ? styles.taskNameDecorated : styles.taskName}>{name}</Text>

            <TouchableOpacity onPress={onRemove}>
                <Image style={styles.trashLogo} source={trash} />
            </TouchableOpacity>

        </View>

    )

}