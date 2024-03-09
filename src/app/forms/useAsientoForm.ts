'use client'
import { ChangeEventHandler, FormEvent, useEffect, useState } from "react"

export type AsientoForm = {
  fecha: string,
  id: number,
  detalle: string,
  registros: Registro[]
}

export type Registro = {
  cuenta: string,
  debe: number,
  haber: number,
}

export type Saldos = {
  debe: number,
  haber: number
}

export default function useAsientoForm() {
  const [id, setId] = useState<number>(1)

  const formularioInicial: AsientoForm = {
    fecha: '',
    id,
    detalle: '',
    registros: [{
      cuenta: '',
      debe: 0,
      haber: 0,
    }],
  }
  
  //ESTADOS
  const [formulario, setFormulario] = useState(formularioInicial)
  const [tabla, setTabla] = useState<AsientoForm[]>([])
  const [totalSaldos, setTotalSaldos] = useState<Saldos>({debe: 0, haber: 0})

  const handleSubmit  = ( e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setId(prevId => prevId + 1)
    const nuevaTabla = [...tabla, formulario]
    setTabla(nuevaTabla)
    setFormulario(formularioInicial)
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
      registros: [...prev.registros, { cuenta: '', debe: 0, haber: 0 }]
    }))
  }


  //TOTALES

  const calcularTotal = (saldo: 'debe' | 'haber') => {
    const saldos = tabla.flatMap(e =>
      e.registros.map(i => Number(i[saldo]))
    )
    const total = saldos.reduce((e, acc) => e + acc, 0)
    return total
  }
  
  useEffect(() => {
    const totalDebe = calcularTotal('debe')
    const totalHaber = calcularTotal('haber')
    const nuevosSaldos = {
      debe: totalDebe,
      haber: totalHaber
    }
    setTotalSaldos(nuevosSaldos)
  }, [tabla])

  return[formulario, handleChange, handleChangeRegistro, handleSubmit, agregarFila, tabla, totalSaldos] as const
}