import React from 'react';

class JobCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            jobs: []
        };
    }

    // fetch most recent 10 values sorted by date
    componentDidMount() {
        fetch('http://localhost:3000/api/feed')
            .then(res => res.json())
            .then(jobs => this.setState({ jobs }, () => console.log('Jobs fetched...', jobs)));
    }

    render() {
        return (
            <div>
                <h2 className="font-mono font-semibold text-black text-5xl text-center m-5">Jobs</h2>
                <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>                  
                    {this.state.jobs.map(job =>
                        <div className='bg-gray-900 border-2' key={job.id}>
                            <li className="p-2 uppercase">{job.job_title}</li>
                            <li className="p-2 text-base">{job.job_description}</li>
                        </div>
                    )}
                </ul>
            </div>
        );
    }
}

export default JobCard;