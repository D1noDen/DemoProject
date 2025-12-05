import Logo from '../assets/Logo.png'
import DatePicker from 'react-datepicker';
import plus from '../assets/plus.png'
import calendar from '../assets/calendar.png'
import { useState , forwardRef } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { useStore } from '../store/store';
const Header = () => {
  const {startDate ,endDate , setStartDate, setEndDate} = useStore();
  const ExampleCustomInput = forwardRef(({ value, onClick, clearData , placeholderText }, ref) => <button type="button" className={'w-[162px] flex h-[28px] border pl-1 justify-between  rounded-[4px] border-[#DEDEDE]'} onClick={onClick} ref={ref}>
   <span className='text-[#636264] font-roboto text-[13px] flex items-center'> {value || placeholderText}</span>
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
        <div className=" h-[380px] xl:h-[172px] relative z-[2] flex-col w-full bg-white/75 shadow-[0px_4px_24px_rgba(0,0,0,0.12)]  flex items-center xl:flex-row xl:gap-[100px] justify-center">
                <div className=''>
                    <img src={Logo} alt="Logo" className=' w-[100px] h-[100px]  xl:w-[138px] xl:h-[138px] ml-10 pt-5'/>
                </div>
                <div>
                    <div className='flex items-center gap-[10px] xl:gap-[30px] flex-col xl:flex-row '>
                        <span className='text-[24px] font-montserrat'>monblanproject</span>
                        <div className='border-[#3D8EDA] border px-[10px]'>
                            <span className='text-[13px] font-roboto text-[#3D8EDA]'>Start on { startDate ? moment(startDate).format('DD-MM-YYYY') : '' }</span>
                        </div>
                        
                    </div>
                    <div className='flex gap-[30px] mt-[16px] '>
                            
                                <span className='text-[14px] font-roboto'><b>870</b> posts</span>
                                <span className='text-[14px] font-roboto'><b>1.2k</b> followers</span>
                                <span className='text-[14px] font-roboto'><b>345</b> following</span>
                        </div>
                        <div className='flex gap-[5px] xl:gap-[30px] mt-[20px] flex flex-col xl:flex-row items-center'>
                            <div className='gap-[10px] flex flex-col xl:flex-row'>
                                <span className='text-[16px] text-black font-roboto'>Date</span>
                             <DatePicker
                              selected={startDate}
                                maxDate={endDate}
                             onChange={(date) => setStartDate(date)}
                              dateFormat="dd_MM_yyyy"
                            placeholderText="from"
                             customInput={<ExampleCustomInput clearData={clearData}  placeholderText="from" />}
                     dropdownMode="select"
      />
                            </div>
      <DatePicker
                              selected={endDate}
                              minDate={startDate}
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