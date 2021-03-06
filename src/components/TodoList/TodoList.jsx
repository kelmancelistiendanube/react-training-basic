import React, { Component } from "react";
import "./todoList.scss";

class TodoList extends Component {
  handleSubmit = event => {
    event.preventDefault();
    alert("Add");
  };

  render() {
    return (
      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-lg-12">
              <div className="card px-3">
                <div className="card-body">
                  <h4 className="card-title">Tiendanube Todo list</h4>
                  <div className="add-items d-flex">
                    <input
                      type="text"
                      className="form-control todo-list-input"
                      placeholder="What do you need to do today?"
                    />
                    <button
                      className="add btn btn-primary font-weight-bold todo-list-add-btn"
                      onClick={() => alert("add")}
                    >
                      Add
                    </button>
                  </div>
                  <div className="list-wrapper">
                    <ul className="d-flex flex-column-reverse todo-list">
                      <li>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input className="checkbox" type="checkbox" />
                            For what reason would it be advisable.
                            <i className="input-helper"></i>
                          </label>
                        </div>
                      </li>
                      <li className="completed">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input className="checkbox" type="checkbox" />
                            For what reason would it be advisable for me to
                            think. <i className="input-helper"></i>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input className="checkbox" type="checkbox" /> it be
                            advisable for me to think about business content?
                            <i className="input-helper"></i>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input className="checkbox" type="checkbox" /> Print
                            Statements all <i className="input-helper"></i>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input className="checkbox" type="checkbox" />
                            Call Rampbo <i className="input-helper"></i>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input className="checkbox" type="checkbox" /> Print
                            bills <i className="input-helper"></i>
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <br />
              <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  Complete
                  <span class="badge badge-primary badge-pill">14</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  Pending
                  <span class="badge badge-primary badge-pill">2</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  All
                  <span class="badge badge-primary badge-pill">1</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
