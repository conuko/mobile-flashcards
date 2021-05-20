import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import { Alert, Linking } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const NOTIFICATION_KEY = "MobileFlashcards:notifications";

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          console.log(status);
          if (status !== "granted") {
            Alert.alter(
              "No Notification Permission",
              "please go to setting and on notification permission manual",
              [
                { text: "cancel", onPress: () => console.log("cancel") },
                {
                  text: "allow",
                  onPress: () => Linking.openURL("app-settings"),
                },
              ],
              { cancelable: false }
            );
            return;
          }
          if (status === "granted") {
            Notifications.cancelAllScheduledNotificationsAsync();

            Notifications.setNotificationHandler({
              handleNotification: async () => ({
                shouldShowAlert: true,
                shouldPlaySound: true,
                shouldSetBadge: false,
              }),
            });
            Notifications.scheduleNotificationAsync({
              content: {
                title: "Remember to do a quiz today!",
              },
              trigger: {
                hours: 24,
                repeats: true,
              },
            });
            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
          }
        });
      }
    });
}

// I created this function exactly like we did it in the react native / local notifications course:
export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
}
