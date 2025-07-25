export interface IconProps {
    width: string;
    height: string;
}

export interface CommonGenericIconProps {
    width: string;
    height: string;
    imageUrl?: string;
    backgroundPosition?: string;
    filter?: string;
}

export interface ModalHeaderProps {
    text: string;
}

export interface MessengerModalProps {
    isMessengerOpen: boolean;
}

export interface ChatItemProps {
    id?: string;
    isRead?: boolean;
    isOnline?: boolean;
    chatName?: string;
    chatMessage?: string;
    isNotificationOn?: boolean;
    chatImage?: string;
}
