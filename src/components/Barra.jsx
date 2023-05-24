
const Barra = ({ onSearchChange }) => {
    const handleSearchChange = (e) => {
    onSearchChange(e.target.value);
    };

    return (
    <>
    <nav className="navbar bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
            <a className="navbar-brand" style={{ color: "white", textAlign: "center" }}>
            Prueba Desafio Consumo de API React
            </a>
        </div>
        </nav>
    </>
    );
};

export default Barra;