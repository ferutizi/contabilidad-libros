'use client'
import { ChangeEventHandler, FormEvent, useState } from "react"

export type AsientoForm = {
  fecha: string,
  id: number,
  detalle: string,
  registros: Registro[]
}

type Registro = {
  cuenta: string,
  debe: number | '',
  haber: number | '',
}

export default function useAsientoForm() {
  const formularioInicial: AsientoForm = {
    fecha: '',
    id: 0,
    detalle: '',
    registros: [{
      cuenta: '',
      debe: '',
      haber: '',
    }],
  }

  const [formulario, setFormulario] = useState(formularioInicial)
  const [tabla, setTabla] = useState<AsientoForm[]>([])
  const [modal, setModal] = useState<boolean>(false)

  const handleSubmit  = ( e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const nuevaTabla = [...tabla, formulario]
    setTabla(nuevaTabla)
    setFormulario(formularioInicial)
    setModal(false)
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    })
  }

  const handleChangeRegistro: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    const [campo, indexStr] = name.split(/(\d+)/).filter(Boolean);
    const index = parseInt(indexStr, 10) - 1;

    setFormulario((prev) => {
      const nuevosRegistros = [...prev.registros]
      nuevosRegistros[index] = {
        ...nuevosRegistros[index],
        [campo]: value
      }
      return {
        ...prev,
        registros: nuevosRegistros
      }
    })
  }

  const agregarFila = () => {
    setFormulario((prev) => ({
      ...prev,
      registros: [...prev.registros, { cuenta: '', debe: '', haber: '' }]
    }))
  }

  const nuevoAsiento = () => {
    setModal(true)
  }

  return[formulario, handleChange, handleChangeRegistro, handleSubmit, agregarFila, tabla, modal, nuevoAsiento] as const
}