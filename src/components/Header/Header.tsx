import { Text, View } from "react-native";

type Props = {
  title: string
}

const Header = ({ title }: Props) => (
  <View style={{ backgroundColor: 'white', paddingVertical: 25, justifyContent: 'center', alignItems: 'center' }}>
    <Text>{title}</Text>
  </View>
)

export default Header;
