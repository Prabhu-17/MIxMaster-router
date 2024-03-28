import Wrapper from "../assets/wrappers/SearchForm"
import { Form, useNavigation } from "react-router-dom"
const SearchForm = ({searchTerm}) => {
  const navigation=useNavigation();
  const isSubmitting=navigation.state=="submitting"
  return (
    <Wrapper>
      <Form className="form">
        <input type="search" name="search" className="form-input" defaultValue={searchTerm}/>
        <button className="btn" type="submit">
          {isSubmitting?"searching":"search"}
        </button>
      </Form>
    </Wrapper>
  )
}
export default SearchForm