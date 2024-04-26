import './App.css';
import Accordion from './components/Accordion ';
import Breadcrumbs from './components/Breadcrumbs';
import Card from './components/Card';
import Navbar from './components/Navbar';
import PoweredRow from './components/PoweredRow';
import Tabs from './components/Tabs';

function App() {
  return (
    <div className="w-[80vw] mx-auto">
      <Navbar />
      <Breadcrumbs/>
      <h2 className='text-[32px] font-bold text-blue-800 mt-10'>Relations and Functions ( Mathematics )</h2>
      <div className='mt-10 flex justify-center'>

      <Tabs/>
      </div>
      {/* <Card/>  */}
      <div className='mt-20'></div>
      <PoweredRow/>
      <h1 className='text-[48px] font-bold mt-20 text-blue-800'>
      FAQ   
      </h1>
      <Accordion/>
      <div className='mt-40'></div>
    </div>
  );
}

export default App;
