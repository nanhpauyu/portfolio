import axios from 'axios';
import { url } from '../config';

function Button(params) {
    // console.log(params)
    const handleOnclick = () => {
        async function postData() {
            try {
                await axios.post(`${url}add_comment`, {
                    id: params.id,
                    comment: params.comment,
                    commenter : params.commenter,
                    email : params.email
                });
            } catch (error) {
                console.error(error);
            }
        }
        postData();
    }
    return (
        <>
            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={handleOnclick}><i className="fa-solid fa-plus"></i></button>
        </>
    )
} export default Button