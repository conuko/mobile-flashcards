import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import React, { useState, useEffect, useRef } from "react";
import { Text, View, Button, Platform, Alert, Linking } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

/* --> how to create and use expo notifications:
--> I followed the way we did this in the react native / local notifications course!
https://knowledge.udacity.com/questions/374521

Other resources I used:
https://github.com/udacity/reactnd-UdaciFitness-complete/commit/63778456f674355e40044c673f4b966ebd446866
https://docs.expo.io/versions/latest/sdk/notifications/?redirected
https://docs.expo.io/versions/latest/sdk/notifications/#schedulenotificationasyncnotificationrequest-notificationrequestinput-promisestring
https://knowledge.udacity.com/questions/374521
*/

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
                seconds: 60,
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
