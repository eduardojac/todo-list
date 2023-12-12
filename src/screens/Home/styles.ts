import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  descriptionView: {
    flexDirection: "row",
    marginBottom: 10
  },
  criadasView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 80,
    borderBottomWidth: 0.2,
    marginLeft: 25,
    borderBottomColor: "#808080",
    marginTop: 30,
  },
  concluidasView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    height: 80,
    borderBottomWidth: 0.2,
    marginRight: 25,
    borderBottomColor: "#808080",
    marginTop: 30,
  },
  criadasText: {
    fontSize: 14,
    color: "#4EA8DE",
    fontFamily: "Inter_500Medium",
    marginRight: 10
  },
  concluidasText: {
    fontSize: 14,
    color: "#8284FA",
    fontFamily: "Inter_500Medium",
    marginRight: 10
  },
  backgroundQtd: {
    backgroundColor: '#333333',
    color: '#D9D9D9',
    borderRadius: 8,
    width: 25,
    height: 20,
    textAlign: 'center'
  },
  listEmptyView: {
    alignItems: 'center'
  },
  listEmptyImage: {
    marginTop: 35,
    marginBottom: 20
  },
  listEmptyTitle: {
    color: '#808080',
    fontSize: 14,
    fontFamily: 'Inter_600SemiBold'
  },
  listEmptyDescription: {
    color: '#808080',
    fontSize: 14,
    fontFamily: 'Inter_300Light'
  }
});
