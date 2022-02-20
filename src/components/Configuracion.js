import { PresupuestoData } from "../static/MockData";

export default function Configuracion() {
  return <pre>{JSON.stringify(PresupuestoData, null, 2)}</pre>;
}
