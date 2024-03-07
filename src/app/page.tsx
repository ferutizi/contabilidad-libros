'use client'

import Tabla from "./components/Tabla";
import useAsientoForm from "./forms/useAsientoForm";

export default function Home() {

  const [formulario, handleChange, handleChangeRegistro, handleSubmit, agregarFila, tabla] = useAsientoForm()

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
        <Tabla tabla={tabla}/>
        <button>Ed</button>
      </div>
      <button>Nuevo Asiento</button>
    </main>
  );
}