

import { toast } from "react-toastify";

const getStoredReadList = () => {
    const storedList = localStorage.getItem('readList');
    return storedList ? JSON.parse(storedList) : [];

}

const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();
    if (storedList.includes(id)) {
        
        return (id, "Book already marked as read");
    }
    else {
        storedList.push(id);
        localStorage.setItem('readList', JSON.stringify(storedList));
        toast('The book is marked as read successfully!') 
        return "Book marked as read successfully";

        // ideally triggered toast from the component
        // but for now, we will just return a message
        // You can also show a success message or update the UI accordingly
        // toast.success(`Book with ID ${id} marked as read.`); 
           
        
    }


}

export { addToStoredReadList, getStoredReadList };