import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { AsientoForm, Saldos } from "../forms/useAsientoForm"
import { Dispatch, SetStateAction } from "react"

interface TablaProps {
  tabla: AsientoForm[],
  totalSaldos: Saldos,
  setTabla: Dispatch<SetStateAction<AsientoForm[]>>
}

export default function tabla({tabla, totalSaldos, setTabla }: TablaProps ) {
  const eliminarRegistro = (datos: AsientoForm) => {
    const registro = tabla.find(e => e.id === datos.id)
    const nuevaTabla = tabla.filter(e => e !== registro)
    setTabla(nuevaTabla)
  }


  return(
    <Table>
      <TableHeader>
        <TableRow className="grid grid-cols-12">
          <TableHead className="w-[120px] col-span-1">Fecha</TableHead>
          <TableHead className="w-[120px] col-span-1">Nro. Asiento</TableHead>
          <TableHead className="col-span-2">Detalle</TableHead>
          <TableHead className="col-span-2">Cuenta</TableHead>
          <TableHead className="col-span-2 justify-center">Debe</TableHead>
          <TableHead className="col-span-2 justify-center">Haber</TableHead>
          <TableHead className="col-span-2 justify-end">Accion</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          tabla.map((e, i) => 
            <div key={i}>
              <TableRow  className="bg-stone-100 grid grid-cols-12">
                <TableCell className="font-medium col-span-1">{e.fecha}</TableCell>
                <TableCell className="font-medium col-span-1">{e.id}</TableCell>
                <TableCell className="col-span-2">{e.detalle}</TableCell>
                <TableCell className="col-span-2"></TableCell>
                <TableCell className="text-right col-span-2"></TableCell>
                <TableCell className="text-right col-span-2"></TableCell>
                <TableCell className="flex items-center justify-end space-x-2 col-span-2">
                  <Button>Editar</Button>
                  <Button onClick={() => eliminarRegistro(e)}>Eliminar</Button>
                </TableCell>
              </TableRow>
              {e.registros.map((x, y) => (
                <TableRow key={y} className="grid grid-cols-12">
                  <TableCell className="col-span-1"></TableCell>
                  <TableCell className="col-span-1"></TableCell>
                  <TableCell className="col-span-2"></TableCell>
                  <TableCell className="col-span-2">{x.cuenta}</TableCell>
                  <TableCell className="text-right col-span-2">{(x.debe as number) > 0  ? '$ ' + x.debe : '-'}</TableCell>
                  <TableCell className="text-right col-span-2">{(x.haber as number) > 0  ? '$ ' + x.haber : '-'}</TableCell>
                  <TableCell className="flex items-center justify-end space-x-2 col-span-2">
                  </TableCell>
                </TableRow>
              ))}
            </div> 
          )
        }
        <TableRow className="fixed bottom-0 right-0 left-0 bg-stone-100 grid grid-cols-12 px-16">
          <TableCell className="w-[120px] col-span-1"></TableCell>
          <TableCell className="w-[120px] col-span-1"></TableCell>
          <TableCell className="col-span-2 font-bold">Transporte</TableCell>
          <TableCell className="col-span-2"></TableCell>
          <TableCell className="col-span-2 font-bold text-right">$ {totalSaldos.debe}</TableCell>
          <TableCell className="col-span-2 font-bold text-right">$ {totalSaldos.haber}</TableCell>
          <TableCell className="col-span-2"></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}