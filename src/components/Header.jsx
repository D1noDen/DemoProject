import Logo from '../assets/Logo.png'
import DatePicker from 'react-datepicker';
import plus from '../assets/plus.png'
import calendar from '../assets/calendar.png'
import { useState , forwardRef } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
const Header = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const ExampleCustomInput = forwardRef(({ value, onClick, clearData , placeholderText }, ref) => <button type="button" className={'w-[162px] flex h-[28px] border pl-1 justify-between  rounded-[4px] border-[#DEDEDE]'} onClick={onClick} ref={ref}>
    {value || placeholderText}
    <div className='flex '>
        {value && <div onClick={clearData} className='bg-[#EBEBEB] w-[24px] h-full flex items-center justify-center'>
            <img src={plus} alt="plus" className=''/>
        </div>}
        <div className='bg-[#EBEBEB] w-[24px] h-full border-l border-[#DEDEDE] flex items-center justify-center'>
            <img src={calendar} alt="calendar" className=''/>
        </div>
    </div>
  </button>);
  const clearData = () => {
    setStartDate(null);
  }
  const clearEndDate = () => {
    setEndDate(null);
  }
    return (
        <div className="h-[172px] w-full bg-white shadow-[0px_4px_24px_rgba(0,0,0,0.12)] opacity-75 flex items-center gap-[100px] justify-center">
                <div className=''>
                    <img src={Logo} alt="Logo" className=' ml-10 pt-5'/>
                </div>
                <div>
                    <div className='flex items-center gap-[30px] '>
                        <span className='text-[24px]'>monblanproject</span>
                        <div className='border-[#3D8EDA] border px-[10px]'>
                            <span className='text-[13px] text-[#3D8EDA]'>Start on { startDate ? moment(startDate).format('DD-MM-YYYY') : '' }</span>
                        </div>
                        
                    </div>
                    <div className='flex gap-[30px] mt-[16px] '>
                            
                                <span><b>870</b> posts</span>
                                <span><b>1.2k</b> followers</span>
                                <span><b>345</b> following</span>
                        </div>
                        <div className='flex gap-[24px] mt-[20px]'>
                            <div className='gap-[10px] flex '>
                                <span className='text-[16px] text-black'>Date</span>
                             <DatePicker
                              selected={startDate}
                             onChange={(date) => setStartDate(date)}
                              dateFormat="dd_MM_yyyy"
                            placeholderText="from"
                             customInput={<ExampleCustomInput clearData={clearData}  placeholderText="from" />}
                     dropdownMode="select"
      />
                            </div>
      <DatePicker
                              selected={endDate}
                             onChange={(date) => setEndDate(date)}
                              dateFormat="dd_MM_yyyy"
                            placeholderText="from"
                             customInput={<ExampleCustomInput clearData={clearEndDate} placeholderText="to" />}
                     dropdownMode="select"
      />
                        </div>
                </div>
        </div>
    )
}
export default Header