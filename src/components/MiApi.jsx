
import { useEffect, useState } from "react";

const MiApi = ({ feriadosData }) => {
const [feriados, setFeriados] = useState([]);
const [filtro, setFiltro] = useState("");
const [ordenamiento, setOrdenamiento] = useState("asc");

useEffect(() => {
    console.log(feriadosData);
    setFeriados(feriadosData);
}, [feriadosData]);


//procesos de filtrado de API
const handleInputChange = (event) => {
    setFiltro(event.target.value);
};


const handleOrdenamientoChange = (event) => {
    setOrdenamiento(event.target.value);
};

const feriadosFiltrados = feriados?.data?.filter((feriado) =>
    feriado.title.toLowerCase().includes(filtro.toLowerCase()) ||
    feriado.extra.toLowerCase().includes(filtro.toLowerCase()) 
);

//proceso de ordenamiento Ascendente o Descendente
const ordenarFeriados = (feriados) => {
    if (feriados === undefined) {
    return [];
    }

    return feriados.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    if (dateA < dateB) {
        return ordenamiento === "asc" ? -1 : 1;
    } else if (dateA > dateB) {
        return ordenamiento === "asc" ? 1 : -1;
    } else {
        return 0;
    }
    });
};

const feriadosOrdenados = ordenarFeriados(feriadosFiltrados);

return (
    <div>
    <label className="m-3">Filtro de Búsqueda por Descripción o Tipo:</label>
    <input
        type="text"
        placeholder="Buscar feriado..."
        value={filtro}
        onChange={handleInputChange}
    />

    <label className="m-3">Ordenamiento por Fecha:</label>
    <select value={ordenamiento} onChange={handleOrdenamientoChange}>
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
    </select>

    <table className="table table-bordered border-primary">
        <thead>
        <tr>
            <th scope="col">FECHA</th>
            <th scope="col">DESCRIPCION</th>
            <th scope="col">TIPO</th>
        </tr>
        </thead>
        <tbody>
        {feriadosOrdenados?.map((feriado) => {
            return (
            <tr key={feriado.title}>
                <td>{feriado.date}</td>
                <td>{feriado.title}</td>
                <td>{feriado.extra}</td>
            </tr>
            );
        })}
        </tbody>
    </table>
    </div>
);
};

export default MiApi;
