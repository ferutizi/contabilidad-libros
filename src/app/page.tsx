
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <table>
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
          {/* cada ingreso */}
          <tr>
            <td>a</td>
            <td>b</td>
            <td>c</td>
            <td>d</td>
            <td>e</td>
            <td>f</td>
          </tr>

        </tbody>
      </table>
    </main>
  );
}
