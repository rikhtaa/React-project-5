import './App.css'
import Nav from './components/Nav.jsx'
import { FiSearch } from "react-icons/fi";
import { FaCirclePlus } from "react-icons/fa6";
import { useEffect, useState} from 'react';
import {collection, onSnapshot} from 'firebase/firestore'
import {db} from './config/firebase'
import ContactCard from './components/ContactCard';
import AddAndUpdateContact from './components/AddAndUpdateContact';
import useDisclouse from './hooks/useDisclouse.js';
import { ToastContainer, toast } from 'react-toastify';
import NotFoundContact from './components/NotFoundContact.jsx';


function App() {
  const [contacts, setContacts] = useState([])
  const {isOpen, onClose, onOpen} = useDisclouse()
  

  useEffect(()=>{
    const getContacts = async ()=>{
    try{
      const contactRef = collection(db, "contacts")
      
      //don't have to refresh the page.
      onSnapshot(contactRef, (snapshot)=>{
        const contactLists = snapshot.docs.map((doc)=>{
          return{
            id: doc.id,
            ...doc.data(),
          }
        })
        setContacts(contactLists)
        return contactLists
      })
     
    }catch(error){
     console.log(error)
    }
  }
    getContacts()
  },[])
  

  const filterContacts = (e)=>{
    const value = e.target.value
    const contactRef = collection(db, "contacts")
      
    onSnapshot(contactRef, (snapshot)=>{
      const contactLists = snapshot.docs.map((doc)=>{
        return{
          id: doc.id,
          ...doc.data(),
        }
      })
      const filteredContacts = contactLists.filter(contact => contact.name.toLowerCase().includes(value.toLowerCase()))

      setContacts(filteredContacts)
      return filteredContacts
    })
  }

  return (
    <>
   <div className="max-w-[370px] mx-auto px-4">
    <Nav/>
    <div className="flex gap-2">
    <div className='flex relative flex-grow items-center'>
      <FiSearch className='text-white   text-3xl absolute ml-1'/>
      <input type="text"
      onChange={filterContacts}
      className='h-10 border bg-transparent border-white rounded-md flex-grow text-white pl-9' 
      />
    </div>
      <FaCirclePlus 
      onClick={onOpen}
      className='  
      cursor-pointer
      text-5xl text-white'/>
    </div>
    <div className='mt-4 flex flex-col gap-3'>
      {contacts.length <= 0 ? <NotFoundContact/> : contacts.map((contact)=>(
       <ContactCard
       key={contact.id}
       contact={contact}
       />
      ))}
    </div>
   </div>
   <AddAndUpdateContact
   onClose={onClose}
   isOpen={isOpen}
   />
   <ToastContainer position='bottom-center'/>
   </>
  )
}

export default App