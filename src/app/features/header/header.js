import React, {useState} from 'react';
import { useDispatch } from 'react-redux';

const Header = () => {

    const [inputText, setInputText] = useState('')
    const dispatch = useDispatch()
    const handleTextInput = (e) => setInputText(e.target.value)

    const handleKeyDown = e => {
        const trimmedText = e.target.value.trim()
        if (e.key == 'Enter' && trimmedText) {
            dispatch({type: 'todos/todoAdded', payload: trimmedText})
            setInputText('')
        }
    }

    return (
        <input  
                type="text"
                placeholder="What needs to be done?"
                autoFocus={true}
                value={inputText}
                onChange={handleTextInput}
                onKeyDown={handleKeyDown}/>
    )

}

export default Header