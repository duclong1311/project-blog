import { Field, Formik, Form } from 'formik';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import baseAxios, { METHOD_HTTP } from "../../Config/BaseAxios";

const ModelCreateUser = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async (values, { resetForm }) => {
        try {
            const data = await baseAxios(METHOD_HTTP.POST, "/posts", values);
            console.log("Data", data);
            resetForm();
            handleClose();
        } catch (e) {
            alert(e.message);
        }
    }

    return (
        <>

            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>
            <Formik
                initialValues={{
                    title: '',
                    type: 'Technology',
                    status: 'Public',
                    content: '',
                    image: null,
                }}
                onSubmit={(values, { resetForm }) => handleSubmit(values, { resetForm })}
            >
                {({ setFieldValue, submitForm }) => (
                    <Modal
                        show={show}
                        onHide={handleClose}
                        size="xl"
                        backdrop="static"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Create a new post</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <Form className="row g-3">
                                <div className="col-md-12">
                                    <label className="form-label">Title</label>
                                    <Field
                                        type="text"
                                        className="form-control"
                                        name="title"
                                    />
                                </div>

                                <div className="col-md-4">
                                    <label className="form-label">Type</label>
                                    <Field
                                        as="select"
                                        className="form-select"
                                        name="type"
                                    >
                                        <option value={"Technology"}>Technology</option>
                                        <option value={"Tips"}>Tips & Tricks</option>
                                    </Field>
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Status</label>
                                    <Field
                                        as="select"
                                        className="form-select"
                                        name="status"
                                    >
                                        <option value={"Public"}>Public</option>
                                        <option value={"Private"}>Private</option>
                                        <option value={"FriendsOnly"}>Friends only</option>
                                    </Field>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Image/Video</label>
                                    <input
                                        className="form-control"
                                        type="file"
                                        onChange={(event) =>
                                            setFieldValue("image", event.target.files[0])
                                        }
                                    />
                                </div>
                                <div className='col-md-12 img-fluid'>
                                    <label className="form-label">Content</label>
                                    <Field as="textarea" class="form-control" name='content' rows="10"></Field>
                                </div>
                            </Form>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={submitForm}>
                                Create post
                            </Button>
                        </Modal.Footer>
                    </Modal>
                )}
            </Formik>
        </>
    );
}

export default ModelCreateUser;