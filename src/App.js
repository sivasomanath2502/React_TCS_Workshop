import './App.css';
import Header from './Header';
import Title from './Title';
import Counter from './Counter';
import AddBlog from './AddBlog';
import GetPostDatas from './GetPostDatas';

function App() {
  return (
      <div className='App'>
        <Header name='SASTRA Deemed University' styleVal={{ backgroundColor: "blue", padding: 5, color: 'white' }}/>
        <Title />
        <Counter />
        <AddBlog />
        <GetPostDatas />
        <Header name='Copyrights reserved @ SivaSomanath' styleVal={{ backgroundColor: "#307e94", padding: 5, color: 'black', bottom: 0, width: "100%"}}/>
      </div>
    );
}

export default App;

