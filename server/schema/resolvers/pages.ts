import { Page } from "../models"
import { IIsAuth, IField } from "../interfaces"
import {
  uploadUserChatBucket,
  deleteUserChatBucket,
  updateUserChatBucket,
} from "../helpers/crudUserChatBucket"

export const Query = {
  async getPage(_: any, { url }: { url: string }) {
    try {
      const page = await Page.findOne({ url })
      return page
    } catch (error) {
      throw new Error(`Getting page error: ${error.message}`)
    }
  },
  async getPages(_: any, __: any, { isAuth }: { isAuth: IIsAuth }) {
    try {
      if (!isAuth.auth) {
        throw new Error("Access denied!")
      }
      //TODO: add validation and check in models

      const pages = await Page.find()
      return pages
    } catch (error) {
      throw new Error(`Getting all pages error: ${error.message}`)
    }
  },
}

export const Mutation = {
  async setPageImage(
    _: any,
    { url, image, deleting }: IField,
    { isAuth }: { isAuth: IIsAuth }
  ) {
    try {
      if (!isAuth.auth) {
        throw new Error("Access denied!")
      }
      //TODO: add validation and check in models

      const page: any = await Page.findOne({ url })
      if (!page) {
        let uploaded
        if (image) {
          uploaded = await uploadUserChatBucket(image)
        }
        const newPage = new Page({
          url,
          image: uploaded ? uploaded.Location : "",
          imageKey: uploaded ? uploaded.Key : "",
          date: new Date(),
        })
        await newPage.save()
      } else {
        let image = ""
        let imageKey = ""
        if (deleting) {
          if (page.image) {
            await deleteUserChatBucket(page.imageKey)
          }
        } else {
          if (image) {
            const uploaded = await updateUserChatBucket(image, page.imageKey)
            image = uploaded.Location
            imageKey = uploaded.Key
          }
        }

        await Page.updateOne({ url }, { image, imageKey, date: new Date() })
      }
      const modPage = await Page.findOne({ url })
      return modPage
    } catch (error) {
      throw new Error(`Update page error: ${error.message}`)
    }
  },
}