import './App.css';
import Fruits from './Fruit';

function App() {
  let dataAll = [
    {
      id:1,
      img: './celery.png',
      title: 'Celery Stalk',
      uom: '02',
      packSize: '02',
      perUnit: '8.99',
      total: '0.00'
    },
    {
      id:1,
      img: './apple.png',
      title: 'Apple',
      uom: '02',
      packSize: '02',
      perUnit: '8.99',
      total: '0.00'
    },
    {
      id:1,
      img: './banan.png',
      title: 'Banana',
      uom: '02',
      packSize: '02',
      perUnit: '8.99',
      total: '0.00'
    },
    {
      id:1,
      img: './orange.png',
      title: 'Kivi',
      uom: '02',
      packSize: '02',
      perUnit: '8.99',
      total: '0.00'
    },
    {
      id:1,
      img: './onion.jpg',
      title: 'Onion',
      uom: '02',
      packSize: '02',
      perUnit: '8.99',
      total: '0.00'
    },
    {
      id:1,
      img: './eggs.jpg',
      title: 'Eggs',
      uom: '02',
      packSize: '02',
      perUnit: '8.99',
      total: '0.00'
    },
  ]

  let data = dataAll.map((data, index)=>{
    return (
      <Fruits key={index} id={data.id} imag={data.img} title={data.title} uom={data.uom} packSize={data.packSize} perUnit={data.perUnit} total={data.total}/>
    )
  })
  return (
    <div className="mainBody">
      {/* This is navbar */}
      <div className='navbar'>
      </div>

      <div className='container'>
        <div className='cards'>
          {
            data
          }
        </div>
      </div>

    </div>
  );
}

export default App;
