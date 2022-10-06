import React,{useState} from 'react';
import axios from 'axios'
function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&lang=es&appid=895284fb2d2c50a520ea537456963d9c`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="row app text-center">
      <div className='col-md-3'>
      </div>
      <div className='col-md-6'>
        <div className='container'>
        <div className="search">
            <input className='form-control'
              value={location}
              onChange={event => setLocation(event.target.value)}
              onKeyPress={searchLocation}
              placeholder='Ingrese localizacion'
              type="text" />
        </div>
          <br></br><br></br>
          <div class="card">
            <div class="card-body">
              <div className="container">
                <div className="top">
                  <div className="location">
                    <h2>{data.name}</h2>
                  </div>
                  <div>
                    {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
                  </div>
                  <div>
                    {data.weather ? <p>{data.weather[0].description}</p> : null}
                  </div>
                </div>
                {data.name !== undefined &&
                  <div className="bottom">
                    <div>
                    {data.main ? <p>Min: {data.main.temp_min.toFixed()}°C / Max: {data.main.temp_max.toFixed()}°C</p>: null}
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
          
      <div className='col-md-3'>
      </div>

      </div>
    </div>
  );
}

export default App;
