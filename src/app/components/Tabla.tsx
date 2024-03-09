import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { AsientoForm, Saldos } from "../forms/useAsientoForm"

interface TablaProps {
  tabla: AsientoForm[],
  totalSaldos: Saldos,
}

export default function tabla({tabla, totalSaldos }: TablaProps ) {
  return(
    <Table>
      <TableHeader>
        <TableRow className="grid grid-cols-12">
          <TableHead className="w-[120px] col-span-1">Fecha</TableHead>
          <TableHead className="w-[120px] col-span-1">Nro. Asiento</TableHead>
          <TableHead className=" col-span-2">Detalle</TableHead>
          <TableHead className=" col-span-2">Cuenta</TableHead>
          <TableHead className="text-center col-span-2">Debe</TableHead>
          <TableHead className="text-center col-span-2">Haber</TableHead>
          <TableHead className="text-right col-span-2">Accion</TableHead>
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
                <TableCell className="flex items-center justify-end space-x-2 col-span-2"></TableCell>
              </TableRow>
              {e.registros.map((e, i) => (
                <TableRow key={i} className="grid grid-cols-12">
                  <TableCell className="col-span-1"></TableCell>
                  <TableCell className="col-span-1"></TableCell>
                  <TableCell className="col-span-2"></TableCell>
                  <TableCell className="col-span-2">{e.cuenta}</TableCell>
                  <TableCell className="text-right col-span-2">{(e.debe as number) > 0  ? '$ ' + e.debe : '-'}</TableCell>
                  <TableCell className="text-right col-span-2">{(e.haber as number) > 0  ? '$ ' + e.haber : '-'}</TableCell>
                  <TableCell className="flex items-center justify-end space-x-2 col-span-2">
                    <Button>Edit</Button>
                    <Button>Delete</Button>
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