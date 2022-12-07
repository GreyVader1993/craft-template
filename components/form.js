//  build a form to add new job desctiption (16kb max) and submit it to the server

import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
        response: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData();
    fetch("http://localhost:3000/api/formsubmission", {
      method: "POST",
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.props.handleResponse(body);
      });
    });
  }

  handleResponse(body) {
    this.setState({ response: body });
}

  

  render() {
    return (
      <div className="flex flex-col mx-auto justify-center">
        <h2 className="font-mono font-semibold text-black text-3xl text-center m-5">
          Add a Job Description
        </h2>
        <form onSubmit={this.handleSubmit}>
          <div class="mt-10 sm:mt-0">
            <div class="md:grid md:grid-cols-1 md:gap-6">
              <div class="mt-5 md:col-span-2 md:mt-0">
                <form action="#" method="POST">
                  <div class="overflow-hidden shadow sm:rounded-md">
                    <div class="bg-white px-4 py-5 sm:p-6">
                      <div class="grid grid-cols-6 gap-6">
                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="first-name"
                            class="block text-sm font-medium text-gray-700"
                          >
                            First name
                          </label>
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autocomplete="given-name"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="last-name"
                            class="block text-sm font-medium text-gray-700"
                          >
                            Last name
                          </label>
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autocomplete="family-name"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div class="col-span-6 sm:col-span-4">
                          <label
                            for="email-address"
                            class="block text-sm font-medium text-gray-700"
                          >
                            Email address
                          </label>
                          <input
                            type="text"
                            name="email-address"
                            id="email-address"
                            autocomplete="email"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <br />
                        <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label
                            for="jobtitle"
                            class="block text-sm font-medium text-gray-700"
                          >
                            Job Title
                          </label>
                          <input
                            type="text"
                            name="jobtitle"
                            id="jobtitle"
                            autocomplete="address-level2"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div class="col-span-6">
                          <label
                            for="street-address"
                            class="block text-sm font-medium text-gray-700"
                          >
                            Job Description
                          </label>
                          <textarea
                            type="textarea"
                            name="jobdescription"
                            id="jobdescription"
                            autocomplete="street-address"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                      <button
                        type="submit"
                        class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
