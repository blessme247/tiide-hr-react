import { LOAD_NOTIFICATIONS } from "./NotificationMgt.Types"

export const loadNotification = (notificationsArray) => dispatch => {
  dispatch({ action: LOAD_NOTIFICATIONS, payload: notificationsArray })
}