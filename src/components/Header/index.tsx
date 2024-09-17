import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { changeThemeModeValue } from "../../store/reducers/layout";
import clsx from "clsx";

export default function Header() {
  const dispatch = useAppDispatch();
  const themeModeValue = useAppSelector((state) => state.layout.themeMode);

  //Probleme de class non reconnue par Tailwind :
  //solution : 1-forcer avec unusedClasses, 2-utiliser clsx (il faut l'installer avant)
  const classIconThemeModeValue = `after:content-[url('/src/assets/icons/${themeModeValue == "dark" ? "light" : "dark"}-icon.svg')]`; 

  // Force inclusion dans le build final
  // car  Tailwind CSS purifie les classes CSS inutilisées lors de la construction de l'application pour réduire la taille du fichier CSS final. 
  // Si les classes sont générées dynamiquement et ne sont pas présentes dans votre code au moment de la compilation, elles risquent d'être supprimées.
  // This variable is used to prevent TailwindCSS classes from being purged
  //const unusedClasses=" after:content-[url('/src/assets/icons/dark-icon.svg')] after:content-[url('/src/assets/icons/light-icon.svg')] ";
  //console.log(unusedClasses);

  return (
    <>
      <div>Header</div>

      {/* Switcher theme Mode */}
      <label className="inline-flex items-center cursor-pointer ">
        <input
          type="checkbox"
          value=""
          className="sr-only peer "
          onChange={() => dispatch(changeThemeModeValue())}
        />
        <div
          className={clsx(
            classIconThemeModeValue,
            `relative w-14 h-8 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-violet-300 dark:peer-focus:ring-violet-800 
            rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
            peer-checked:after:border-white border-2 border-rdx-violet-8 after:absolute after:top-0.5 after:start-[4px] after:dark:bg-white 
            after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 
            peer-checked:bg-violet-200`
          )}
        ></div>
      </label>
    </>
  );
}
