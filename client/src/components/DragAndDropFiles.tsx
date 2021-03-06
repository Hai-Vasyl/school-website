import React, { useEffect, useState, useRef } from "react"
import { BsCloudUpload } from "react-icons/bs"
// @ts-ignore
import styles from "../styles/form.module"
import useChangeInput from "../hooks/useChangeInput"

interface DragAndDropFilesProps {
  exClass: string
  change: any
  afterChange?: any
  children: React.ReactNode
  param: string
}

const DragAndDropFiles: React.FC<DragAndDropFilesProps> = ({
  exClass,
  change,
  children,
  afterChange,
  param,
}) => {
  const [dragging, setDragging] = useState(false)
  const [dragCounter, setDragCounter] = useState(0)
  const dropElem = useRef<HTMLDivElement>(null)
  const { changeFile } = useChangeInput()

  useEffect(() => {
    setDragCounter(0)
    const dropArea = dropElem.current
    dropArea?.addEventListener("dragenter", handleDragIn)
    dropArea?.addEventListener("dragleave", handleDragOut)
    dropArea?.addEventListener("dragover", handleDrag)
    dropArea?.addEventListener("drop", handleDrop)
    return () => {
      dropArea?.removeEventListener("dragenter", handleDragIn)
      dropArea?.removeEventListener("dragleave", handleDragOut)
      dropArea?.removeEventListener("dragover", handleDrag)
      dropArea?.removeEventListener("drop", handleDrop)
    }
  }, [])

  const handleDragIn = (event: any) => {
    event.preventDefault()
    event.stopPropagation()
    setDragCounter((prev) => prev + 1)
    if (event.dataTransfer.items && event.dataTransfer.items.length > 0) {
      setDragging(true)
    }
  }

  const handleDragOut = (event: any) => {
    event.preventDefault()
    event.stopPropagation()
    setDragCounter((prev) => prev - 1)
    if (dragCounter === 0) {
      setDragging(false)
    }
  }

  const handleDrag = (event: any) => {
    event.preventDefault()
    event.stopPropagation()
  }

  const handleDrop = (event: any) => {
    event.preventDefault()
    event.stopPropagation()
    setDragging(false)
    const { files } = event.dataTransfer
    if (files && files.length > 0) {
      changeFile(change, param, files[0])
      afterChange && afterChange(files[0])

      event.dataTransfer.clearData()
      setDragCounter(0)
    }
  }

  return (
    <div
      ref={dropElem}
      className={`${styles.droparea__wrapper_overlay} ${exClass}`}
    >
      <div
        className={`${styles.droparea__overlay} ${
          dragging && styles.droparea__overlay__active
        }`}
      >
        <BsCloudUpload className={styles.droparea__overlay_icon} />
      </div>
      {children}
    </div>
  )
}

export default DragAndDropFiles
