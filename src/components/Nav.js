import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav>
      {/* <h1>Chill Jam</h1> */}
      <button onClick={()=> setLibraryStatus(!libraryStatus)}>
        <FontAwesomeIcon icon={faMusic} />
        Library
      </button>
    </nav>
  )
};

export default Nav; 