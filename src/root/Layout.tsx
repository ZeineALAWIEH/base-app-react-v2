import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import themeMUI from "./themeMUI";
import { useAppSelector } from "../hooks/redux";

function Layout() {
  
  const themeModeValue = useAppSelector( (state) => state.layout.themeMode )
  
  return (
    <>
      <ThemeProvider theme={themeMUI}>
        <div className={`${themeModeValue}`}> {/* La classe dark doit être ajoutée à un élément parent */}
          <div className="bg-rdx-brand-1 text-rdx-brand-12 dark:bg-rdx-brand-dark-1  dark:text-rdx-brand-dark-12">
            <Header />
            <Outlet />
            <Footer />

            {/* restore the scroll to the top of the page when url changes */}
            {/* see ScrollRestoration in react router */}
            <ScrollRestoration
              getKey={(location) => {
                // default behavior
                return location.key;
              }}
              />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default Layout;
