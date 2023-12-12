import { View, TextInput, TouchableOpacity, Image } from "react-native";
import plus from '../../../assets/plus.png';
import { styles } from "./styles";

type Props = {
    value: string;
    onChangeText: React.Dispatch<React.SetStateAction<string>>;
    onSubmit: () => void;
}

export default function Form({value, onChangeText, onSubmit}: Props) {
    return (
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Adicione uma nova tarefa"
                placeholderTextColor="#808080"
                value={value}
                onChangeText={onChangeText}
                onSubmitEditing={onSubmit}
            />
            <TouchableOpacity style={styles.button} onPress={onSubmit}>
                <Image style={styles.buttonImage} source={plus} />
            </TouchableOpacity>
        </View>
    )
}