import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { AsientoForm } from "../forms/useAsientoForm"

interface TablaProps {
  tabla: AsientoForm[]
}

export default function tabla({tabla}: TablaProps ) {
  return(
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[120px]">Fecha</TableHead>
          <TableHead className="w-[120px]">Nro. Asiento</TableHead>
          <TableHead>Detalle</TableHead>
          <TableHead>Cuenta</TableHead>
          <TableHead className="text-center">Debe</TableHead>
          <TableHead className="text-center">Haber</TableHead>
          <TableHead className="text-right">Accion</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          tabla.map(e => 
            <>
              <TableRow className="bg-stone-100">
                <TableCell className="font-medium">{e.fecha}</TableCell>
                <TableCell className="font-medium">{e.id}</TableCell>
                <TableCell>{e.detalle}</TableCell>
                <TableCell></TableCell>
                <TableCell className="text-right"></TableCell>
                <TableCell className="text-right"></TableCell>
                <TableCell className="flex items-center justify-end space-x-2"></TableCell>
              </TableRow>
              {e.registros.map(e => (
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell>{e.cuenta}</TableCell>
                  <TableCell className="text-right">{(e.debe as number) > 0  ? '$ ' + e.debe : '-'}</TableCell>
                  <TableCell className="text-right">{(e.haber as number) > 0  ? '$ ' + e.haber : '-'}</TableCell>
                  <TableCell className="flex items-center justify-end space-x-2">
                    <Button>Edit</Button>
                    <Button>Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </> 
          )
        }
      </TableBody>
    </Table>
  )
}