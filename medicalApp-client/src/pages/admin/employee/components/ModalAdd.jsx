import React from "react";
import { URL_IMAGE } from "../../../../api";

export default function ModalAddProfesion({
  form,
  formChange,
  save,
  professions,
  specialties,
}) {
  return (
    <div
      className="modal fade"
      id="addEmployee"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Registrando medico
            </h5>
            <button
              type="button"
              className="btn btnModalClose"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i class="fas fa-times"></i>
            </button>
          </div>
          <div className="modal-body">
            <div className="card-body">
              {/* <div className="d-flex justify-content-center">
                <img
                  src={`${
                    form.image
                      ? URL_IMAGE + form.image
                      : "../assets/img/profile.jpg"
                  }`}
                  height="100"
                  width="100"
                  style={{ borderRadius: 10 }}
                  alt="user1"
                />
              </div> */}
              <form role="form text-left">
                <div className="row mt-3">
                  <div className="col">
                    <input
                      onChange={({ target }) => formChange(target)}
                      name="firstName"
                      type="text"
                      value={form.firstName}
                      className="form-control"
                      placeholder="Nombre"
                      aria-label="Name"
                      aria-describedby="email-addon"
                    />
                  </div>
                  <div className="col">
                    <input
                      onChange={({ target }) => formChange(target)}
                      name="lastName"
                      type="text"
                      value={form.lastName}
                      className="form-control"
                      placeholder="Apellidos"
                      aria-label="Name"
                      aria-describedby="email-addon"
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <input
                      onChange={({ target }) => formChange(target)}
                      name="email"
                      type="email"
                      value={form.email}
                      className="form-control"
                      placeholder="Email"
                      aria-label="Email"
                      aria-describedby="email-addon"
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <input
                      onChange={({ target }) => formChange(target)}
                      name="document"
                      type="text"
                      value={form.document}
                      className="form-control"
                      placeholder="documento"
                      aria-label="Email"
                      aria-describedby="email-addon"
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <select
                      name="profession_id"
                      onChange={({ target }) => formChange(target)}
                      name="profession_id"
                      className="form-control"
                    >
                      <option value="0" disabled selected>
                    Seleccionar profesi??n
                  </option>
                      {professions.map(
                        (e) =>
                          e.state && (
                            <option
                              key={e.id}
                              value={e.id}
                              selected={
                                e.id == form.profession_id ? true : false
                              }
                            >
                              {e.name}
                            </option>
                          )
                      )}
                    </select>
                  </div>
                  <div className="col">
                    <select
                      onChange={({ target }) => formChange(target)}
                      name="specialty_id"
                      className="form-control"
                    >
                      <option value="0" disabled selected>
                        Seleccionar especialidad
                      </option>
                      {specialties.map(
                        (e) =>
                          e.state && (
                            <option
                              key={e.id}
                              value={e.id}
                              selected={
                                e.id == form.specialty_id ? true : false
                              }
                            >
                              {e.name}
                            </option>
                          )
                      )}
                    </select>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <input
                      onChange={({ target }) => formChange(target)}
                      name="cellPhone"
                      type="text"
                      value={form.cellPhone}
                      className="form-control"
                      placeholder="Telefono"
                      aria-label="Email"
                      aria-describedby="email-addon"
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <input
                      onChange={({ target }) => formChange(target)}
                      name="password"
                      type="password"
                      className="form-control"
                      placeholder="contrase??a"
                      aria-describedby="email-addon"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <button
                    type="button"
                    onClick={() => save()}
                    className="btn bg-gradient-dark w-100 my-4 mb-2"
                  >
                    Registrar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
