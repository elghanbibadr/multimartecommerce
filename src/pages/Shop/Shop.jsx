import React ,{useState} from 'react'
import Container from '../../componenet/UI/Container'
import chevronIcon from "../../assets/chevron-right-solid.svg"
const Shop = () => {
  const data = [ {id: 1, label: "sofa"},{id: 2, label: "mobile"},{id: 3, label: "chair"},{id: 4, label: "watch"},{id: 5, label: "wireless"}];
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);
  
  const toggleDropdown = () => setOpen(!isOpen);
  
  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
  }
  
  return (

    <>
    <div className='bg-primarycolor p-3'>
      <h1 className='text-white font-bold text-center my-6'>Products</h1>
    </div>
    <Container>
     {/* dropdown 1 */}
       <div className='md:flex md:justify-between '>
         <div className='dropdown md:w-[300px]'>
               <div className='dropdown-header' onClick={toggleDropdown}>
          {selectedItem ? items.find(item => item.id == selectedItem).label : "Filter By Category"}
          <img src={chevronIcon}  className={` h-3 icon ${isOpen && "open"}`}/>
               </div>
               <div className={`dropdown-body ${isOpen && 'open'}`}>
          {items.map(item => (
            <div className="dropdown-item" onClick={e => handleItemClick(e.target.id)} id={item.id}>
              <span className={`dropdown-item-dot ${item.id == selectedItem && 'selected'}`}>• </span>
              {item.label}
            </div>
          ))}
               </div>
             </div>
             {/* search input */}
             <form  className='md:w-1/2'  >
               <div className='flex justify-between p-2 rounded-md mt-4 items-center border-[1px]'>
          <input className='outline-none p-0 bg-transparent m-0 border-none' type="text" placeholder='Search' />
          <svg className='h-4  ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
           <path fill="#999" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
          </svg>
               </div>
             </form>
       </div>
      
    </Container>
    </>
  )
}

export default Shop