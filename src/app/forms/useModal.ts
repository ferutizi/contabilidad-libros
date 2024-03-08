'use client'

import { useState } from "react"

export default function useModal () {
  const [modal, setModal] = useState<boolean>(true)

  const mostrarModal = () => {
    setModal(true)
  }

  const ocultarModal = () => {
    setModal(false)
  }

  return[modal, mostrarModal, ocultarModal] as const
}