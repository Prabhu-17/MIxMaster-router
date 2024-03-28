import axios from "axios"
import { Form, redirect } from "react-router-dom"
import { toast } from "react-toastify"

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  try {
    const response = await axios.post(newsletterUrl, data)
    console.log(response)
    toast.success(response.data.msg)
    return redirect('/')
  } catch (error) {
    console.log(error)
    toast.error(error?.response?.data?.msg)
    return error
  }
}
const Newsletter = () => {
  return (
    <Form className="form" method="POST">
      <h4 style={{textAlign:"center",marginBottom:'2rem'}}>Newsletter</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-input" name="name" id="name" required defaultValue='Virat'/>
      </div>
      <div className="form-row">
        <label htmlFor="lastname" className="form-label">Lastname</label>
        <input type="text" className="form-input" name="lastname" id="name" defaultValue='Kohli'/>
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="text" className="form-input" name="email" id="email" defaultValue='viratKohli@test.com'/>
      </div>
      <button type="submit" className="btn btn-block" style={{marginTop:'0.5rem'}}>Submit</button>
    </Form>
  )
}
export default Newsletter