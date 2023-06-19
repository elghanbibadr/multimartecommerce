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
       <div className='dropdown'>
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
     {/* dropdown 1 */}
      
    </Container>
    </>
  )
}

export default Shop