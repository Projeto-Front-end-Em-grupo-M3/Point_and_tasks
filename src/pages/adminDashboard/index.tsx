import { useContext, useState } from "react";
import { AdminContext } from "../../contexts/AdminContext";
import logo from "../../assets/logo.png";
import { StyledDash } from "./style";
import { toast } from "react-toastify";

const AdminDashboard = () => {
  const { adm, users, setUsers, employeSearch, setEmployeSearch } =
    useContext(AdminContext);

  const [searchValue, setSearchValue] = useState("");

  const search = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (searchValue !== "") {
      const searchResults = employeSearch.filter(
        (employe) =>
          employe.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          employe.office?.toLowerCase().includes(searchValue.toLowerCase())
      );
      setUsers(searchResults);

      if (searchResults.length === 0) {
        toast.error("Usuário não encontrado");
        setUsers(employeSearch);
      }
    }

    if (searchValue === "") {
      toast.warning("Digite algo");
      setUsers(employeSearch);
    }

    setSearchValue("");
  };

  return (
    <StyledDash>
      <header>
        <img src={logo} alt="LOGO" />
        <button>Sair</button>
      </header>

      <div className="info_div">
        <h1>Usúario: {adm ? adm.name : null}</h1>
        <p>Email: {adm ? adm.email : null}</p>
      </div>

      <div className="search_div">
        <div>
          <p>Lista de usuários</p>
          <span>Gerencie as atividades da equipe</span>
        </div>
        <div>
          <input
            type="text"
            placeholder="Procurar funcionário"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
          <button type="submit" onClick={search}>
            Pesquisar
          </button>
        </div>
      </div>

      <section>
        <div>
          <p>Nome</p>
          <p>Email</p>
          <p>Cargo</p>
          <p>Turno</p>
          <span>Ver mais</span>
        </div>
        <ul>
          {users && users.length > 0 ? (
            users.map((user) => {
              return (
                <li key={crypto.randomUUID()}>
                  <h2>{user.name}</h2>
                  <p>{user.email}</p>
                  <p>{user.office}</p>
                  <span>{user.shift}</span>
                  <button type="button">Ver mais</button>
                </li>
              );
            })
          ) : (
            <h1>Nenhum funcionário cadastrado</h1>
          )}
        </ul>
      </section>
    </StyledDash>
  );
};

export default AdminDashboard;
