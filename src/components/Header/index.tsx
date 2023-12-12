import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import rocket from '../../../assets/rocket.png';

export default function Header() {
    return (
        <View style={styles.header}>
            <View style={styles.headerLogo}>
                <Image style={styles.rocketLogo} source={rocket} />
                <Text style={styles.toText}>to</Text>
                <Text style={styles.doText}>do</Text>
            </View>

        </View>
    )
}