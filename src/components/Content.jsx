
import { useState , useEffect } from 'react'
import Preview from '../assets/Preview.png'
import ContentCard from './ContentCard'
import { useStore } from '../store/store'
import moment from 'moment';
const Content = () => {
    const [filterd , setFilterd] = useState('group')
    const {startDate , endDate} = useStore();
    const [data , setData] = useState([]);
    const dataPreview =[
        {
            id:1,
            likes:120,
            comments:30,
            date:"07-12-2025",
            title:"Today",
            photo:Preview,
             imageUpload:"07-12-2025",
        },
        {
            id:2,
            likes:220,
            comments:50,
            date:"08-12-2025",
            title:"Today",
            photo:Preview,
             imageUpload:"08-12-2025",
        },
        {
            id:3,
            likes:220,
            comments:50,
            date:"12-12-2025",
            title:"Today",
            photo:Preview,
             imageUpload:"12-12-2025",
        },
        {
            id:4,
            likes:220,
            comments:50,
            date:"02-12-2025",
            title:"Today",
            photo:Preview,
              imageUpload:"02-12-2025",
        },
        {
            id:5,
            likes:220,
            comments:50,
            date:"03-12-2025",
            title:"Today",
            photo:Preview,
           imageUpload:"03-12-2025",
        },
          {
            id:6,
            likes:120,
            comments:30,
            date:"23-12-2025",
            title:"Today",
            photo:Preview,
            imageUpload:"23-12-2025",
        },
        {
            id:7,
            likes:220,
            comments:50,
            date:"07-12-2025",
            title:"Today",
            photo:Preview,
            imageUpload:"07-12-2025",
        },
        {
            id:8,
            likes:220,
            comments:50,
            date:"09-12-2025",
            title:"Today",
            photo:Preview,
             imageUpload:"09-12-2025",
        },
        {
            id:9,
            likes:220,
            comments:50,
            date:"05-12-2025",
            title:"Today",
            photo:Preview,
             imageUpload:"05-12-2025",
        },
        {
            id:10,
            likes:220,
            comments:50,
            date:"05-12-2025",
            title:"Today",
            photo:Preview,
             imageUpload:"05-12-2025",
        }
    ]
    const [visibleElements , setVisibleElements] = useState(4);
   useEffect(() => {
        let filteredData = dataPreview;
        
        if (startDate) {
            filteredData = filteredData.filter((item) => {
                const itemDate = moment(item.date, 'DD-MM-YYYY');
                const start = moment(startDate);
                return itemDate.isSameOrAfter(start, 'day');
            });
        }
        if (endDate) {
            filteredData = filteredData.filter((item) => {
                const itemDate = moment(item.date, 'DD-MM-YYYY');
                const end = moment(endDate);
                return itemDate.isSameOrBefore(end, 'day');
            });
        }
        setData(filteredData);
        setVisibleElements(8); 
    }, [startDate, endDate]);
    
    const LoadMore = () => {
        setVisibleElements((prev) => prev + 4);
    }
    return (
        <div className="max-w-[836px] pb-[50px] mt-[20px] w-full relative z-[1] flex justify-center m-auto flex-col  items-center">
<div className="w-full items-center flex justify-end gap-[20px] mr-[20px] 900:mr-0">
    <div className='cursor-pointer' onClick={() => setFilterd('group')}>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
<path fill="none" stroke={filterd === 'group' ? "#3D8EDA" :"#C8C8C8"} stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 4h2v2H4zm0 14h2v2H4zM18 4h2v2h-2zm0 7h2v2h-2zm-7 0h2v2h-2zm-7 0h2v2H4zm7-7h2v2h-2zm0 14h2v2h-2zm7 0h2v2h-2z"/></svg>
</div>
<div className='cursor-pointer' onClick={() => setFilterd('list')}>
    <svg width="24" height="22" viewBox="0 0 24 22" fill={filterd === 'list' ? "#3D8EDA" :"#C8C8C8"} xmlns="http://www.w3.org/2000/svg">
<rect width="6" height="6" fill=""/>
<rect y="8" width="6" height="6" fill=""/>
<rect y="16" width="6" height="6" fill=""/>
<rect x="9" y="10" width="15" height="2" fill=""/>
<rect x="9" y="18" width="15" height="2" fill=""/>
<rect x="9" y="2" width="15" height="2" fill=""/>
</svg>
</div>
</div>
        <div className={`flex gap-[8px] ${filterd === 'list' ? 'flex-col w-full' : 'flex-wrap justify-center' }   mt-[25px]  `}>
            {
                data.slice(0, visibleElements).map((item)=>(
                  <ContentCard item={item} filterd={filterd}/>
                ))
            }
        </div>
       
            {visibleElements < data.length && (
                <button onClick={LoadMore} className='rounded-full w-[111px] h-[28px] mt-[16px] cursor-pointer border-[#929292] text-[#929292] border flex items-center justify-center  '>Load More</button>
            )}
       
        </div>
    )
}

export default Content