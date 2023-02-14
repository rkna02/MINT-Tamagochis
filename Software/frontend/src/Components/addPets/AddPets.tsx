import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import PetModel from '../../Models/PetModel'
import './AddPets.css'
import PetListModel from '../../Models/PetListModel'
import { request } from 'http'
import { parseJsonText } from 'typescript'

const AddPets: React.FC<{}> = () => {
    const [name, setName]: [string, (name: string) => void] = useState("")

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()  // prevent submitting default/empty form
        const request = await axios.post('http://localhost:9000/pet', { name: name })
    }

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const tempName = event.target.value;
        setName(tempName);
    }

    return (
        <div className="addPets">
            <div className='form'>
                <h1>Create a New Pet</h1>
                <div className='formContent'>
                    <h3>Name</h3>
                    <input onChange={handleNameChange}></input>
                </div>
                <div className='formButtons'>
                    <Link to='/pets'>
                        <button id='cancelButton'>Back</button>
                    </Link>
                    <Link to='/pet'>
                        <button id='createButton' onClick={handleSubmit}>Create</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AddPets