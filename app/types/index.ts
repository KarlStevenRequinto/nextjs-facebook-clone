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

export interface SearchBarType {
    placeholder?: string;
}

export interface menuHeaderProps {
    title: string;
}

export interface ActionBtnProps {
    title: string;
    icon?: React.ReactNode;
    onClick?: () => void;
    actionBtnStyle?: string;
}
