import Button from "./Button"
import { useState } from 'react';


function Database(props) {
    let data = Array.from(props.data).reverse()
    data  = data.slice(0,11)
    const [comment, setComment] = useState()
    const [commenter, setCommenter] = useState()
    const [email, setEmail] = useState()
    return (
        <>
            {
                data.length == 0 || data.length == undefined?
                    <section className="resume-section" id="database">
                        <div className="resume-section-content">
                            <h2 className="mb-5">Database</h2>
                            <p>No Data Yet</p>
                        </div>
                    </section>
                    :
                    <section className="resume-section" id="database">
                        <div className="resume-section-content">
                            <h2 className="mb-5">Database</h2>
                            <p>The table show Job Applications:</p>
                            <table className="table table-hover small">
                                <thead>
                                    <tr>
                                        <th>Position</th>
                                        <th>Location</th>
                                        <th>Company</th>
                                        <th>Status</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map(e => {
                                        return (
                                            <tr key={e.id}>
                                                <td>{e.job_title}</td>
                                                <td>{e.job_location}</td>
                                                <td>{e.company_name}</td>
                                                <td>
                                                    <span style={e.status.charAt(0) === 'R' ? { color: 'red' } : {}}>
                                                        {e.status}
                                                    </span>
                                                </td>

                                                <td>
                                                    <button type="button" className="btn" data-bs-toggle="modal" data-bs-target={`#target${e.id}`}>
                                                        <i className="fa-regular fa-comment"></i>
                                                    </button>

                                                    <div className="modal" id={`target${e.id}`}>
                                                        <div className="modal-dialog">
                                                            <div className="modal-content">

                                                                <div className="modal-header">
                                                                    <h4 className="modal-title">Add Comment for {e.job_title}</h4>
                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                                </div>

                                                                <div className="modal-body">
                                                                    <input type="text" className="form-control" placeholder="name" required onChange={e => setCommenter(e.target.value)} />
                                                                    <input type="email" className="form-control" placeholder="email" required onChange={e => setEmail(e.target.value)} />
                                                                    <label htmlFor="comment">Comments:</label>
                                                                    <textarea className="form-control" rows="5" id="comment" name="text" onChange={e => setComment(e.target.value)}></textarea>
                                                                </div>

                                                                <div className="modal-footer">
                                                                    <Button id={e.id} comment={comment} commenter={commenter} email={email} />
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </section>
            }
        </>
    )
} export default Database