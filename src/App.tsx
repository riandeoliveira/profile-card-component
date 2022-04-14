import { AppBox, Name, Total } from "./styles/App";
import { circles, avatar } from "./assets/media";
import infos from "./content/infos.json";

const App: React.FC = (): JSX.Element => {
  return (
    <AppBox>
      <header>
        <img alt="Card header. With little cyan blue circles" src={circles} />
      </header>
      <main>
        <img alt="User profile avatar" src={avatar} />
        <div>
          <h1>
            Victor Crest <span>26</span>
          </h1>
          <span>London</span>
        </div>
      </main>
      <footer>
        {infos.map((info, i) => (
          <div key={i}>
            <Name>{info.name}</Name>
            <Total>{info.total}</Total>
          </div>
        ))}
      </footer>
    </AppBox>
  );
};

export default App;
