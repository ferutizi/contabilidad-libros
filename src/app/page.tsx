'use client'

import Tabla from "./components/Tabla";
import useAsientoForm from "./forms/useAsientoForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"

export default function Home() {
  
  const [formulario, handleChange, handleChangeRegistro, handleSubmit, agregarFila, tabla] = useAsientoForm()

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-16 pt-0 gap-8">
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 pt-16 sticky top-0 z-10">
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-6">
            <Input name="id" type='number' disabled value={formulario.id} onChange={handleChange} required className="text-black col-span-1"  />
            <Input name="fecha" type='date' value={formulario.fecha} onChange={handleChange} required className="text-black col-span-1" />
            <Input name="detalle" type='string' value={formulario.detalle} onChange={handleChange} required className="text-black col-span-4"  />
          </div>
          {formulario.registros.map((reg, index) =>
            <div key={index} className="grid grid-cols-6">
              <Input name={`cuenta${index + 1}`} type='string' value={reg.cuenta} onChange={(e) => handleChangeRegistro(e)} id="cuentaInput" required className="text-black col-span-2" placeholder="Cuenta" />
              <Input name={`debe${index + 1}`} type='number' value={reg.debe} onChange={(e) => handleChangeRegistro(e)} id="debeInput" className="text-black col-span-2" placeholder="Debe" />
              <Input name={`haber${index + 1}`} type='number' value={reg.haber} onChange={(e) => handleChangeRegistro(e)} id="haberInput" className="text-black col-span-2" placeholder="Haber" />
            </div>
          )}
        </div>
        <div className="flex flex-row gap-4">
          <Button onClick={() => agregarFila()} type="button" className="bg-white text-black border-gray-300 hover:bg-zinc-100 border w-80">+</Button>
          <Button type="submit" className="bg-stone-900 w-80">Registrar</Button>
        </div>
          <hr className="w-screen"></hr>
      </form>
      <Tabla tabla={tabla}/>
    </main>
  );
}