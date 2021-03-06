import React, { useEffect, useState } from "react"
// @ts-ignore
import styles from "../styles/chat.module"
import keyWords from "../modules/keyWords"
import { useSelector } from "react-redux"
import { RootStore } from "../redux/store"
import Toolbar from "./Toolbar"
import {
  BsLightning,
  BsLink45Deg,
  BsChatDots,
  BsPencilSquare,
  BsChatSquareDots,
  BsInfoCircle,
} from "react-icons/bs"

const ToolbarMain: React.FC = () => {
  const {
    currentChat: { route },
  } = useSelector((state: RootStore) => state)

  const setToolbar = () => {
    switch (route.keyWord) {
      case keyWords.chatConnect:
        return (
          <Toolbar
            routeParams={{ chatId: "", keyWord: "" }}
            Icon={BsLightning}
            title='Connect to chat'
          />
        )
      case keyWords.userConnect:
        return (
          <Toolbar
            routeParams={{ chatId: "", keyWord: "" }}
            Icon={BsLink45Deg}
            title='Subscribe to user'
          />
        )
      case keyWords.chatCreateNew:
        return (
          <Toolbar
            Icon={BsChatDots}
            title='Create new chat'
            routeParams={{ chatId: "", keyWord: "" }}
          />
        )
      case keyWords.chatEdit:
        return (
          <Toolbar
            Icon={BsPencilSquare}
            title='Settings of'
            routeParams={{
              chatId: route.chatId,
              keyWord: keyWords.chatMessages,
            }}
          />
        )
      case keyWords.chatInfo:
        return (
          <Toolbar
            Icon={BsInfoCircle}
            title='Information of'
            routeParams={{
              chatId: route.chatId,
              keyWord: keyWords.chatMessages,
            }}
          />
        )
      case keyWords.chatMessages:
        return <Toolbar />
      default:
        return <Toolbar Icon={BsChatSquareDots} title='Choose chat' />
    }
  }

  return <div className={styles.chat__toolbar}>{setToolbar()}</div>
}

export default ToolbarMain
