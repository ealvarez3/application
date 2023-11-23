import styled from "styled-components";
import { useMsal } from "@azure/msal-react";

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: .5rem 2rem;
    height: 1rem;
    background-color: #000;
`;

const TopBarContent = styled.p`
    font-size: .75rem;
    font-weight: 500;
    color: #ffffff;
    margin: 0;
`;

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  height: 3rem;
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const NavbarLogo = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #000000;
  padding: 1rem;
  background-color: #000;
  color: #ffffff;
  border-radius: 0.5rem;
  transition: 0.3s ease all;
  cursor: pointer;
  margin: 0;
  text-decoration: none;

  &:hover {
    background-color: #ffffff;
    color: #000000;
  }
`;

const NavbarMenu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

const NavbarMenuItem = styled.li`
  display: flex;
  margin-left: 1rem;
`;

const NavbarMenuLink = styled.a`
  font-size: 1rem;
  font-weight: 500;
  color: #4b5563;
  margin: 0 1rem;
  cursor: pointer;
  padding: 1rem;
  text-decoration: none;
  transition: 0.3s ease all;
  border-radius: 0.5rem;

  &:hover {
    background-color: #000;
    color: #ffffff;
  }
`;

const NavbarLogout = styled.button`
  font-size: 1rem;
  font-weight: 600;
  color: #000000;
  margin-left: 1rem;
  cursor: pointer;
  border: none;
  background-color: red;
  color: #ffffff;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: 0.3s ease all;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export default function Navbar() {
  const links = [
    {
      name: "Inicio",
      path: "/",
    },
    {
      name: "Distribuidores",
      path: "/distribuidores",
    },
    {
      name: "Clientes",
      path: "/clientes",
    },
    {
      name: "Precios",
      path: "/precios",
    },
    {
      name: "Tabla de penalizaciones",
      path: "/penalizaciones",
    },
  ];

  const instance = useMsal();

  const handleLogout = () => {
    const accessMethod = window.sessionStorage.getItem("accessMethod");

    if (accessMethod === "microsoft") {
      if (!instance) {
        return;
      }

      instance.instance.logout();
      window.sessionStorage.clear();

      return (window.location.href = "/auth/login");
    }

    window.sessionStorage.clear();
    window.location.href = "/auth/login";
  };

  return (
    <NavigationContainer>
        <TopBar>
            <TopBarContent>
                {window.sessionStorage.getItem("user") ? window.sessionStorage.getItem("user") : ""}
            </TopBarContent>
            <TopBarContent>
                {
                    new Date().toLocaleDateString("es-ES", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })
                }
            </TopBarContent>
        </TopBar>
      <NavbarContainer>
        <NavbarLogo>AdaraTPS</NavbarLogo>
        <NavbarMenu>
          {links.map((link, index) => (
            <NavbarMenuItem key={index}>
              <NavbarMenuLink href={link.path}>{link.name}</NavbarMenuLink>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
        <NavbarLogout onClick={handleLogout}>Cerrar sesión</NavbarLogout>
      </NavbarContainer>
    </NavigationContainer>
  );
}
