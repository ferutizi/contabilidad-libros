'use client'

import Tabla from "./components/Tabla";
import useAsientoForm from "./forms/useAsientoForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import useModal from "./forms/useModal";
import './globals.css'

export default function Home() {
  
  const [formulario, handleChange, handleChangeRegistro, handleSubmit, agregarFila, tabla, totalSaldos] = useAsientoForm()
  const [modal, mostrarModal, ocultarModal] = useModal()

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-16 pt-0 gap-8">
      <header className={`flex flex-col items-center ${modal && 'pt-16'} sticky top-0 z-10 shadow-lg bg-white max-w-screen  transition-all duration-200 contenedor-hover:bg-red-500`}>
      {
      modal ?
        <form onSubmit={handleSubmit} className="gap-4 flex flex-col items-center">
          <div className="flex flex-col gap-2">
            <div className="grid grid-cols-6 gap-2">
              <Input name="id" type='number' disabled value={formulario.id} onChange={handleChange} required className="text-black col-span-1 bg-stone-200"  />
              <Input name="fecha" type='date' value={formulario.fecha} onChange={handleChange} required className="text-black col-span-1" />
              <Input name="detalle" type='string' value={formulario.detalle} onChange={handleChange} required placeholder="Detalle..." className="text-black col-span-4"  />
            </div>
            {formulario.registros.map((reg, index) =>
              <div key={index} className="grid grid-cols-6 gap-2">
                <Input name={`cuenta${index + 1}`} type='string' value={reg.cuenta} onChange={(e) => handleChangeRegistro(e)} id="cuentaInput" required className="text-black col-span-2" placeholder="Cuenta" />
                <Input name={`debe${index + 1}`} type='number' value={reg.debe === 0 ? '' : reg.debe} onChange={(e) => handleChangeRegistro(e)} id="debeInput" className="text-black col-span-2" placeholder="Debe" />
                <Input name={`haber${index + 1}`} type='number' value={reg.haber === 0 ? '' : reg.haber} onChange={(e) => handleChangeRegistro(e)} id="haberInput" className="text-black col-span-2" placeholder="Haber" />
              </div>
            )}
          </div>
          <div className="flex flex-row gap-4">
            <Button onClick={() => agregarFila()} type="button" className="bg-white text-black border-gray-300 hover:bg-zinc-100 border w-80">+</Button>
            <Button type="submit" className="bg-stone-900 w-80">Registrar</Button>
          </div>
        </form>
      : <div></div>
    }
        <button
          onClick={modal ? ocultarModal : mostrarModal}
          className={`text-stone-600 transition-all duration-200 p-4 ${modal ? 'hover:-translate-y-1 hover:font-semibold hover:pb-1 hover:pt-2' : 'hover:translate-y-1 hover:font-semibold hover:pt-8'}`}
        >
          {modal ? 'ocultar ↑' : 'nuevo registro ↓' }
        </button>
        <hr className="w-screen"></hr>
      </header>
      <Tabla tabla={tabla} totalSaldos={totalSaldos} />
    </main>
  );
}