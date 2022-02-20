import { PresupuestoData, presupuesto } from "../static/MockData";

export default function Configuracion() {
  return <pre>{JSON.stringify(presupuesto, null, 2)}</pre>;
}
