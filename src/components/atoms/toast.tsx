import * as Notifications from 'expo-notifications';

// ... dentro do seu componente ou serviço ...

interface ToastProps {
  title?: string;
  body: string;
}
export function Toast({ title, body }: ToastProps) {
  const showToast = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title,
        body,
      },
      trigger: null,
    });
  };

  return showToast();
}
