import React, { useContext } from 'react'
import { UserContext } from '../../context/user'
import { useNavigate, useParams } from 'react-router-dom';

const EditGundam = () => {
  const { updateGundam } = useContext(UserContext)
  const navigate = useNavigate()
  const params =  useParams()

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())
    const payload = {
      id: params.gundam_id,
      name: data.name,
      model_series: data.model_series,
      grade: data.grade,
      year: data.year,
      img_url: data.img_url
    }
    // console.log(params)
    updateGundam(payload)
    navigate(`/gundams/${params.gundam_id}`)
  }

  return (
    <div>
      <div>
        <h1>Add a Gundam You can't find!</h1>
      </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name: </label>
            <input
              type='text'
              id='name'
              name='name'
            /> <br/>
            <label>Model Series: </label>
            <input
                type='text'
                id='model_series'
                name='model_series'
            /> <br />
            <label>Grade: </label>
            <input
              type='text'
              id='grade'
              name='grade'
            /> <br />
            <label>Year: </label>
            <input
              type='number'
              name='year'
              id='year'
            /> < br />
            <label>Img_Url: </label>
            <input
              type='text'
              name='img_url'
              id='img_url'
            />
        </div>
        <input type='submit' value='Edit Gundam!' />
      </form>
    </div>
  )
}

export default EditGundam