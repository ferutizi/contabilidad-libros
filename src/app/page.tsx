'use client'

import React from "react"
import { ChangeEventHandler, FormEvent, useState } from "react"

type AsientoForm = {
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

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 gap-8">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="flex flex-col">
          <div className="flex">
            <label className="flex flex-col">
              Fecha
              <input name="fecha" type='date' value={formulario.fecha} onChange={handleChange} required className="text-black" />
            </label>
            <label className="flex flex-col">
              Nº de Asiento
              <input name="id" type='number' disabled value={formulario.id} onChange={handleChange} required className="text-black"  />
            </label>
            <label className="flex flex-col">
              Detalle
              <input name="detalle" type='string' value={formulario.detalle} onChange={handleChange} required className="text-black"  />
            </label>
            <div className="flex flex-col gap-4">
              {formulario.registros.map((reg, index) =>
                  <div key={index} className="flex">
                    <input name={`cuenta${index + 1}`} type='string' value={reg.cuenta} onChange={(e) => handleChangeRegistro(e)} id="cuentaInput" required className="text-black" placeholder="Cuenta" />
                    <input name={`debe${index + 1}`} type='number' value={reg.debe} onChange={(e) => handleChangeRegistro(e)} id="debeInput" className="text-black" placeholder="Debe" />
                    <input name={`haber${index + 1}`} type='number' value={reg.haber} onChange={(e) => handleChangeRegistro(e)} id="haberInput" className="text-black" placeholder="Haber" />
                  </div>
              )}
            </div>


          </div>
        </div>
        <div className="flex gap-4">
          <button onClick={() => agregarFila()} type="button" className="bg-stone-900">++</button>
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
                    {e.registros.map(e => (
                      <tr className="text-white">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>{e.cuenta}</td>
                        <td>{e.debe}</td>
                        <td>{e.haber}</td>
                      </tr>
                    ))}
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
