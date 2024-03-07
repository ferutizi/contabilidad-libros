import { AsientoForm } from "../forms/useAsientoForm"

interface TablaProps {
  tabla: AsientoForm[]
}

export default function tabla({tabla}: TablaProps ) {
  return(
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
  )
}