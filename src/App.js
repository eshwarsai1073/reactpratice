import logo from './logo.svg';
import './index.css';
import Input from './components/Input';
import Btn from './components/Btn';
import man from './images/man.jpg'

function App() {
  return (
    <div className=" flex justify-center items-center h-screen flex-col bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
      <div className='flex bg-white w-1/2 rounded-md' >
        <div className='w-1/2 border-r-2'>
          <img src={man} className='object-contain h-full  rounded-md'></img>
        </div>
        <div className='px-14 py-10 rounded-md w-1/2'>
        <h1 className='text-center text-2xl font-bold mb-4'>Login</h1>
    <Input lableName='Email' inputType='email' placeHolder='Type your email' />
    <Input lableName='Password' inputType='password' placeHolder='Type Your Password' /> 
<a className='text-xs text-right block mb-4'>Forgot Password?</a>
<Btn inputType='submit' valueTx='submit'  />
</div>
    </div>
    </div>
  );
}

export default App;
