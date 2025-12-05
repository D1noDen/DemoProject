const ContentCard = ({item , filterd}) => {
    return(
      <div className={` bg-white  ${filterd === 'list' ? 'flex px-2  900:p-0 w-full items-center gap-3' : "flex flex-col w-[203px]"} overflow-hidden`}>
    <img 
        src={item.photo} 
        alt={item.title} 
        className={`${filterd === 'list' ? 'w-[86px] h-[86px]' : 'w-[203px] h-[203px]'} object-cover`}
    />
    
    {filterd === 'list' ? (
        <div className='flex-1 flex items-center justify-around  flex-col gap-[2px] 400:flex-row 400:gap-0 '>
            <div className='flex flex-col gap-2'>
                <span className='text-[16px] font-semibold font-roboto'>{item.title}</span>
                <div className='flex gap-4'>
                    <div className='flex items-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48">
                            <path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.99 10.99 0 0 0 15 8"/>
                        </svg>
                        <span className="text-[14px] font-roboto ">{item.likes}</span>
                    </div>
                    
                    <div className='flex items-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M4.616 17q-.691 0-1.153-.462T3 15.385V4.615q0-.69.463-1.153T4.615 3h14.77q.69 0 1.152.462T21 4.615v15.462L17.923 17z"/>
                        </svg>
                        <span className="text-[14px] font-roboto">{item.comments}</span>
                    </div>
                </div>
            </div>
            
            <div className='flex flex-col gap-2 items-start'>
                <span className='text-[16px] font-semibold font-roboto'>{item.date}</span>
                <div className='flex gap-4'>
                    <div className='flex items-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48">
                            <path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.99 10.99 0 0 0 15 8"/>
                        </svg>
                        <span className="text-[14px] font-roboto ">{item.likes}</span>
                    </div>
                    
                    <div className='flex items-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M4.616 17q-.691 0-1.153-.462T3 15.385V4.615q0-.69.463-1.153T4.615 3h14.77q.69 0 1.152.462T21 4.615v15.462L17.923 17z"/>
                        </svg>
                        <span className="text-[14px] font-roboto ">{item.comments}</span>
                    </div>
                </div>
            </div>
            
            <div className='flex flex-col gap-2 items-start'>
                <span className='text-[16px] font-semibold font-roboto'>Image upload</span>
                <span className='text-[16px] font-semibold font-roboto'>{item.imageUpload}</span>
            </div>
        </div>
    ) : (
        
        <div className='w-full px-3 py-2'>
         <div className="flex items-center gap-[25px]">
               <div className="flex-col flex gap-[7px]">
             <span className='text-[16px] font-semibold font-roboto'>{item.title}</span>
              <div className='flex  flex-col gap-[7px]'>
                <div className='flex items-center gap-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48">
                        <path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.99 10.99 0 0 0 15 8"/>
                    </svg>
                    <span className="text-[14px] font-roboto">{item.likes}</span>
                </div>
                
                <div className='flex items-center gap-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M4.616 17q-.691 0-1.153-.462T3 15.385V4.615q0-.69.463-1.153T4.615 3h14.77q.69 0 1.152.462T21 4.615v15.462L17.923 17z"/>
                    </svg>
                    <span className="text-[14px] font-roboto">{item.comments}</span>
                </div>
            </div>
         </div>
            <div className='flex items-start flex-col  gap-[7px]'>
               <span className='text-[16px] font-semibold font-roboto'>{item.date}</span>
               <div className='flex flex-col gap-[7px]'>
                    <div className='flex items-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48">
                            <path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.99 10.99 0 0 0 15 8"/>
                        </svg>
                        <span className="text-[14px] font-roboto">{item.likes}</span>
                    </div>
                    
                    <div className='flex items-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M4.616 17q-.691 0-1.153-.462T3 15.385V4.615q0-.69.463-1.153T4.615 3h14.77q.69 0 1.152.462T21 4.615v15.462L17.923 17z"/>
                        </svg>
                        <span className="text-[14px] font-roboto">{item.comments}</span>
                    </div>
                </div>
            </div>
            </div>
            
          
            
            <div className='flex items-center justify-between mt-[25px]'>
                <span className='text-[14px] font-semibold font-roboto'>Image upload</span>
                <span className='text-[14px] font-semibold font-roboto'>{item.imageUpload}</span>
            </div>
        </div>
    )}
</div>
    )
}


export default ContentCard;