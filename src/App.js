import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Images from './images/index';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <div className="big_container">
      <Header title="Galería de Imágenes con React" />
      <main className="container--flex">
        <Card img={ Images.galCat } title="Gato" body="Maine Coon, ejemplar es una raza de gato doméstico." />
        <Card img={ Images.galLion } title="León" body="Panthera leo, ejemplar es una subespecie del león africano." />
        <Card img={ Images.galTiger } title="Tigre" body="Panthera tigris, ejemplar es una subespecie del tigre de bengala." />
        <Card img={ Images.galPuma } title="Puma" body="Puma concolor, ejemplar es una subespecie del león de montaña." />
        <Card img={ Images.galCheetah } title="Guepardo " body="Acinonyx jubatus, ejemplar es una subespecie del guepardo del sahara." />
        <Card img={ Images.galLeopard } title="Leopardo" body="Panthera pardus, ejemplar es una subespecie del leopardo de indochina." />
      </main>
      <Footer />
    </div>
  );
}

export default App;