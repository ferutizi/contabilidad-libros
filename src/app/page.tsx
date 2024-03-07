'use client'

import { ChangeEventHandler, FormEvent, useState } from "react"

type AsientoForm = {
  fecha: string,
  id: number,
  detalle: string,
  registros: Registro[]
}

type Registro = {
  cuenta: '',
  debe: '',
  haber: '',
}

export default function Home() {
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
  const [agregarFila, setAgregarFila] = useState<boolean>(false)

  const handleSubmit  = ( e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 gap-8">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="flex flex-col">
          <div className="flex">
            <label className="flex flex-col">
              Fecha
              <input name="fecha" type='date' value={formulario.fecha} onChange={handleChange} className="text-black" />
            </label>
            <label className="flex flex-col">
              Nº de Asiento
              <input name="id" type='number' disabled value={formulario.id} onChange={handleChange} className="text-black"  />
            </label>
            <label className="flex flex-col">
              Detalle
              <input name="detalle" type='string' value={formulario.detalle} onChange={handleChange} className="text-black"  />
            </label>
            <label className="flex flex-col">
              Cuenta
              <input name="cuenta" type='string' value={formulario.registros[0].cuenta} onChange={handleChange} className="text-black" />
            </label>
            <label className="flex flex-col">
              Debe
              <input name="debe" type='number' value={formulario.registros[0].debe} onChange={handleChange} className="text-black" />
            </label>
            <label className="flex flex-col">
              Haber
              <input name="haber" type='number' value={formulario.registros[0].haber} onChange={handleChange} className="text-black" />
            </label>
          </div>
        </div>
        <div className="flex gap-4">
          <button onClick={() => setAgregarFila(true)} type="button" className="bg-stone-900">++</button>
          <button type="submit" className="bg-stone-900">Registrar</button>
        </div>
      </form>
      {agregarFila && 
      <form className="flex self-end">
          <label className="flex flex-col">
            Cuenta
            <input name="cuenta2" type='string' value={formulario.cuenta2} onChange={handleChange} className="text-black" />
          </label>
          <label className="flex flex-col">
            Debe
            <input name="debe2" type='number' value={formulario.debe2} onChange={handleChange} className="text-black" />
          </label>
          <label className="flex flex-col">
            Haber
            <input name="haber2" type='number' value={formulario.haber2} onChange={handleChange} className="text-black" />
          </label>
      </form>
      }

      <div className="flex w-full justify-center">
        <table className="w-full">
          <thead>
            <tr>
              <td>Fecha</td>
              <td>Nº de Asiento</td>
              <td>Detalle</td>
              <td>Cuenta</td>
              <td>Debe</td>
              <td>Haber</td>
            </tr>
          </thead>
          <tbody>
            {
              tabla.map(e => 
                <>
                  <tr className="text-white">
                    <td>{e.fecha}</td>
                    <td>{e.id}</td>
                    <td>{e.detalle}</td>
                  </tr>
                  <tr className="text-white">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{e.cuenta}</td>
                    <td>{e.debe}</td>
                    <td>{e.haber}</td>
                  </tr>
                  <tr className="text-white">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{e.cuenta2}</td>
                    <td>{e.debe2}</td>
                    <td>{e.haber2}</td>
                  </tr>
              </> 
              )
            }
          </tbody>
        </table>
        <button>Ed</button>
      </div>
      <button>Nuevo Asiento</button>
    </main>
  );
}
