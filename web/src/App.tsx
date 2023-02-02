import { Header } from './components/Header';
import './libs/dayjs';
import { SummaryTable } from './components/SummaryTable';
import './styles/global.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
    return (
        <>
            <ToastContainer />
            <div className='w-screen h-screen flex justify-center items-center'>
                <div className='w-full max-w-5xl px-6 flex flex-col gap-16'>

                    <Header />
                    
                    <SummaryTable />
                </div>
            </div>
        </>
    );
};