'use client'

import { ChangeEventHandler, FormEvent, useState } from "react"

type Form = {
  fecha: string,
  id: number,
  detalle: string,
  cuenta: string,
  debe: number,
  haber: number,
}

export default function Home() {
  const formularioInicial: Form = {
    fecha: '',
    id: 0,
    detalle: '',
    cuenta: '',
    debe: 0,
    haber: 0,
  }

  const [formulario, setFormulario] = useState(formularioInicial)
  const [tabla, setTabla] = useState<Form[]>([])

/*   const nuevoIngreso = () => {
    return(
      <>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>c</td>
          <td>d</td>
          <td>h</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>c</td>
          <td>d</td>
          <td>h</td>
        </tr>
      </>
    )
  } */

/*   const nuevoAsiento = (formulario: Form) => {
    const {fecha, id, detalle, cuenta, debe, haber}= formulario
    return(
      <>
        <tr>
          <td>{fecha}</td>
          <td>{id}</td>
          <td>{detalle}</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>{cuenta}</td>
          <td>{debe}</td>
          <td>{haber}</td>
        </tr>
      </>
    )
  } */

  const handleSubmit  = ( e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const nuevaTabla = [...tabla, formulario]
    setTabla(nuevaTabla)
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
            <input name="cuenta" type='string' value={formulario.cuenta} onChange={handleChange} className="text-black" />
          </label>
          <label className="flex flex-col">
            Debe
            <input name="debe" type='number' value={formulario.debe} onChange={handleChange} className="text-black" />
          </label>
          <label className="flex flex-col">
            Haber
            <input name="haber" type='number' value={formulario.haber} onChange={handleChange} className="text-black" />
          </label>
        </div>
        <div className="flex gap-4">
          <button type="button" className="bg-stone-900">Nuevo ingreso</button>
          <button type="submit" className="bg-stone-900">Registrar</button>
        </div>
      </form>

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
