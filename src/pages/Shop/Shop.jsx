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
      {/* <form>
        <select className='capitalize'>
          <option value="">filter by category</option>
          <option value="">sofa</option>
          <option value="">mobile</option>
          <option value="">chair</option>
          <option value="">watch</option>
          <option value="">wireless</option>
        </select>
        <select>
          <option value="">Sort by</option>
          <option value="">Ascending</option>
          <option value="">Descending</option>
        
        </select>
      </form> */}
       <div className='dropdown'>
      <div className='dropdown-header' onClick={toggleDropdown}>
        {selectedItem ? items.find(item => item.id == selectedItem).label : "Filter byCategory"}
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
    </Container>
    </>
  )
}

export default Shop