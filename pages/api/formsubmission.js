// get post data from a form and send it to the server

import serverlessMysql from "serverless-mysql"

export default function handler(req, res) {
    if(req.method !== 'POST') 
        
        return res.status(405).end(
            JSON.stringify({
                error: `Method ${req.method} not allowed`
            })
        )

        if(!req.body || req.body.length === 0 || req.body === undefined) {
            
            return res.status(404).json({error: 'No data found'})

        } else {
            // validate data before sending it to the server
            
            if(!req.body.name || req.body.name.length === 0 || req.body.name === undefined) {
                return res.status(404).json({error: 'No name found'})
            } else if(!req.body.email || req.body.email.length === 0 || req.body.email === undefined) {
                return res.status(404).json({error: 'No email found'})
            } else if(!req.body.job_title || req.body.job_title.length === 0 || req.body.job_title === undefined) {
                return res.status(404).json({error: 'No job_title found'})
            }

            // send data to the server

            serverlessMysql.connect({
                host: process.env.MYSQL_HOST,
                port: process.env.MYSQL_PORT,
                database: process.env.MYSQL_DATABASE,
                user: process.env.MYSQL_USER,
                password: process.env.MYSQL_PASSWORD
            })

            serverlessMysql.query({
                query: 'INSERT INTO jobs (name, email, password) VALUES (?, ?, ?)',
                values: [req.body.name, req.body.email, req.body.job_title]
            })

            serverlessMysql.end()

            return res.status(200).json("Data sent to the server")
        }
}