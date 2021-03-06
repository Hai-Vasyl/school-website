export const DROPDOWN_TOGGLE = "DROPDOWN_TOGGLE"
export const AUTHFORM_TOGGLE = "AUTHFORM_TOGGLE"
export const MENU_PAGE_TOGGLE = "MENU_PAGE_TOGGLE"
export const CHAT_TOGGLE = "CHAT_TOGGLE"
export const CHAT_OPEN = "CHAT_OPEN"
export const WARNING_OPEN = "WARNING_OPEN"
export const WARNING_CLOSE = "WARNING_CLOSE"
export const NOTIFICATIONS_TOGGLE = "NOTIFICATIONS_TOGGLE"
export const RESET_TOGGLE = "RESET_TOGGLE"
export const MODIMAGE_OPEN = "MODIMAGE_OPEN"
export const MODIMAGE_CLOSE = "MODIMAGE_CLOSE"
export const LIGHTBOX_OPEN = "LIGHTBOX_OPEN"
export const LIGHTBOX_CLOSE = "LIGHTBOX_CLOSE"
export const LIGHTBOX_MOVE = "LIGHTBOX_MOVE"
export const LIGHTBOX_LIGHT_OPEN = "LIGHTBOX_LIGHT_OPEN"
export const LIGHTBOX_LIGHT_CLOSE = "LIGHTBOX_LIGHT_CLOSE"
export const NAVBAR_TOGGLE = "NAVBAR_TOGGLE"
export const NAVBAR_RESET = "NAVBAR_RESET"

export interface ToggleDropDown {
  type: typeof DROPDOWN_TOGGLE
}
export interface NavbarReset {
  type: typeof NAVBAR_RESET
}
export interface NavbarToggle {
  type: typeof NAVBAR_TOGGLE
}
export interface LightBoxLightOpen {
  type: typeof LIGHTBOX_LIGHT_OPEN
  payload: {
    image: string
    title: string
  }
}
export interface LightBoxLightClose {
  type: typeof LIGHTBOX_LIGHT_CLOSE
}
export interface ToggleAuthForm {
  type: typeof AUTHFORM_TOGGLE
}
export interface NotificationsToggle {
  type: typeof NOTIFICATIONS_TOGGLE
}
export interface ChatToggle {
  type: typeof CHAT_TOGGLE
}
export interface MenuPagetToggle {
  type: typeof MENU_PAGE_TOGGLE
}
export interface LightBoxOpen {
  type: typeof LIGHTBOX_OPEN
  payload: {
    imageId: string
    singleImg?: boolean
    onMove(isRight: boolean, imageId: string): any
    isLeft: boolean
    isRight: boolean
    handleEditImage(imageId: string): any
  }
}
export interface LightBoxClose {
  type: typeof LIGHTBOX_CLOSE
}
export interface LightBoxMove {
  type: typeof LIGHTBOX_MOVE
  payload: {
    imageId: string
    isLeft: boolean
    isRight: boolean
  }
}
export interface ChatOpen {
  type: typeof CHAT_OPEN
}
export interface ResetToggle {
  type: typeof RESET_TOGGLE
}
export interface WarningOpen {
  type: typeof WARNING_OPEN
  payload: {
    action(): any
    title: string
  }
}
export interface ModImageOpen {
  type: typeof MODIMAGE_OPEN
  payload: {
    id: string
    content: string
    type: string
    singleImg?: boolean
    onCreate?(): any
    onEdit?(): any
    onRemove?(): any
    isFile?: boolean
  }
}
export interface WarningClose {
  type: typeof WARNING_CLOSE
}
export interface ModImageClose {
  type: typeof MODIMAGE_CLOSE
}

export type ToggleReducerTypes =
  | ToggleDropDown
  | ResetToggle
  | ToggleAuthForm
  | NotificationsToggle
  | ChatToggle
  | ChatOpen
  | WarningOpen
  | WarningClose
  | ModImageOpen
  | ModImageClose
  | LightBoxOpen
  | LightBoxClose
  | LightBoxMove
  | MenuPagetToggle
  | LightBoxLightOpen
  | LightBoxLightClose
  | NavbarToggle
  | NavbarReset
