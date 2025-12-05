import Logo from '../assets/Logo.png'
import DatePicker from 'react-datepicker';
import { useState , forwardRef } from 'react';
import "react-datepicker/dist/react-datepicker.css";
const Header = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const ExampleCustomInput = forwardRef(({ value, onClick, className }, ref) => <button type="button" className={'w-[162px] flex h-[28px] border pl-1 rounded-[4px] border-[#DEDEDE]'} onClick={onClick} ref={ref}>
    {value}
    <div className='flex '>
        <div className='bg-[#EBEBEB] w-[24px] h-[24px]'>

        </div>
        <div className='bg-[#EBEBEB] w-[24px] h-[24px] border-l border-[#DEDEDE]'>

        </div>
    </div>
  </button>);
    return (
        <div className="h-[172px] w-full bg-white opacity-75 flex items-center gap-[100px] justify-center">
                <div className=''>
                    <img src={Logo} alt="Logo" className=' ml-10 pt-5'/>
                </div>
                <div>
                    <div className='flex items-center gap-[30px] '>
                        <span className='text-[24px]'>monblanproject</span>
                        <div className='border-[#3D8EDA] border px-[10px]'>
                            <span className='text-[13px] text-[#3D8EDA]'>Start on  17-02-2016</span>
                        </div>
                        
                    </div>
                    <div className='flex gap-[30px]'>
                            
                                <span><b>870</b> posts</span>
                                <span><b>1.2k</b> followers</span>
                                <span><b>345</b> following</span>
                        </div>
                        <div>
                             <DatePicker
                              selected={startDate}
                             onChange={(date) => setStartDate(date)}
                              dateFormat="dd_MM_yyyy"
                            placeholderText="from"
                             customInput={<ExampleCustomInput />}
                     dropdownMode="select"
      />
                        </div>
                </div>
        </div>
    )
}
export default Header