import React, { useState, useEffect } from 'react';
import { Link, json } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import ReactLoading from 'react-loading';
import C2 from '../components/C2'
import C3 from '../components/C3'
import C4 from '../components/C4'
import C5 from '../components/C5'
import C6 from '../components/C6'
import C7 from '../components/C7'
import C8 from '../components/C8'
import C9 from '../components/C9'
import C10 from '../components/C10'
import C11 from '../components/C11'
import C12 from '../components/C12'
import C13 from '../components/C13'
import C14 from '../components/C14'
import C15 from '../components/C15'
import C16 from '../components/C16'
import C17 from '../components/C17'
import C18 from '../components/C18'
import C19 from '../components/C19'
import C20 from '../components/C20'

function C1() {
  const [selectedButton, setSelectedButton] = useState(null);
  const [poke, setPoke] = useState(null);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
    if (buttonIndex === 0) {
      alertTrue();
      setValue(value + 1);
    }
    setButtonDisabled(true);
  };

  console.log(poke)


  const alertTrue = () => {
    Swal.fire('Good job!', 'ยินดีด้วย!! คุณตอบถูก', 'success');
  };

  useEffect(() => {
    const loadPoke = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/1`);
        setPoke(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadPoke();
  }, []);

  return (
    <div className="block max-w-5xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700  ">
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
        <h1 style={{ fontSize: "40px" }}>โปเกม่อนตัวนี้</h1>
        <h2 style={{ fontSize: "40px" }}>ชื่อว่าอะไร</h2>
        <hr/>
        <br />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <button className={`btn ${selectedButton === 0 ? 'btn-success' : 'btn-primary'} mx-2`} onClick={() => handleButtonClick(0)} disabled={buttonDisabled}>Bulbasaur</button>
          <button className={`btn ${selectedButton === 1 ? 'btn-danger' : 'btn-primary'} mx-2`} onClick={() => handleButtonClick(1)} disabled={buttonDisabled}>Charizard</button>
          <button className={`btn ${selectedButton === 2 ? 'btn-danger' : 'btn-primary'} mx-2`} onClick={() => handleButtonClick(2)} disabled={buttonDisabled}>Wigglytuff</button>
          <button className={`btn ${selectedButton === 3 ? 'btn-danger' : 'btn-primary'} mx-2`} onClick={() => handleButtonClick(3)} disabled={buttonDisabled}>Graveler</button>
        </div>
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <ReactLoading type="spin" color="black" width={'20%'} height={'20%'} />
          </div>
        ) : (
          <div>
            {poke && (
              <img src={poke?.sprites?.other?.home?.front_default} alt={poke?.species.name} />
            )}
          </div>
        )}
        <div style={{ width: "100%" }}>
          <Link style={{ width: "80%" }} className='btn btn-outline-primary'><h2>ชนิดโปเกม่อนตัวนี้: 	<span style={{fontWeight:"500",fontSize:"17px"}} >Seed Pokémon </span> </h2></Link>  
          <Link style={{ width: "15%", marginLeft: "8px" }} className='btn btn-danger ' to={'/'}>Restart</Link>
        </div>
      </div>
      <br />
      <C2 value={value} setValue={setValue} />
      <br />
      <C3 value={value} setValue={setValue} />
      <br />
      <C4 value={value} setValue={setValue} />
      <br />
      <C5 value={value} setValue={setValue} />
      <br />
      <C6 value={value} setValue={setValue} />
      <br />
      <C7 value={value} setValue={setValue} />
      <br />
      <C8 value={value} setValue={setValue} />
      <br />
      <C9 value={value} setValue={setValue} />
      <br />
      <C10 value={value} setValue={setValue} />
      <br />
      <C11 value={value} setValue={setValue} />
      <br />
      <C12 value={value} setValue={setValue} />
      <br />
      <C13 value={value} setValue={setValue} />
      <br />
      <C14 value={value} setValue={setValue} />
      <br />
      <C15 value={value} setValue={setValue} />
      <br />
      <C16 value={value} setValue={setValue} />
      <br />
      <C17 value={value} setValue={setValue} />
      <br />
      <C18 value={value} setValue={setValue} />
      <br />
      <C19 value={value} setValue={setValue} />
      <br />
      <C20 value={value} setValue={setValue} />

    </div>
  );
}

export default C1;
