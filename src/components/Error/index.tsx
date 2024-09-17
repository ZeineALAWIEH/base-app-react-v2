import { Link } from "react-router-dom";
import errorPicture from '../../assets/pictures/404.jpeg'

export default function Error() {
  return (
    <div className="bg-cover text-center py-9 h-screen bg-center bg-[#170d32]" 
          style={{backgroundImage: `url('${errorPicture }')`}} >

      <div className="text-center bg-rdx-violet-8/[.6] text-rdx-violet-12
                      w-full py-6 mx-auto border-y-2 border-rdx-violet-12 
                      drop-shadow-[0_35px_35px_rgba(255,255,255,0.9)]
                      " >
        <h1 className="text-5xl font-bold ">Oops !</h1>
        <p className="text-2xl font-bold mt-3">
          La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <p className="text-lg">
          Vous pouvez retourner à la page d'accueil en cliquant sur le bouton
          ci-dessous :
        </p>
        <Link to={`/`}>
        <button className="bg-rdx-violet-12 text-rdx-violet-2 mt-3 text-lg text-rdx-violet-12
                            p-6 rounded-xl">
            Retour à la page d'accueil
        </button>
      </Link>
      </div>

    </div>
  );
}
