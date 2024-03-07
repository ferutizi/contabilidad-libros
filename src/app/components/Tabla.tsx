import { AsientoForm } from "../forms/useAsientoForm"

interface TablaProps {
  tabla: AsientoForm[]
}

export default function tabla({tabla}: TablaProps ) {
  return(
    <table className="w-full border text-white">
      <thead className="border border-red-800 text-center">
        <tr>
          <td className="w-24 px-12">Fecha</td>
          <td className="w-12 px-12">Nº de Asiento</td>
          <td className="w-60 px-12">Detalle</td>
          <td className=" px-12">Cuenta</td>
          <td className=" px-12">Debe</td>
          <td className=" px-12">Haber</td>
        </tr>
      </thead>
      <tbody className="">
        {
          tabla.map(e => 
            <>
              <tr className="bg-stone-950">
                <td>{e.fecha}</td>
                <td className="text-center">{e.id}</td>
                <td>{e.detalle}</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
                {e.registros.map(e => (
                  <tr className="border-b border-b-stone-900">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{e.cuenta}</td>
                    <td className="text-end border border-x-stone-900 border-y-0">$ {e.debe}</td>
                    <td className="text-end">$ {e.haber}</td>
                  </tr>
                ))}
              <tr className="flex justify-center items-center ">
                <button className="bg-stone-900 w-full">Editar Asiento</button>
              </tr>
          </> 
          )
        }
      </tbody>
    </table>
  )
}